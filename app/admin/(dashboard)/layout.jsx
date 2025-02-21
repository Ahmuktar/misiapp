import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/Sidebar";
import { AdminHeader } from "@/components/admin/Header";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100">
        <AdminHeader />
        <div className="lg:px-2 w-full">{children}</div>
      </main>
    </SidebarProvider>
  );
}
