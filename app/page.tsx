import Header from "./components/Header";
import SideNavigation from "./components/SideNavigation";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-w-screen flex-row">
      <SideNavigation />
      <Header />
    </div>
  );
}
