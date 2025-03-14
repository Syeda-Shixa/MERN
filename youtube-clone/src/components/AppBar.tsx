import { SearchBar } from "./SearchBar";

export const AppBar = () => {
  return (
    <div className="flex justify-between bg-[#0F0F0F] sticky top-0 z-50 h-20 items-center px-4 text-white">
      <div className=" inline-flex items-center pb-2 pl-2">
        <img src="/youtube.png" width={100} />
        {/* Yotube */}
      </div>
      <div>
        <SearchBar />
      </div>
      <div className=" inline-flex items-center pb-2 pr-3">Sign in</div>
    </div>
  );
};
