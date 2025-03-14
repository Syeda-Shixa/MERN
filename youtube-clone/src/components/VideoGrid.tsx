import { VideoCard } from "./VideoCard"; 
const VIDEOS = [
  {
    title: "How to learn coding in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "logo.jpg",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },
  {
    title: "Meem Se Mohabbat - Episode 25 [CC] 12th Mar 2025 ",
    image: "photo1.jpg",
    thumbImage: "download.png",
    author: "Hum Tv",
    views: "879k",
    timestamp: "2 days ago",
  },  {
    title: "How to Build a Realistic Clothing Store for E-commerce + Email Marketing 🔥",
    image: "photo2.jpg",
    thumbImage: "download.png",
    author: "CodeWithHarry",
    views: "879k",
    timestamp: "2 days ago",
  },  {
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  }, {
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  }, {
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  }, {
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  }, {
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },{
    title: "How to learn playing in 30 days | 30 day plan | Apna college",
    image: "photo.jpg",
    thumbImage: "download.png",
    author: "Sharadha khapra",
    views: "879k",
    timestamp: "2 days ago",
  },
];

export const VideoGrid = () =>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  
        {VIDEOS.map(video => <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.author}
            timestamp={video.timestamp}
          />
        </div>)}
         
    </div>
}