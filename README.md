# LuxureDetails — Premium Automotive Detailing Atelier

> **"Experience the prestige of a professionally detailed car, radiating elegance and refinement at every turn."**

---

## 🎯 Purpose of This Website

**LuxureDetails** is a high-end digital web application designed for a premier luxury automotive detailing atelier. Built with an editorial, ultra-minimalist monochrome aesthetic, the platform serves as an exclusive client portal and showroom for owners of collector-grade automobiles, exotics, supercars, and historic vehicles.

### Core Objectives:

1. **Digital Showcase & Brand Presence**:
   - Establishes a bespoke, gallery-grade first impression using pure black backgrounds, high-contrast typography, and cinematic automotive photography.
   - Highlights master craftsmanship, cleanroom studio standards, and precision clearcoat restoration methodologies.

2. **Transparent Service & Investment Discovery**:
   - Displays detailed service programs ranging from multi-stage paint correction to 9H ceramic & graphene matrices and interior leather restoration.
   - Features an interactive vehicle classification pricing matrix (Coupe/GT, Executive Sedan, Exotic/Hypercar, Luxury SUV) with instant price estimates and à la carte treatments.

3. **Private Client Intake & Commission Booking**:
   - Allows prospective clients and collectors to initiate intake consultations, request enclosed transport, and specify tailored restoration scopes through a private concierge booking form.

4. **Client Registry & Authentication (Local Storage)**:
   - Provides split-screen **Sign In** and **Sign Up** authentication.
   - Securely stores registered credentials and active sessions directly on `localStorage`, allowing users to register new accounts, match credentials, and manage active sessions seamlessly across the website without external backend dependencies.

---

## 🏛️ Website Pages & Architecture

| Route | Page | Purpose |
|---|---|---|
| **`/`** | **Home** | Primary landing page featuring the hero section, services preview, full-width autoplaying video showreel, craftsmanship highlights, and quick booking CTA. |
| **`/about`** | **About Us** | Atelier heritage, 4 core tenets of craftsmanship (ultrasonic profiling, jewel polishing, hermetic curing, white-glove delivery), performance metrics, and founder's creed. |
| **`/services`** | **Our Services** | Comprehensive portfolio of 6 detailing programs with category filters, time allocations, deliverable checklists, and a 5-stage protocol timeline. |
| **`/pricing`** | **Pricing Matrix** | Interactive vehicle category selector, 3 tiered packages (Essential, Signature, Masterpiece), à la carte treatments table, and FAQ accordion. |
| **`/contact`** | **Contact & Booking** | Studio headquarters location, encrypted concierge channels, intake hours, $5M insurance assurance, and multi-step vehicle booking form. |
| **`/terms`** | **Terms of Service** | Legal custody stipulations, pre-intake 50-point condition audit, deposit policies, ceramic warranties, and cookie disclosures. |
| **`/privacy`** | **Privacy Policy** | High-profile client discretion standards, zero public exposure guarantee, CCTV retention policies, and custom NDA protocols. |
| **`/login`** | **Sign In** | Split-screen login interface with cinematic imagery, password reveal, remember-me persistence, and credential verification against `localStorage`. |
| **`/signup`** | **Sign Up** | Split-screen registration interface for onboarding new clients into the private atelier registry. |

---

## 🎨 Design Philosophy — Editorial Monochrome

- **Color Palette**: Pure monochrome (`#000000` pure black backgrounds, `#FFFFFF` crisp text, subtle `hsl(0 0% 15%)` borders, and `#121212` card surfaces). Zero color distraction — visual variety stems entirely from cinematic automotive photography.
- **Typography**: 
  - **Headings (H1, H2)**: *Instrument Serif* — large tracking, editorial aesthetic.
  - **Body / Navigation / Labels**: *Inter* — weights 300 to 600 with uppercase letter-spaced captions.
- **Atmospheric Texture**: Subtle CSS-generated fractal noise grain overlay (`.grain`) applied fixed across all views.
- **Media**: Autoplaying ambient video showreel (`carVideo.mp4`) and high-resolution studio car photography.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/) (with automatic scroll-to-top on route change)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Transitions**: [Framer Motion (`motion/react`)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State & Storage**: React Context API (`AuthContext`) backed by browser `localStorage`

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Type checks via `tsc` and generates the optimized production bundle in `/dist`.
