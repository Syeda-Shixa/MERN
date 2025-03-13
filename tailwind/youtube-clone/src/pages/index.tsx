import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { VideoCard } from "../components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
import { NavItem } from "@/components/NavItem";

export default function Home() {
  return (
    <div>
    <AppBar />
    <div className="flex">
      <NavItem />
      <div className="flex-1 p-4">
        <VideoGrid />
      </div>
    </div>
  </div>
  );
}
