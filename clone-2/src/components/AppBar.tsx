import { SearchBar } from "@/components/SearchBar";
export const AppBar= () => {
  return <div className="flex justify-between top-0 z-50 h-20 items-center px-4 text-white">
    <div  className="inline-flex items-center pb-2 pl-2">
    <img src="/youtube.png" width={100}  alt="" />
    </div>
    <div>
       <SearchBar/>
    </div>
    <div>
      Signin
    </div>
  </div>
}