import { getHero, getMemes, getTokenomics, getRoadmap, getCommunityLinks } from '@/lib/cosmic'
import StarField from '@/components/StarField'
import FloatingCoins from '@/components/FloatingCoins'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import TokenomicsSection from '@/components/TokenomicsSection'
import RoadmapSection from '@/components/RoadmapSection'
import MemeGallery from '@/components/MemeGallery'
import Footer from '@/components/Footer'

export default async function HomePage() {
  const [hero, memes, tokenomics, roadmap, community] = await Promise.all([
    getHero(),
    getMemes(),
    getTokenomics(),
    getRoadmap(),
    getCommunityLinks(),
  ])

  return (
    <main className="relative min-h-screen overflow-hidden">
      <StarField />
      <FloatingCoins />
      <div className="relative z-10">
        <HeroSection hero={hero} memes={memes} />
        <AboutSection memes={memes} />
        <TokenomicsSection tokenomics={tokenomics} />
        <RoadmapSection roadmap={roadmap} />
        <MemeGallery memes={memes} />
        <Footer community={community} />
      </div>
    </main>
  )
}