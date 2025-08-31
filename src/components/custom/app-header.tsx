import { usePathname } from "next/navigation";
import { SidebarTrigger } from "../ui/sidebar";
import { ChatSelect } from "../widget/chat/chat-select";

export function AppHeader() {
  let showSelectProduct = false;

  const pathname = usePathname();
  const routeName = pathname.split("/").filter(Boolean).pop() || "Home";

  if (routeName === "chat") {
    showSelectProduct = true;
  }

  return (
    <div className="h-16 flex flex-row items-center gap-2 px-2">
      <SidebarTrigger />
      {showSelectProduct && <ChatSelect />}
    </div>
  );
}
