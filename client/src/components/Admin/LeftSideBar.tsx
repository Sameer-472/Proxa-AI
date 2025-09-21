import { useState } from "react";
import {
  BrainCircuit,
  Currency,
  Home,
  LayoutDashboard,
  MessageSquareText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";


const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden m-4">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px]">
          <DashboardSidebar closeSheet={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
      <div className="hidden md:block h-screen w-[250px] border-r bg-background">
        <DashboardSidebar />
      </div>
    </div>
  );
};

export default LeftSideBar;

function DashboardSidebar({ closeSheet }: { closeSheet?: () => void }) {
  return (
    <div className="h-full px-4 py-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link to={"/"} className="flex items-center gap-2">
          <BrainCircuit />
          <span className="text-xl font-bold">Prodexa AI Admin</span>
        </Link>
      </div>
      <nav className="space-y-1">
        {/* Navigation Links */}
        {/* Home Link */}
        <Link to={"/ai-prod-app/v1/admin-route/dashboard"}>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={closeSheet}
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>

        <Link to={"/ai-prod-app/v1/admin-route/create-plan"}>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={closeSheet}
          >
            <Currency className="mr-2 h-4 w-4" />
            Create Plan
          </Button>
        </Link>
        <Link to={"/ai-prod-app/v1/admin-route/feedback-form"}>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={closeSheet}
          >
            <MessageSquareText className="mr-2 h-4 w-4" />
            Feedback Form
          </Button>
        </Link>
      </nav>
    </div>
  );
}
