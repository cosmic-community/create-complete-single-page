import type { BabydickMeme } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AboutSectionProps {
  memes: BabydickMeme[]
}

export default function AboutSection({ memes }: AboutSectionProps) {
  const throneMeme = memes[0]
  const rocketMeme = memes[1]

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="drip-text font-meme text-5xl sm:text-6xl">ABOUT BABYDICK</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl">
          BABYDICK is the most degen, most legendary meme coin in the entire cosmos. Born
          on the throne 👑 and built to rocket straight to the moon 🚀. No taxes, no
          rugs, just pure meme energy and diamond hands. BABYDICK is King. 10000X
          incoming.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {throneMeme?.metadata?.image?.imgix_url && (
            <div className="rounded-3xl neon-border p-3">
              <img
                src={`${throneMeme.metadata.image.imgix_url}?w=800&h=1000&fit=crop&auto=format,compress`}
                alt={getMetafieldValue(throneMeme.metadata?.title) || 'BABYDICK King'}
                width={400}
                height={500}
                className="w-full rounded-2xl"
              />
              <p className="mt-3 font-meme text-2xl text-neon-pink">KING ON THRONE 👑</p>
            </div>
          )}
          {rocketMeme?.metadata?.image?.imgix_url && (
            <div className="rounded-3xl neon-border p-3">
              <img
                src={`${rocketMeme.metadata.image.imgix_url}?w=800&h=1000&fit=crop&auto=format,compress`}
                alt={getMetafieldValue(rocketMeme.metadata?.title) || 'BABYDICK Rocket'}
                width={400}
                height={500}
                className="w-full rounded-2xl"
              />
              <p className="mt-3 font-meme text-2xl text-neon-cyan">TO THE MOON 🚀</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}