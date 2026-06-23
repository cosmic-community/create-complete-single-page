import type { Tokenomics } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface TokenomicsSectionProps {
  tokenomics: Tokenomics | null
}

export default function TokenomicsSection({ tokenomics }: TokenomicsSectionProps) {
  const title = getMetafieldValue(tokenomics?.metadata?.title) || 'TOKENOMICS'
  const items = tokenomics?.metadata?.items

  if (!items || items.length === 0) {
    return (
      <section className="px-4 py-24 text-center">
        <h2 className="drip-text font-meme text-5xl sm:text-6xl">{title}</h2>
        <p className="mt-6 text-gray-300">Tokenomics coming soon... 💰</p>
      </section>
    )
  }

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="drip-text text-center font-meme text-5xl sm:text-6xl">{title}</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            if (!item) return null
            return (
              <div
                key={index}
                className="rounded-2xl bg-black/40 p-6 text-center neon-border backdrop-blur-sm"
              >
                <p className="font-meme text-3xl text-neon-cyan">
                  {getMetafieldValue(item.value)}
                </p>
                <p className="mt-2 font-bold uppercase tracking-wide text-neon-pink">
                  {getMetafieldValue(item.label)}
                </p>
                {item.description && (
                  <p className="mt-3 text-sm text-gray-300">
                    {getMetafieldValue(item.description)}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}