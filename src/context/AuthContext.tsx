import React, { createContext, useContext, useState, useEffect } from 'react'

export interface User {
  id: string
  name: string
  email: string
  vehicle?: string
  createdAt: string
}

interface StoredUser extends User {
  passwordHash: string
}

interface AuthContextType {
  currentUser: User | null
  login: (email: string, password: string) => { success: boolean; error?: string }
  signup: (data: { name: string; email: string; password: string; vehicle?: string }) => { success: boolean; error?: string }
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const USERS_STORAGE_KEY = 'luxure_registered_users'
const CURRENT_USER_STORAGE_KEY = 'luxure_current_user'

// Seed a default client account if none exists
const DEFAULT_DEMO_USERS: StoredUser[] = [
  {
    id: 'usr_demo_01',
    name: 'Alexander Wright',
    email: 'client@luxuredetails.com',
    passwordHash: 'luxury123',
    vehicle: '2023 Porsche 911 GT3',
    createdAt: new Date().toISOString(),
  },
]

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    // Initialize default demo users in localStorage if empty
    try {
      const stored = localStorage.getItem(USERS_STORAGE_KEY)
      if (!stored) {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(DEFAULT_DEMO_USERS))
      }

      // Check for logged in user session
      const activeSession = localStorage.getItem(CURRENT_USER_STORAGE_KEY)
      if (activeSession) {
        setCurrentUser(JSON.parse(activeSession))
      }
    } catch (e) {
      console.error('Failed to access localStorage for auth:', e)
    }
  }, [])

  const getUsers = (): StoredUser[] => {
    try {
      const stored = localStorage.getItem(USERS_STORAGE_KEY)
      return stored ? JSON.parse(stored) : DEFAULT_DEMO_USERS
    } catch {
      return DEFAULT_DEMO_USERS
    }
  }

  const saveUsers = (users: StoredUser[]) => {
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
    } catch (e) {
      console.error('Failed to save users in localStorage:', e)
    }
  }

  const login = (email: string, password: string): { success: boolean; error?: string } => {
    const trimmedEmail = email.trim().toLowerCase()
    const users = getUsers()

    const match = users.find(u => u.email.toLowerCase() === trimmedEmail)
    if (!match) {
      return { success: false, error: 'No atelier account found matching this email address.' }
    }

    if (match.passwordHash !== password) {
      return { success: false, error: 'Invalid password. Please verify your credentials and try again.' }
    }

    const sessionUser: User = {
      id: match.id,
      name: match.name,
      email: match.email,
      vehicle: match.vehicle,
      createdAt: match.createdAt,
    }

    setCurrentUser(sessionUser)
    try {
      localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(sessionUser))
    } catch (e) {
      console.error(e)
    }

    return { success: true }
  }

  const signup = (data: { name: string; email: string; password: string; vehicle?: string }): { success: boolean; error?: string } => {
    const trimmedEmail = data.email.trim().toLowerCase()
    const users = getUsers()

    if (users.some(u => u.email.toLowerCase() === trimmedEmail)) {
      return { success: false, error: 'An atelier account with this email address already exists. Please sign in.' }
    }

    if (data.password.length < 6) {
      return { success: false, error: 'Security key must be at least 6 characters in length.' }
    }

    const newUser: StoredUser = {
      id: 'usr_' + Date.now().toString(36),
      name: data.name.trim(),
      email: trimmedEmail,
      vehicle: data.vehicle?.trim() || undefined,
      passwordHash: data.password,
      createdAt: new Date().toISOString(),
    }

    const updatedUsers = [...users, newUser]
    saveUsers(updatedUsers)

    const sessionUser: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      vehicle: newUser.vehicle,
      createdAt: newUser.createdAt,
    }

    setCurrentUser(sessionUser)
    try {
      localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(sessionUser))
    } catch (e) {
      console.error(e)
    }

    return { success: true }
  }

  const logout = () => {
    setCurrentUser(null)
    try {
      localStorage.removeItem(CURRENT_USER_STORAGE_KEY)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        signup,
        logout,
        isAuthenticated: !!currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
