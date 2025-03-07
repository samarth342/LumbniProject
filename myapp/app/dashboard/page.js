import Body from "@/components/dashboard/body";
import Navbar from "@/components/dashboard/NavBar";
import Sidebar from "@/components/dashboard/Sidebar";

export default function Dashboard(){
    return (
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <Body />
          </div>
        </div>
      );
}