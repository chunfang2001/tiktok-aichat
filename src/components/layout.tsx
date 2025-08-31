import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "./custom/app-header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
     <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <AppHeader/>
        {children}
      </main>
    </SidebarProvider>
    // <div>
    //   <div>helloAdssddsds</div>
    //   <main>{children}</main>
    // </div>
  );
}
