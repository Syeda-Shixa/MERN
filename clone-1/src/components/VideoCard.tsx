export const VideoCard = (props: any) => {
  return <div className="pl-3">
     <img src={props.image} className="rounded-xl" alt=""/>
     <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img src={props.thumbImage} className="rounded-full" alt="this"  />
        </div>
        <div className="col-span-11 pl-2">
          <div>
            {props.title}
          </div>
          <div className="text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
     </div>
  </div>;
};
