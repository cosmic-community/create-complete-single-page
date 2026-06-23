import type { CommunityLinks } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FooterProps {
  community: CommunityLinks | null
}

export default function Footer({ community }: FooterProps) {
  const links = community?.metadata?.links

  return (
    <footer className="border-t border-neon-purple/40 px-4 py-16 text-center">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-meme text-4xl text-neon-pink sm:text-5xl">BABYDICK 👑</h2>

        {links && links.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {links.map((link, index) => {
              if (!link || !link.url) return null
              return (
                <a
                  key={index}
                  href={getMetafieldValue(link.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black/50 px-6 py-3 font-bold text-neon-cyan neon-border transition-transform hover:scale-105"
                >
                  {getMetafieldValue(link.icon)} {getMetafieldValue(link.platform)}
                </a>
              )
            })}
          </div>
        )}

        <p className="mt-12 font-meme text-3xl text-neon-cyan animate-glow-pulse">
          To The Moon 🚀
        </p>
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} BABYDICK. Not financial advice. Pure meme energy.
        </p>
      </div>
    </footer>
  )
}