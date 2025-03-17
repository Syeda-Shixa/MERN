import { VideoCard } from "@/components/VideoCard";
import { AppBar } from "@/components/AppBar";
import {NavItem} from "@/components/NavItem"
import { VideoGrid } from "@/components/VideoGrid";
 
export default function Home() {
  return <div>
      <AppBar/>
      <div className="disply:flex">
           <NavItem/>
           <div>
            <VideoGrid/>
           </div>
      </div>

    
  </div>;
}
