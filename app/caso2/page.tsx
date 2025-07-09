"use client"


import Link from "next/link";
import {ChevronLeft} from "lucide-react";

export default function HomePage() {
    return (
        <div className=" h-screen py-12">
            <div>
                <Link href="/" className="inline-flex items-center text-blue-600 hover:underline">
                    <ChevronLeft className="w-4 h-4 mr-1"/>
                    Volver al inicio
                </Link>

            </div>
            <div className=" mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Bienvenido
                </h1>
            </div>
        </div>
    )
}