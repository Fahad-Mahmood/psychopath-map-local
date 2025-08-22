import Image from 'next/image'
import logo from '../../../public/icon.png'
import { Rokkitt, Special_Elite } from 'next/font/google'

const rokkitt = Rokkitt({ subsets: ['latin'] })
const specialElite = Special_Elite({ weight: '400', subsets: ['latin'] })

export default function RemoveAccountPage() {
    return (
        <div className={`min-h-screen text-gray-300 ${rokkitt.className}`} style={{backgroundColor: '#111'}}>
            {/* Header */}
            <header className="border-b border-gray-800">
                <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Image src={logo} alt="PsychoPath Logo" className="h-32 w-auto" />
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
                {/* Page Title */}
                <div className="mb-12">
                    <h2 className={`text-4xl md:text-5xl font-extrabold text-white tracking-tight ${specialElite.className}`}>How to Delete Your Account</h2>
                    <p className="mt-4 text-lg text-gray-400">We're sorry to see you go. This guide will walk you through the account deletion process.</p>
                </div>

                {/* Important Information */}
                <section className="mb-12">
                    <h3 className={`text-2xl md:text-3xl font-bold text-red-600 mb-6 border-l-4 border-red-600 pl-4 ${specialElite.className}`}>Important Information</h3>
                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        <p>Deleting your account is a <strong className="text-white">permanent and irreversible</strong> action. Once your account is deleted, all associated data will be permanently removed.</p>
                        <p className="p-4 rounded-lg border border-gray-700" style={{backgroundColor: '#111'}}><strong className="text-white">Please Note:</strong> Account deletion can only be initiated from within the PsychoPath mobile application.</p>
                        <p>Before proceeding, please consider the following:</p>
                        <ul className="list-disc list-inside space-y-3 pl-4 p-6 rounded-lg border border-gray-700" style={{backgroundColor: '#111'}}>
                            <li><strong className="text-white">Data Loss:</strong> You will not be able to recover your profile, history, or any saved preferences once the account is deleted.</li>
                            <li><strong className="text-white">Active Subscriptions:</strong> Deleting your account does not automatically cancel active subscriptions. Please manage your subscriptions through the App Store or Google Play Store.</li>
                        </ul>
                    </div>
                </section>

                {/* Deletion Steps */}
                <section className="mb-12">
                    <h3 className={`text-2xl md:text-3xl font-bold text-red-600 mb-6 border-l-4 border-red-600 pl-4 ${specialElite.className}`}>In-App Deletion Steps</h3>
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 border-red-600 text-red-600 font-bold text-lg">1</div>
                            <div className="ml-6">
                                <h4 className={`text-xl font-bold text-white ${specialElite.className}`}>Navigate to Your Profile</h4>
                                <p className="mt-2 text-gray-400 leading-relaxed">Open the PsychoPath app and tap on the "Profile" icon located in the bottom navigation bar.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 border-red-600 text-red-600 font-bold text-lg">2</div>
                            <div className="ml-6">
                                <h4 className={`text-xl font-bold text-white ${specialElite.className}`}>Find the "Remove Account" Button</h4>
                                <p className="mt-2 text-gray-400 leading-relaxed">On your profile screen, scroll down to the bottom. You will find a prominent red button labeled "Remove Account".</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 border-red-600 text-red-600 font-bold text-lg">3</div>
                            <div className="ml-6">
                                <h4 className={`text-xl font-bold text-white ${specialElite.className}`}>Confirm Deletion</h4>
                                <p className="mt-2 text-gray-400 leading-relaxed">Tap the "Remove Account" button. A confirmation screen will appear. You will have the option to provide a reason for leaving, though this is not required. Follow the final prompts to permanently delete your account.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h3 className={`text-2xl md:text-3xl font-bold text-red-600 mb-6 border-l-4 border-red-600 pl-4 ${specialElite.className}`}>Need Help?</h3>
                    <p className="leading-relaxed mb-6">If you encounter any issues or have second thoughts before confirming, please do not hesitate to reach out to our support team. We're here to help.</p>
                    <a href="https://www.psycho-path.co.uk/contact/" className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300">
                        Contact Support
                    </a>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800 mt-16">
                <div className="max-w-5xl mx-auto px-6 py-8 text-center text-gray-500">
                    <p>&copy; 2025 PsychoPath. All rights reserved.</p>
                    <div className="mt-4 space-x-6">
                        <a href="https://www.psycho-path.co.uk/privacy-policy/" className="hover:text-red-600">Privacy Policy</a>
                        <a href="#" className="hover:text-red-600">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}