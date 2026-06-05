import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'

export default function Page() {
  return (
    <main className="w-full bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
    </main>
  )
}
