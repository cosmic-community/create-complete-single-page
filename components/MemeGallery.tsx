import type { BabydickMeme } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface MemeGalleryProps {
  memes: BabydickMeme[]
}

export default function MemeGallery({ memes }: MemeGalleryProps) {
  if (!memes || memes.length === 0) {
    return (
      <section className="px-4 py-24 text-center">
        <h2 className="drip-text font-meme text-5xl sm:text-6xl">MEME GALLERY</h2>
        <p className="mt-6 text-gray-300">No memes yet... 🖼️</p>
      </section>
    )
  }

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="drip-text text-center font-meme text-5xl sm:text-6xl">
          MEME GALLERY
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {memes.map((meme) => {
            const img = meme.metadata?.image?.imgix_url
            if (!img) return null
            return (
              <div
                key={meme.id}
                className="group overflow-hidden rounded-2xl neon-border"
              >
                <img
                  src={`${img}?w=500&h=500&fit=crop&auto=format,compress`}
                  alt={getMetafieldValue(meme.metadata?.title) || meme.title}
                  width={250}
                  height={250}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}