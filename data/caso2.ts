import { MenuItem } from "@/types/caso2";
import {
    Home,
    BarChart3,
    Package,
    ClipboardList,
    Archive,
  Users
} from "lucide-react";

export const menuItems: MenuItem[] = [
    {
        id: "home",
        label: "Inicio",
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
        id: "products",
        label: "Productos",
        icon: Package,
        children: [
            {
                id: "categories",
                label: "Categorias",
                icon: ClipboardList,
                href: "/caso2",
            },
            {
                id: "inventory",
                label: "Inventario",
                icon: Archive,
                href: "/products/inventory",
            },

        ],
    },

    {
        id: "users",
        label: "Usuarios",
        icon: Users,
        href: "/user",
    },
];