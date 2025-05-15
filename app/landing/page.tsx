import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingTemplate() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-mint-600 flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
              Product
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-teal-600">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-teal-600">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-teal-600">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-teal-600">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/" className="text-sm font-medium flex items-center gap-1 text-teal-600 dark:text-teal-400">
              <ArrowLeft className="h-4 w-4" /> Back to Nova
            </Link>
            <Button className="bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700">
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-mint-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-mint-100 px-3 py-1 text-sm text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 w-fit">
                  Introducing Product
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                    The Solution You've Been Waiting For
                  </h1>
                  <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                    Our innovative product helps you solve problems faster, work more efficiently, and achieve better
                    results.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="gap-1 bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700"
                  >
                    Request a Demo <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950/30"
                  >
                    Learn More
                  </Button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Let us show you how our product can help your business.
                </p>
              </div>
              <div className="relative h-[350px] lg:h-[550px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-sky-600/40 z-10 rounded-xl"></div>
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="Product Screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-teal-500 to-sky-600 px-3 py-1 text-sm text-white">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  Everything You Need
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl">
                  Our product comes packed with all the features you need to succeed.
                </p>
              </div>
            </div>
            <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-mint-600 flex items-center justify-center text-white shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-300">Feature {i}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      A detailed description of this amazing feature and how it benefits your users.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-mint-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  Ready to Transform Your Workflow?
                </h2>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                  Join thousands of satisfied customers who have already made the switch.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="gap-1 bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700"
                >
                  Schedule a Consultation <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950/30"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-gradient-to-b from-mint-50 to-white dark:from-gray-800 dark:to-gray-900 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-mint-600 flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
                Product
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Product Inc. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              This is a template created by{" "}
              <Link href="/" className="text-teal-600 dark:text-teal-400 hover:underline">
                Nova
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
