function Showreel() {
  return (
    <section id="showreel" className="bg-black">
      <div className="max-w-full mx-auto w-full px-0">
        <div className="relative h-[75vh] min-h-[480px] w-full overflow-hidden rounded-sm bg-black">
          {/* Autoplaying looping video with no controls */}
          <video
            src="/carVideo.mp4"
            poster="/showreel-poster.png"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center pointer-events-none select-none"
          />

          {/* Subtle top fade for seamless blending */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

          {/* Subtle bottom fade for seamless blending */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default Showreel
