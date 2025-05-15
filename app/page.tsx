import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { WaveFooter } from "@/components/wave-footer"
import { redirect } from "next/navigation"

// Redirect from the root to the default locale
export default function RootPage() {
  redirect("/en")
}

export function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-mint-600 flex items-center justify-center text-white font-bold">
              N
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
              Nova
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-teal-600">
              Features
            </Link>
            <Link href="#portfolio" className="text-sm font-medium transition-colors hover:text-teal-600">
              Portfolio
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-teal-600">
              About Us
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-teal-600">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
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
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                    Elevate Your Online Presence with Nova
                  </h1>
                  <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                    We create stunning, high-performance websites that help your business stand out and convert visitors
                    into customers.
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
                    View Our Work
                  </Button>
                </div>
              </div>
              <div className="relative h-[350px] lg:h-[550px] rounded-xl overflow-hidden shadow-xl perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-sky-600/40 z-10 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative transform rotate-y-10 rotate-x-5 animate-float">
                    <Image
                      src="/placeholder.svg?height=550&width=550&text=3D+PC+Workstation"
                      alt="3D PC Workstation"
                      fill
                      className="object-contain"
                      style={{
                        filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.15))",
                      }}
                    />
                  </div>
                </div>
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
                  Why Choose Nova
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl">
                  We combine cutting-edge technology with stunning design to deliver websites that perform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-mint-100 dark:border-gray-700 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-mint-600 flex items-center justify-center text-white mb-4">
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
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10v2H7z" />
                      <path d="M7 11h10v2H7z" />
                      <path d="M7 15h4v2H7z" />
                    </svg>
                  </div>
                  <CardTitle className="text-teal-800 dark:text-teal-300">Custom Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Tailored websites designed to match your brand identity and business goals.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-mint-100 dark:border-gray-700 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-mint-600 flex items-center justify-center text-white mb-4">
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
                      <path d="M12 2v8" />
                      <path d="m4.93 10.93 1.41 1.41" />
                      <path d="M2 18h2" />
                      <path d="M20 18h2" />
                      <path d="m19.07 10.93-1.41 1.41" />
                      <path d="M22 22H2" />
                      <path d="m8 22 4-10 4 10" />
                      <path d="M12 14v4" />
                    </svg>
                  </div>
                  <CardTitle className="text-teal-800 dark:text-teal-300">Performance Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Lightning-fast websites optimized for speed, SEO, and conversion.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-mint-100 dark:border-gray-700 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-mint-600 flex items-center justify-center text-white mb-4">
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m14.5 9-5 5" />
                      <path d="m9.5 9 5 5" />
                    </svg>
                  </div>
                  <CardTitle className="text-teal-800 dark:text-teal-300">Secure & Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Built with security in mind, ensuring your website and data are protected.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-mint-100 dark:border-gray-700 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-mint-600 flex items-center justify-center text-white mb-4">
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
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <CardTitle className="text-teal-800 dark:text-teal-300">Full Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Ongoing maintenance and support to keep your website running smoothly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-mint-50 to-white dark:from-gray-800 dark:to-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-teal-500 to-sky-600 px-3 py-1 text-sm text-white">
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  Our Website Templates
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl">
                  Explore our pre-designed templates that can be customized for your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card className="overflow-hidden border-mint-100 dark:border-gray-700 hover:shadow-lg transition-all">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-sky-600/40 z-10"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Landing Page Template"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-teal-800 dark:text-teal-300">Landing Page</CardTitle>
                  <CardDescription>Perfect for product launches</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    A clean, modern landing page designed to convert visitors into customers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/landing" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700">
                      View Template
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden border-mint-100 dark:border-gray-700 hover:shadow-lg transition-all">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-sky-600/40 z-10"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Portfolio Template"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-teal-800 dark:text-teal-300">Portfolio</CardTitle>
                  <CardDescription>Showcase your work</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    A portfolio template designed to highlight your projects and achievements.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/portfolio" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700">
                      View Template
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden border-mint-100 dark:border-gray-700 hover:shadow-lg transition-all">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-sky-600/40 z-10"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="E-commerce Template"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-teal-800 dark:text-teal-300">E-commerce</CardTitle>
                  <CardDescription>Sell products online</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    A complete e-commerce solution with product listings, cart, and checkout.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/ecommerce" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700">
                      View Template
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-teal-500 to-sky-600 px-3 py-1 text-sm text-white">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  We're a New Design Studio
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl">
                  Founded with a passion for creating beautiful, functional websites that make an impact.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-sky-600/40 z-10 rounded-xl"></div>
                <Image src="/placeholder.svg?height=350&width=500" alt="Our Team" fill className="object-cover" />
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold text-teal-800 dark:text-teal-300">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  At Nova, we believe that every business deserves a stunning online presence. As a newly established
                  design studio, we're focused on building strong relationships with our clients through personalized
                  service and exceptional design.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We're not just another web design agency. We're your creative partners, dedicated to understanding
                  your unique needs and crafting digital experiences that truly represent your brand and connect with
                  your audience.
                </p>
                <div className="pt-4">
                  <h4 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-3">Why Choose Us?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-1 text-teal-600 dark:text-teal-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
                      <span className="text-gray-600 dark:text-gray-300">Personalized attention to every project</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-1 text-teal-600 dark:text-teal-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
                      <span className="text-gray-600 dark:text-gray-300">Fresh, innovative design approach</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-1 text-teal-600 dark:text-teal-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
                      <span className="text-gray-600 dark:text-gray-300">Direct communication with our designers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-1 text-teal-600 dark:text-teal-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
                      <span className="text-gray-600 dark:text-gray-300">Commitment to your long-term success</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-mint-50 to-white dark:from-gray-800 dark:to-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-teal-500 to-sky-600 px-3 py-1 text-sm text-white">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  Let's Discuss Your Project
                </h2>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                  We're excited to hear about your ideas and how we can help bring them to life.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300">Contact Information</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reach out to us directly or fill out the form to schedule a consultation.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-2 text-teal-600 dark:text-teal-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-2 text-teal-600 dark:text-teal-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">hello@novawebdesign.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-2 text-teal-600 dark:text-teal-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300">Prefer to schedule a call?</p>
              <Button
                variant="outline"
                className="mt-4 border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950/30"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Wave Footer */}
      <WaveFooter />
    </div>
  )
}
