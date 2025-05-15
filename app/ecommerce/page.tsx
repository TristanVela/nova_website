import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowLeft, Heart, Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function EcommerceTemplate() {
  // Sample products
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 199.99,
      category: "Electronics",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Wireless Keyboard",
      price: 89.99,
      category: "Electronics",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 249.99,
      category: "Wearables",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 129.99,
      category: "Audio",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Laptop Backpack",
      price: 59.99,
      category: "Accessories",
      rating: 4.4,
    },
    {
      id: 6,
      name: "Wireless Mouse",
      price: 49.99,
      category: "Electronics",
      rating: 4.3,
    },
    {
      id: 7,
      name: "USB-C Hub",
      price: 39.99,
      category: "Accessories",
      rating: 4.2,
    },
    {
      id: 8,
      name: "Phone Stand",
      price: 19.99,
      category: "Accessories",
      rating: 4.1,
    },
  ]

  // Categories
  const categories = ["All Products", "Electronics", "Wearables", "Audio", "Accessories"]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-mint-600 flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
              Shop
            </span>
          </div>
          <div className="hidden md:flex relative w-full max-w-sm mx-8">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-8 pr-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
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
        {/* Hero Banner */}
        <section className="w-full py-12 bg-gradient-to-r from-mint-50 to-sky-50 dark:from-gray-800 dark:to-gray-700">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-mint-100 px-3 py-1 text-sm text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 w-fit">
                    New Arrivals
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                    Summer Collection 2025
                  </h1>
                  <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                    Discover our latest products with special launch discounts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="gap-1 bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700"
                  >
                    Request a Demo
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
              <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-sky-600/40 z-10 rounded-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Summer Collection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="w-full py-8 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={
                    index === 0
                      ? "bg-gradient-to-r from-teal-500 to-sky-600"
                      : "border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  Featured Products
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl">
                  Browse our selection of high-quality products.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition-all border-mint-100 dark:border-gray-700"
                >
                  <div className="relative h-48 w-full overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-sky-600/0 group-hover:from-teal-400/20 group-hover:to-sky-600/40 z-10 transition-all duration-300"></div>
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Product+${product.id}`}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 z-20">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800"
                      >
                        <Heart className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-1">
                      {product.category}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">${product.price}</span>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{product.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-mint-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">
                  Let's Discuss Your E-commerce Project
                </h2>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                  We can help you build a custom online store tailored to your business needs.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center mt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700"
                >
                  Schedule a Consultation
                </Button>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Let's create an e-commerce experience that drives sales and delights your customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-gradient-to-b from-mint-50 to-white dark:from-gray-800 dark:to-gray-900 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-mint-600 flex items-center justify-center text-white font-bold">
                  S
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
                  Shop
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your one-stop shop for quality products at affordable prices.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-300">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-300">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-300">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Shop. All rights reserved.
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
