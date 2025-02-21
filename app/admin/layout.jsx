"use client";

import { AdminAuthProvider, useAdminAuth } from "@/context/AdminAuthContext";

export default function AdminLayout({ children }) {
  return (
    <AdminAuthProvider>
      <AuthChecker>{children}</AuthChecker>
    </AdminAuthProvider>
  );
}

function AuthChecker({ children }) {
  const { isAuthenticated } = useAdminAuth();

  return <div>{children}</div>;
}
