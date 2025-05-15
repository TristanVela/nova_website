"use client"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function WaveFooter() {
  const t = useTranslations("footer")
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full pt-32 pb-6 overflow-hidden bg-gradient-to-b from-sky-400 to-blue-600">
      {/* Wave Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <svg
          className="absolute top-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g>
            <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255, 255, 255, 0.1)" />
            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255, 255, 255, 0.07)" />
            <use xlinkHref="#wave-path" x="50" y="6" fill="rgba(255, 255, 255, 0.05)" />
          </g>
        </svg>
      </div>

      <div className="container relative px-4 mx-auto md:px-6">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
                N
              </div>
              <span className="text-xl font-bold text-white">Nova</span>
            </div>
            <p className="text-sm text-white/80">{t("description")}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t("services.title")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  {t("services.webDesign")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  {t("services.webDevelopment")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  {t("services.ecommerce")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  {t("services.seoMarketing")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t("company.title")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  {t("company.about")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  {t("company.portfolio")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  {t("company.careers")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  {t("company.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t("connect.title")}</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="text-sm text-white/80">
              <p>hello@novawebdesign.com</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-10 mt-12 border-t border-white/20">
          <div className="flex flex-col items-center text-white">
            <span className="text-sm font-bold">Capterra</span>
            <span className="text-xs">4.9/5</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="text-sm font-bold">CROWD</span>
            <span className="text-xs">4.7/5</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="text-sm font-bold">APPSUMO</span>
            <span className="text-xs">4.9/5</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="text-sm font-bold">GDPR</span>
            <span className="text-xs">READY</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="text-sm font-bold">SEMRUSH</span>
            <span className="text-xs">TECHNICAL PARTNER</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="text-sm font-bold">shopify partners</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-8 border-t border-white/20 md:flex-row">
          <p className="text-sm text-white/80">{t("copyright", { year: currentYear })}</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              {t("legal.privacy")}
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              {t("legal.terms")}
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
              {t("legal.cookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
