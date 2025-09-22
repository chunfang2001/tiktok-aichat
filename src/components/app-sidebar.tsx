import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, MessageCircle, FileCog, Settings, CalendarClock } from "lucide-react";


export function AppSidebar() {
  const items = [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Test Chat",
      url: "chat",
      icon: MessageCircle,
    },
    {
      title: "Knowledge Base",
      url: "knowledge-base",
      icon: Settings,
    },
    {
      title: "Sessions",
      url: "session",
      icon: CalendarClock,
    },
    {
      title: "Settings",
      url: "#",
      icon: FileCog,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex-row flex items-center gap-1 pt-2">
          <img
            src="/images/tiktok-logo.png"
            alt="Tiktok AI connector"
            className="h-9 w-9 rounded"
          />
          <div className="flex flex-col">
            <div className="text-xl font-bold">TikTok Live</div>
            <div className="text-xs font-bold">AI Chatbot</div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
