import { Outlet } from "react-router";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function Layout() {
    return (
        <SidebarProvider defaultOpen={false}>
            <AppSidebar variant="floating" />
            <SidebarInset className="min-h-screen">
                <SidebarTrigger className="fixed left-3 top-3 md:hidden z-5" />

                <div className="px-6 sm:px-12 py-20 grow">
                    <Outlet />
                </div>

                {/* It would be greatly appreciated if you could leave the footer as it is! */}
                <footer className="text-sm w-full text-center border-t py-2 sm:py-4">
                    Created by
                    <Button variant="link" className="px-1">
                        <a
                            href="https://github.com/pm25/simpleplain"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SimplePlain Template
                        </a>
                    </Button>
                </footer>
            </SidebarInset>
        </SidebarProvider>
    );
}
