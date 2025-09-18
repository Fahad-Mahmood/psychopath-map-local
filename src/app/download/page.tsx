import Image from 'next/image'
import logo from '../../../public/icon.png'
import { Rokkitt, Special_Elite } from 'next/font/google'

const rokkitt = Rokkitt({ subsets: ['latin'] })
const specialElite = Special_Elite({ weight: '400', subsets: ['latin'] })

export default function DownloadPage() {
  return (
    <div className={`min-h-screen text-gray-300 ${rokkitt.className}`} style={{backgroundColor: '#111'}}>
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-2 flex justify-between items-center">
          <Image src={logo} alt="PsychoPath Logo" className="h-24 w-auto" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl font-extrabold text-white tracking-tight ${specialElite.className}`}>Ready to Install on Android? Just 3 Quick Steps!</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Instructions */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 border-red-600 text-red-600 font-bold text-lg">1</div>
              <div className="ml-6">
                <h4 className={`text-xl font-bold text-white ${specialElite.className}`}>Download</h4>
                <p className="mt-2 text-gray-400 leading-relaxed">
                  Tap the "Download the App" button <span className="md:inline hidden">on the right</span><span className="md:hidden">below</span>.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 border-red-600 text-red-600 font-bold text-lg">2</div>
              <div className="ml-6">
                <h4 className={`text-xl font-bold text-white ${specialElite.className}`}>Allow</h4>
                <p className="mt-2 text-gray-400 leading-relaxed">
                  After downloading, open the file and tap "Settings" on the security pop-up.
                </p>
                <p className="mt-2 text-gray-400 leading-relaxed">
                  Turn ON the switch for "Allow from this source".
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 border-red-600 text-red-600 font-bold text-lg">3</div>
              <div className="ml-6">
                <h4 className={`text-xl font-bold text-white ${specialElite.className}`}>Install</h4>
                <p className="mt-2 text-gray-400 leading-relaxed">
                  Go back one screen and tap "Install". You're all set!
                </p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center md:justify-start">
            <div className="p-6 rounded-lg border border-gray-700 text-center" style={{backgroundColor: '#111'}}>
              <a
                href="https://psychopath-app-downloads.s3.eu-west-2.amazonaws.com/psychopath_android.apk"
                download
                className="inline-block bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-red-700 transition-colors duration-300"
              >
                Download the App (.apk)
              </a>
              <div className="mt-4 text-sm text-gray-400">
                <p>File size: 118 MB</p>
                <p>Version: 1.0.2</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-gray-500">
          <p>&copy; 2025 PsychoPath. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}