"use client"

import {useState, useRef, useEffect} from "react"
import type {MenuItemProps} from "@/types/caso2"
import {usePathname} from "next/navigation"
import Link from "next/link"
import {ChevronDown} from "lucide-react"

export function MenuItem({item, isCollapsed, level = 0, isMobile = false, onNavigate}: MenuItemProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)
    const [tooltipPosition, setTooltipPosition] = useState({top: 0, left: 0})
    const [mounted, setMounted] = useState(false)
    const itemRef = useRef<HTMLDivElement>(null)

    const pathname = usePathname()
    const isActiveRoute = item.href && pathname === item.href
    const isParentOfActiveRoute = item.children?.some(child => child.href && pathname.startsWith(child.href))
    const hasChildren = item.children && item.children.length > 0
    const isSubItem = level > 0

    let hideTimeout: NodeJS.Timeout;

    const handleMouseEnter = () => {
        clearTimeout(hideTimeout);
        if (isCollapsed && !isMobile) {
            setShowTooltip(true);
            if (itemRef.current) {
                const rect = itemRef.current.getBoundingClientRect()
                setTooltipPosition({top: rect.top, left: rect.right + 8})
            }
        }
    };

    const handleMouseLeave = () => {
        hideTimeout = setTimeout(() => setShowTooltip(false), 100);
    };

    useEffect(() => {
        setMounted(true)
        if (isParentOfActiveRoute && !isCollapsed) setIsExpanded(true)
    }, [isParentOfActiveRoute, isCollapsed])

    const handleClick = () => {
        if (hasChildren && !isCollapsed) setIsExpanded(!isExpanded)
    }

    const IconComponent = item.icon

    const baseClasses = `
        relative flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg
        transition-all duration-200 ease-in-out group cursor-pointer
        text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50
        ${isActiveRoute ? "bg-yellow-400 text-black font-semibold shadow-sm" :
        isParentOfActiveRoute ? "bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white" : ""}
        ${isSubItem ? "ml-6 text-xs py-2" : ""}
    `

    if (!mounted) return null

    const ItemContent = () => (
        <>
            <IconComponent size={18} className={`flex-shrink-0 ${isCollapsed ? "mx-auto" : "mr-3"}`} />
            {!isCollapsed && (
                <>
                    <span className="flex-1 text-left truncate">{item.label}</span>
                    {hasChildren && (
                        <ChevronDown size={16} className={`transition-transform duration-200 flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`} />
                    )}
                </>
            )}
        </>
    )

    return (
        <>
            <div className="relative">
                <div ref={itemRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {item.href ? (
                        <Link href={item.href} className={baseClasses} onClick={onNavigate}>
                            <ItemContent />
                        </Link>
                    ) : (
                        <div className={baseClasses} onClick={handleClick}>
                            <ItemContent />
                        </div>
                    )}
                </div>

                {(!isCollapsed && hasChildren && isExpanded) && (
                    <div className="mt-1 space-y-1 w-full max-w-[90%]">
                        {item.children?.map((child) => (
                            <MenuItem
                                key={child.id}
                                item={child}
                                isCollapsed={false}
                                level={level + 1}
                                isMobile={isMobile}
                                onNavigate={onNavigate}
                            />
                        ))}
                    </div>
                )}
            </div>

            {isCollapsed && showTooltip && !isMobile && (
                <div
                    className="fixed z-50 pointer-events-auto ml-3"
                    style={{top: `${tooltipPosition.top}px`, left: `${tooltipPosition.left}px`}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="px-3 py-2 text-sm font-medium rounded-lg shadow-lg border min-w-[12rem] bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600">
                        <div className="font-medium">{item.label}</div>
                        {hasChildren && (
                            <div className="mt-2 space-y-1 border-t border-gray-200 dark:border-gray-600 pt-2">
                                {item.children?.map((child) => {
                                    const ChildIcon = child.icon;
                                    const isChildActive = child.href && pathname === child.href;
                                    return (
                                        <Link
                                            key={child.id}
                                            href={child.href || "#"}
                                            className={`flex items-center text-xs w-full text-left px-2 py-1 rounded transition-colors duration-150 ${
                                                isChildActive
                                                    ? "bg-yellow-400 text-black font-semibold"
                                                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                            }`}
                                        >
                                            <ChildIcon size={14} className="mr-2"/>
                                            {child.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}