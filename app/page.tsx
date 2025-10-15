"use client";
import Featured from "./components/Featured";
import OtherGames from "./components/OtherGames";
import SideNavigation from "./components/SideNavigation";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-w-screen flex-col">
      <Featured />
      <OtherGames />
    </div>
  );
}
