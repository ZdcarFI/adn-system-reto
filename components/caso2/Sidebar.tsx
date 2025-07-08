"use client"

import {useState, useEffect} from "react"
import {useTheme} from "next-themes"
import {MenuItem} from "./MenuItem"
import {useMediaQuery} from "@/hooks/useMediaQuery"
import {menuItems} from "@/data/caso2"
import {Menu, X, Moon, Sun, Search, ChevronLeft} from "lucide-react"

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()
    const isMobile = useMediaQuery("(max-width: 768px)")

    useEffect(() => {
        setMounted(true)
        if (!isMobile) setIsMobileMenuOpen(false)
    }, [isMobile])

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset"
        return () => { document.body.style.overflow = "unset" }
    }, [isMobileMenuOpen])

    const toggleCollapse = () => !isMobile && setIsCollapsed(!isCollapsed)
    const toggleDarkMode = () => setTheme(theme === 'dark' ? 'light' : 'dark')
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
    const closeMobileMenu = () => setIsMobileMenuOpen(false)

    const sidebarClasses = `
        ${isMobile ? "fixed top-0 left-0" : "relative"}
        ${isMobile ? (isMobileMenuOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
        ${isMobile ? "w-64" : isCollapsed ? "w-16" : "w-64"}
        bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700
        transition-all duration-300 ease-in-out h-screen flex flex-col shadow-lg z-40
    `

    const Logo = ({showText = true}) => (
        <div className="flex items-center">
            <div className="w-8 h-8 bg-white dark:bg-black rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-900 dark:text-white font-bold text-sm">G</span>
            </div>
            {showText && <span className="font-bold text-lg text-gray-900 dark:text-white">Ghostly</span>}
        </div>
    )

    if (!mounted) return null

    return (
        <>
            {isMobile && isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={closeMobileMenu}/>
            )}

            {isMobile && (
                <div className="fixed top-0 left-0 right-0 z-20 px-4 py-3 flex items-center justify-between bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                    <button onClick={toggleMobileMenu} className="p-2 rounded-lg text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Menu size={20}/>
                    </button>
                    <Logo />
                    <button onClick={toggleDarkMode} className="p-2 rounded-lg text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        {theme === 'dark' ? <Moon size={18}/> : <Sun size={18}/>}
                    </button>
                </div>
            )}

            <div className="flex">
                <div className={sidebarClasses}>
                    {!isMobile && (
                        <div className="flex items-center px-4 py-4 border-b border-gray-400 dark:border-gray-700">
                            <Logo showText={!isCollapsed} />
                        </div>
                    )}

                    {isMobile && (
                        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
                            <Logo />
                            <button onClick={closeMobileMenu} className="p-1 rounded text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                <X size={20}/>
                            </button>
                        </div>
                    )}

                    {(!isCollapsed || isMobile) && (
                        <div className="px-4 py-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-3 py-2 pl-10 text-sm rounded-lg border bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-400 dark:focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search size={16} className="text-gray-400"/>
                                </div>
                            </div>
                        </div>
                    )}

                    <nav className={`flex-1 px-4 py-2 space-y-1 ${isCollapsed && "flex flex-col items-center"}`}>
                        {menuItems.map((item) => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                isCollapsed={isCollapsed && !isMobile}
                                isMobile={isMobile}
                                onNavigate={closeMobileMenu}
                            />
                        ))}
                    </nav>

                    {!isMobile && (
                        <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
                            <button
                                onClick={toggleDarkMode}
                                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50 ${isCollapsed ? "justify-center" : ""}`}>
                                <div className={`flex items-center justify-center ${isCollapsed ? "w-10 h-10" : ""}`}>
                                    {theme === 'dark' ? (
                                        <Moon size={16} className={!isCollapsed ? "mr-3" : ""}/>
                                    ) : (
                                        <Sun size={16} className={!isCollapsed ? "mr-3" : ""}/>
                                    )}
                                </div>
                                {!isCollapsed && (
                                    <span className="whitespace-nowrap">
                                        {theme === 'dark' ? "Modo Oscuro" : "Modo Claro"}
                                    </span>
                                )}
                            </button>
                        </div>
                    )}
                </div>

                {!isMobile && (
                    <button
                        onClick={toggleCollapse}
                        className={`absolute top-4 ${isCollapsed ? "left-20" : "left-68"} z-10 w-8 h-8 rounded-full shadow-lg border-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center`}>
                        <ChevronLeft size={16} className={`transition-transform duration-200 ${isCollapsed ? "rotate-180" : ""}`} />
                    </button>
                )}
            </div>
        </>
    )
}