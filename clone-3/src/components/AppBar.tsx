import { SearchBar } from "@/components/SearchBar";
export const AppBar= ()=>{
  return <div className="flex justify-between items-center">
    <div className="inline-flex items-center pb-2 pl-2">
    <img src="/youtube.png" width={100}  alt="" />
    </div>
    <div>
       <SearchBar/>
    </div>
    <div className="pr-2">
      Signin
    </div>
  </div>
}