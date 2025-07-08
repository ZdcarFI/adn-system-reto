import { MenuItem } from "@/types/caso2";
import {
    Home,
    BarChart3,
    TrendingUp,
    Package,
    ClipboardList,
    Archive,
    Link,
    CheckSquare,
    FolderOpen
} from "lucide-react";

export const menuItems: MenuItem[] = [
    {
        id: "home",
        label: "Home",
        icon: Home,
        href: "/",
    },
    {
        id: "dashboard",
        label: "Dashboard",
        icon: BarChart3,
        href: "/dashboard",
    },
    {
        id: "analytics",
        label: "Analytics",
        icon: TrendingUp,
        href: "/analytics",
    },
    {
        id: "products",
        label: "Products",
        icon: Package,
        children: [
            {
                id: "orders",
                label: "Orders",
                icon: ClipboardList,
                href: "/caso2",
            },
            {
                id: "inventory",
                label: "Inventory",
                icon: Archive,
                href: "/products/inventory",
            },
            {
                id: "integrations",
                label: "Integrations",
                icon: Link,
                href: "/products/integrations",
            },
        ],
    },
    {
        id: "task",
        label: "Task",
        icon: CheckSquare,
        href: "/task",
    },
    {
        id: "files",
        label: "Files",
        icon: FolderOpen,
        href: "/files",
    },
];