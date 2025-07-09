"use client"

import Link from "next/link"
import {LayoutDashboard, FileText} from "lucide-react"

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">

                <div
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-center mb-4">
                        <FileText size={48} className="text-blue-600 dark:text-blue-400"/>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Caso 1</h2>

                    <Link
                        href="/caso1"
                        className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition"
                    >
                        Ir al Caso 1
                    </Link>
                </div>

                <div
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-center mb-4">
                        <LayoutDashboard size={48} className="text-green-600 dark:text-green-400"/>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Caso 2</h2>

                    <Link
                        href="/caso2"
                        className="inline-block px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm transition"
                    >
                        Ir al Caso 2
                    </Link>
                </div>
            </div>
        </div>
    )
}
