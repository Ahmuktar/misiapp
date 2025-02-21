"use client";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Calendar,
  Settings,
  Package,
  MessageSquare,
  FileText,
  CreditCard,
  PenTool,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    label: "Products",
    icon: ShoppingBag,
    href: "/admin/products",
  },
  {
    label: "Orders",
    icon: Package,
    href: "/admin/orders",
  },
  {
    label: "Customers",
    icon: Users,
    href: "/admin/customers",
  },
  {
    label: "Events",
    icon: Calendar,
    href: "/admin/events",
  },
  {
    label: "Customizations",
    icon: PenTool,
    href: "/admin/customizations",
  },
  {
    label: "Payments",
    icon: CreditCard,
    href: "/admin/payments",
  },
  {
    label: "Blog Posts",
    icon: FileText,
    href: "/admin/blog-posts",
  },
  {
    label: "Testimonials",
    icon: MessageSquare,
    href: "/admin/testimonials",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent className="bg-gray-900">
        <Link
          href="#"
          className="flex p-4 items-center mb-6 text-2xl font-semibold text-white"
        >
          <Image
            className="w-14 h-14 mr-2"
            src="/assets/images/logo/logo.png"
            alt="logo"
            height={100}
            width={100}
          />
          <h5 className="text-white">Misi Admin</h5>
        </Link>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    className={`hover:bg-slate-50/10 h-11 hover:text-white ${
                      pathname === item.href ? "bg-slate-50/10 text-white" : ""
                    }`}
                  >
                    <Link href={item.href} className="text-white">
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
