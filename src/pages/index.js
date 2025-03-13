import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>European Certificate Sales Association</title>
        <meta name="description" content="Official website of the European Certificate Sales Association (ECSA)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-800">ECSA</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-800">Home</Link>
            <Link href="/about" className="hover:text-blue-800">About</Link>
            <Link href="/membership" className="hover:text-blue-800">Membership</Link>
            <Link href="/certification" className="hover:text-blue-800">Certification</Link>
            <Link href="/resources" className="hover:text-blue-800">Resources</Link>
            <Link href="/contact" className="hover:text-blue-800">Contact</Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="py-12 md:py-20 bg-blue-50 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">European Certificate Sales Association</h1>
            <p className="text-xl text-gray-700 mb-8">Setting the standard for certification excellence across Europe</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/membership" className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition-colors">
                Become a Member
              </Link>
              <Link href="/contact" className="bg-white text-blue-800 border border-blue-800 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Certification Programs</h3>
                <p className="text-gray-600 mb-4">Discover our range of industry-recognized certification programs designed to validate expertise and enhance professional credibility.</p>
                <Link href="/certification" className="text-blue-800 hover:text-blue-900">Learn more →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Membership Benefits</h3>
                <p className="text-gray-600 mb-4">Join our network of certification professionals across Europe and access exclusive resources, events, and collaboration opportunities.</p>
                <Link href="/membership" className="text-blue-800 hover:text-blue-900">Learn more →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Industry Resources</h3>
                <p className="text-gray-600 mb-4">Access our comprehensive library of certification resources, best practices, research papers, and regulatory updates.</p>
                <Link href="/resources" className="text-blue-800 hover:text-blue-900">Learn more →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">ECSA</h4>
              <p className="text-blue-100">European Certificate Sales Association</p>
              <p className="text-blue-100 mt-2">Setting the standard for certification excellence</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-blue-100 hover:text-white">Home</Link></li>
                <li><Link href="/about" className="text-blue-100 hover:text-white">About</Link></li>
                <li><Link href="/membership" className="text-blue-100 hover:text-white">Membership</Link></li>
                <li><Link href="/certification" className="text-blue-100 hover:text-white">Certification</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/resources" className="text-blue-100 hover:text-white">Resource Library</Link></li>
                <li><Link href="/news" className="text-blue-100 hover:text-white">News & Events</Link></li>
                <li><Link href="/faq" className="text-blue-100 hover:text-white">FAQ</Link></li>
                <li><Link href="/members" className="text-blue-100 hover:text-white">Member Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <address className="not-italic text-blue-100">
                <p>1050 Brussels, Belgium</p>
                <p className="mt-2">info@ecsa-certificates.eu</p>
                <p className="mt-2">+32 2 123 4567</p>
              </address>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-100">
            <p>© {new Date().getFullYear()} European Certificate Sales Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}