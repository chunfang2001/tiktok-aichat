import { usePathname } from "next/navigation";
import { SidebarTrigger } from "../ui/sidebar";
import { HeaderTitle } from "../widget/header/header-title";

export function AppHeader() {
  let title = "";

  const pathname = usePathname();
  const routeName = pathname.split("/").filter(Boolean).pop() || "Home";

  if (routeName === "chat") {
    title = "Test Chat";
  }

  if (routeName === "knowledge-base") {
    title = "Knowledge Base";
  }

  return (
    <div className="h-16 flex flex-row items-center gap-2 px-2">
      <SidebarTrigger />
      {title != "" && <HeaderTitle title={title} />}
      
    </div>
  );
}
