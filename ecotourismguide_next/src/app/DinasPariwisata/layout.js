import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex space-x-6">
            <Sidebar />
            {children}
        </div>
    );
  }
  