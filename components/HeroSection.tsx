import type { Hero, BabydickMeme } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroSectionProps {
  hero: Hero | null
  memes: BabydickMeme[]
}

export default function HeroSection({ hero, memes }: HeroSectionProps) {
  const title = getMetafieldValue(hero?.metadata?.title) || 'BABYDICK'
  const subtitle =
    getMetafieldValue(hero?.metadata?.subtitle) || 'IS KING • TO THE MOON 10000X'
  const ctaText = getMetafieldValue(hero?.metadata?.cta_button_text) || 'BUY $BABYDICK'
  const ctaLink = getMetafieldValue(hero?.metadata?.cta_link) || '#'
  const secondaryText =
    getMetafieldValue(hero?.metadata?.secondary_cta_text) || 'JOIN TELEGRAM'
  const secondaryLink = getMetafieldValue(hero?.metadata?.secondary_cta_link) || '#'

  const heroImage =
    hero?.metadata?.hero_image?.imgix_url || memes[0]?.metadata?.image?.imgix_url
  const rocketImage = memes[1]?.metadata?.image?.imgix_url

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="drip-text font-meme text-6xl leading-none tracking-wider sm:text-8xl lg:text-9xl">
        {title}
      </h1>
      <p className="mt-4 font-meme text-2xl text-neon-cyan sm:text-4xl">{subtitle}</p>

      <div className="mt-10 flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-center">
        {heroImage && (
          <img
            src={`${heroImage}?w=700&h=1000&fit=crop&auto=format,compress`}
            alt="BABYDICK King on throne holding 10000X sign"
            width={350}
            height={500}
            className="w-64 rounded-3xl neon-border animate-glow-pulse sm:w-80"
          />
        )}
        {rocketImage && (
          <img
            src={`${rocketImage}?w=600&h=900&fit=crop&auto=format,compress`}
            alt="BABYDICK rocket to the moon"
            width={300}
            height={450}
            className="w-52 rounded-3xl neon-border animate-float sm:w-64"
          />
        )}
      </div>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <a
          href={ctaLink}
          className="rounded-full bg-gradient-to-r from-neon-pink to-neon-purple px-8 py-4 font-meme text-xl text-white neon-btn"
        >
          {ctaText} 🚀
        </a>
        <a
          href={secondaryLink}
          className="rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-8 py-4 font-meme text-xl text-white neon-btn"
        >
          {secondaryText} 💬
        </a>
      </div>
    </section>
  )
}