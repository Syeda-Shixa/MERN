export function VideoCard(props: any) {
  return (
    <div className="p-3 cursor-pointer" >
      <img src={props.image} className="rounded-xl" alt="" />
      <div className="grid grid-cols-12 pt-2">
        {/* //first child */}
        <div className="col-span-1">
          <img className="rounded-full w-10 h-6 " src={props.thumbImage} alt="" />
        </div>
        {/* second child */}
        <div className="col-span-11 pl-2  ">
          <div>
           {props.title}
            
          </div>
          <div className="col-span-11 text-gray-400 text-base">
           {props.author}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
          {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
