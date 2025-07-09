import React from 'react'
import { Sidebar } from '@/components/caso2/Sidebar'

export default function LayoutCaso2({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Sidebar />
            <main className="flex-1 flex  p-6">
                {children}
            </main>

        </div>
    )
}