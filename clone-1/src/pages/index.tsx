import {AppBar  } from "@/components/AppBar";
import { NavItem } from "@/components/NavItems";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";


export default function Home() {
  return (
    <div> 
      <AppBar></AppBar>
     <div className="flex">
     <NavItem/>
     <div className="flex-1 p-4">
     <VideoGrid />
     </div>
     </div>
    </div>
  );
}
