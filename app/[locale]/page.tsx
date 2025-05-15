"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { WaveFooter } from "@/components/wave-footer"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function LandingPage() {
  const t = useTranslations()

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
              {t("header.features")}
            </Link>
            <Link href="#portfolio" className="text-sm font-medium transition-colors hover:text-teal-600">
              {t("header.portfolio")}
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-teal-600">
              {t("header.aboutUs")}
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-teal-600">
              {t("header.contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button className="bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700">
              {t("header.contactUs")}
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
                    {t("hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">{t("hero.description")}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="gap-1 bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700"
                  >
                    {t("hero.scheduleConsultation")} <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950/30"
                  >
                    {t("hero.viewWork")}
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
                  {t("header.features")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  {t("features.title")}
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl">{t("features.description")}</p>
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
                  <CardTitle className="text-teal-800 dark:text-teal-300">{t("features.customDesign.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t("features.customDesign.description")}</p>
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
                  <CardTitle className="text-teal-800 dark:text-teal-300">{t("features.performance.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t("features.performance.description")}</p>
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
                  <CardTitle className="text-teal-800 dark:text-teal-300">{t("features.security.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t("features.security.description")}</p>
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
                  <CardTitle className="text-teal-800 dark:text-teal-300">{t("features.support.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t("features.support.description")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section - Only showing a simplified version for brevity */}
        <section
          id="portfolio"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-mint-50 to-white dark:from-gray-800 dark:to-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-teal-500 to-sky-600 px-3 py-1 text-sm text-white">
                  {t("header.portfolio")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  {t("portfolio.title")}
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl">
                  {t("portfolio.description")}
                </p>
              </div>
            </div>
            {/* Portfolio cards would go here - simplified for this example */}
          </div>
        </section>

        {/* About Us Section - Simplified */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-teal-500 to-sky-600 px-3 py-1 text-sm text-white">
                  {t("header.aboutUs")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  {t("about.title")}
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl">{t("about.description")}</p>
              </div>
            </div>
            {/* About content would go here - simplified for this example */}
          </div>
        </section>

        {/* Contact Form Section - Simplified */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-mint-50 to-white dark:from-gray-800 dark:to-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-teal-500 to-sky-600 px-3 py-1 text-sm text-white">
                  {t("header.contact")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  {t("contact.title")}
                </h2>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">{t("contact.description")}</p>
              </div>
            </div>
            {/* Contact form would go here - simplified for this example */}
          </div>
        </section>
      </main>

      {/* Wave Footer */}
      <WaveFooter />
    </div>
  )
}
