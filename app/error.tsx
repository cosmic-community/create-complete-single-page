'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-space-black text-center">
      <div className="text-6xl">💀</div>
      <h2 className="mt-4 font-meme text-3xl text-neon-pink">SOMETHING WENT REKT</h2>
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-neon-pink px-6 py-3 font-bold text-white neon-btn"
      >
        TRY AGAIN
      </button>
    </div>
  )
}