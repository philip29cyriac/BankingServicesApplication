import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-900 text-white">
      {/* Left Section: Background Image */}
      <div className="hidden sm:flex flex-1 bg-blue-800">
        <Image
          src="/Images/BG.jpg"
          alt="EazyBank Background"
          width={800}
          height={800}
          className="rounded-lg"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="flex-1 flex flex-col justify-start items-start sm:items-start p-8 sm:p-16 gap-10">
        {/* Navigation Bar */}
        <header className="flex items-start justify-between w-full max-w-6xl mb-6">
          <h1 className="text-3xl font-bold tracking-wide text-white sm:text-4xl">
            Eazy<span className="text-blue-500">Bank</span>
          </h1>
          <nav className="flex gap-4">
            <a
              href="#features"
              className="hover:underline underline-offset-4 text-sm sm:text-base p-2"
            >
              Features
            </a>
            <a
              href="#about"
              className="hover:underline underline-offset-4 text-sm sm:text-base p-2"
            >
              About
            </a>
            <a
              href="#register"
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base py-2 px-4 rounded-full"
            >
              Register
            </a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="w-full max-w-2xl text-center sm:text-left">
          {/* Catchy Titles */}
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
            Banking Made <span className="text-blue-500">Easy</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6">
            Manage your accounts, track expenses, and achieve your financial
            goals with the most user-friendly banking experience.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#register"
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base py-3 px-6 rounded-full"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="bg-gray-700 hover:bg-gray-600 text-white text-sm sm:text-base py-3 px-6 rounded-full"
            >
              Explore Features
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 w-full max-w-2xl text-center sm:text-left">
          <p className="text-sm text-gray-400 mb-4">
            © {new Date().getFullYear()} EazyBank. All rights reserved.
          </p>
          <div className="flex justify-center sm:justify-start gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
