import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PortfolioTemplate() {
  // Sample portfolio projects
  const projects = [
    {
      id: 1,
      title: "Modern Dashboard",
      category: "Web App",
      description: "A clean, modern dashboard interface for a SaaS application.",
    },
    {
      id: 2,
      title: "E-commerce Redesign",
      category: "E-commerce",
      description: "Complete redesign of an online store with improved user experience.",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile App",
      description: "User-friendly mobile banking application with secure transactions.",
    },
    {
      id: 4,
      title: "Restaurant Website",
      category: "Website",
      description: "Elegant website for a high-end restaurant with online reservations.",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      category: "Web App",
      description: "Comprehensive fitness tracking application with progress visualization.",
    },
    {
      id: 6,
      title: "Travel Blog",
      category: "Blog",
      description: "Visually stunning travel blog with interactive maps and galleries.",
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-mint-600 flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
              Designer
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#work" className="text-sm font-medium transition-colors hover:text-teal-600">
              Work
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-teal-600">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-teal-600">
              Services
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-teal-600">
              Contact
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
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  Creative Portfolio
                </h1>
                <p className="max-w-[600px] mx-auto text-gray-600 dark:text-gray-300 md:text-xl">
                  Showcasing my best work and creative projects across web design, branding, and digital experiences.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700">
                View My Work
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section id="work" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-teal-500 to-sky-600 px-3 py-1 text-sm text-white">
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  Recent Projects
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl">
                  A selection of my recent work across various industries and platforms.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-sky-600/40 group-hover:opacity-70 z-10 transition-opacity"></div>
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project+${project.id}`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 transform transition-transform duration-300">
                    <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
                    <Button variant="link" className="p-0 h-auto text-teal-600 dark:text-teal-400 mt-2">
                      View Project
                    </Button>
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
                  Let's Work Together
                </h2>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                  Have a project in mind? We'd love to discuss how we can bring your vision to life.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700">
                Schedule a Consultation
              </Button>
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
                D
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
                Designer
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Designer Portfolio. All rights reserved.
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
