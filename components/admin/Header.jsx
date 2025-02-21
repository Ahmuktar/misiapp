import { SidebarTrigger } from "../ui/sidebar";
import { UserButton } from "./UserButton";

export function AdminHeader() {
  return (
    <div className="border-b border-gray-300">
      <div className="flex h-16 w-full items-center px-3 lg:px-4 justify-between">
        <SidebarTrigger className="px-3" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton />
        </div>
      </div>
    </div>
  );
}
