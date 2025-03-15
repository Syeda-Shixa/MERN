import { VideoCard } from "@/components/VideoCard";

const VIDEOS = [{
    title: "How to learn coding in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "logo.jpg",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
},{
    title: "How to learn coding in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "logo.jpg",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
}]

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
    {VIDEOS.map(video => <div>
        <VideoCard
        title={video.title}
        image={video.image}
        thumbImage={video.thumbImage}
        author={video.author}
        views={video.views}
        timestamp={video.timestamp}
        />
    </div>)}
    </div>
  )
}


