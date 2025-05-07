import Sidebar from "@/components/SideBar";

export default function ChatLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="currentComponent">{children}</main>
    </div>
  );
}
