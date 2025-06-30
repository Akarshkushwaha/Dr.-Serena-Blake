import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Dr. Serena Blake, PsyD</h3>
            <p className="text-blue-200">
              Licensed Clinical Psychologist dedicated to helping you find your path to healing and growth.
            </p>
            <div className="text-sm text-blue-300">
              1287 Maplewood Drive, Los Angeles, CA 90026
              <br />
              (323) 555-0192 | serena@blakepsychology.com
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-blue-200 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#services" className="block text-blue-200 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#faq" className="block text-blue-200 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="#contact" className="block text-blue-200 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Office Hours</h4>
            <div className="space-y-1 text-blue-200">
              <div className="font-semibold">In-Person Sessions:</div>
              <div>Tuesday & Thursday: 10 AM - 6 PM</div>
              <div className="font-semibold mt-2">Virtual Sessions (Zoom):</div>
              <div>Monday, Wednesday & Friday: 1 PM - 5 PM</div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
          <p>
            &copy; {new Date().getFullYear()} Dr. Serena Blake, PsyD. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  )
}
