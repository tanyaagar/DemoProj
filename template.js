/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZXkKTYxMbzt
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col">
      <nav className="bg-gray-800 p-4 dark:bg-gray-950">
        <div className="flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">Brand Name</h1>
          <div className="space-x-4">
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Services
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
        <div className="relative group overflow-hidden rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Image 1"
            className="object-cover w-full h-60"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Image 1</h3>
            <Button className="mt-2" size="lg" variant="outline">
              View
            </Button>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Image 2"
            className="object-cover w-full h-60"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Image 2</h3>
            <Button className="mt-2" size="lg" variant="outline">
              View
            </Button>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Image 3"
            className="object-cover w-full h-60"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Image 3</h3>
            <Button className="mt-2" size="lg" variant="outline">
              View
            </Button>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Image 4"
            className="object-cover w-full h-60"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Image 4</h3>
            <Button className="mt-2" size="lg" variant="outline">
              View
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

