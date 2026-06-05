'use client'

import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="relative min-h-screen bg-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left side - Images and Video */}
          <div className="flex flex-col gap-6">
            {/* Top image placeholder */}
            <div className="h-48 w-full rounded-3xl bg-gray-300 md:h-64 lg:h-72" />

            {/* Bottom image placeholder */}
            <div className="h-48 w-full rounded-3xl bg-gray-300 md:h-64 lg:h-72" />

            {/* Video player */}
            <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-gray-900 md:h-96">
              <div className="flex h-full w-full items-center justify-center">
                <PlayCircle className="h-20 w-20 text-white opacity-70" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-start space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-pink-600" />
              <p className="text-sm font-medium text-gray-600">London Web Design Agency</p>
            </div>

            {/* Heading */}
            <h2 className="text-balance text-5xl font-bold md:text-6xl">
              CreativeWeb<span className="text-pink-600">.</span>
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-6 text-base leading-relaxed text-gray-800">
              <p>
                We design unique and stunning websites for businesses and enterprises worldwide, offering a personalised, hands-on service, from our London web design team, that adds true value.
              </p>

              <p>
                We break the process down into easy, manageable steps, working closely with you at every turn. From{' '}
                <a href="#" className="underline hover:text-pink-600">
                  WordPress web design
                </a>{' '}
                and{' '}
                <a href="#" className="underline hover:text-pink-600">
                  interactive website design
                </a>{' '}
                to branding,{' '}
                <a href="#" className="underline hover:text-pink-600">
                  SEO optimisation
                </a>
                ,{' '}
                <a href="#" className="underline hover:text-pink-600">
                  multilingual web design
                </a>{' '}
                and UI/UX, we take care of every detail to create a solution that&apos;s tailored just for you.
              </p>

              <p>
                With a passion for high-performance, immersive digital experiences, we focus on giving our clients a competitive edge and delivering strong ROI on their investment.
              </p>
            </div>

            {/* About Us Button */}
            <div className="pt-4">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-900 bg-white px-8 py-6 text-gray-900 hover:bg-gray-50"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Speak To Us button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow-300 text-center font-bold text-black shadow-lg transition-transform hover:scale-110">
          <span className="text-sm">Speak To Us</span>
        </button>
      </div>
    </section>
  )
}
