import {LucideIcon} from "lucide-react";

export type MenuItem = {
    id: string;
    label: string;
    icon: LucideIcon;
    href?: string;
    children?: MenuItem[];
}

export type MenuItemProps = {
    item: MenuItem
    isCollapsed: boolean
    level?: number
    isMobile?: boolean
    onNavigate?: () => void
}
