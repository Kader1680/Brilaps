import React from 'react'

function Flowshow() {
  return (
      <div className="relative w-full max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="aspect-w-16 aspect-h-9 rounded-xl shadow-2xl overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/zeez.mp4"   // replace with your video path
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </div>
      </div>
  )
}

export default Flowshow