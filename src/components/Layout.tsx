import ParticlesBackground from "@/components/ParticlesBackground";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <ParticlesBackground />
      {/* Outlet renders the matched child route (Index or NotFound) */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </>
  );
}