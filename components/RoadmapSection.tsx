import type { Roadmap } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface RoadmapSectionProps {
  roadmap: Roadmap | null
}

export default function RoadmapSection({ roadmap }: RoadmapSectionProps) {
  const title = getMetafieldValue(roadmap?.metadata?.title) || 'ROADMAP'
  const stages = roadmap?.metadata?.stages

  if (!stages || stages.length === 0) {
    return (
      <section className="px-4 py-24 text-center">
        <h2 className="drip-text font-meme text-5xl sm:text-6xl">{title}</h2>
        <p className="mt-6 text-gray-300">Roadmap coming soon... 🛣️</p>
      </section>
    )
  }

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="drip-text text-center font-meme text-5xl sm:text-6xl">{title}</h2>
        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-neon-pink via-neon-purple to-neon-cyan sm:left-1/2 sm:-translate-x-1/2" />
          {stages.map((stage, index) => {
            if (!stage) return null
            const isLeft = index % 2 === 0
            return (
              <div
                key={index}
                className={`relative mb-12 flex w-full ${
                  isLeft ? 'sm:justify-start' : 'sm:justify-end'
                }`}
              >
                <div
                  className={`ml-12 w-full rounded-2xl bg-black/40 p-6 neon-border backdrop-blur-sm sm:ml-0 sm:w-5/12 ${
                    isLeft ? 'sm:mr-auto' : 'sm:ml-auto'
                  }`}
                >
                  <span className="font-meme text-xl text-neon-yellow">
                    {getMetafieldValue(stage.phase)}
                  </span>
                  <h3 className="mt-1 font-meme text-2xl text-neon-pink">
                    {getMetafieldValue(stage.title)}
                  </h3>
                  <p className="mt-2 text-gray-300">
                    {getMetafieldValue(stage.description)}
                  </p>
                </div>
              </div>
            )
          })}
          <div className="relative mt-4 text-center">
            <span className="text-6xl animate-float">🌙</span>
            <p className="mt-2 font-meme text-3xl text-neon-cyan">TO THE MOON!</p>
          </div>
        </div>
      </div>
    </section>
  )
}