import React from "react";
import{ Home, TrendingUp } from 'lucide-react'

export const NavItem = ()=>{
    return <div className="w-64 bg-block-400 p-4">
        <ul className="space-y-4">
        <li className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">
          <Home className="mr-3" size={20} /> Home
        </li>
        <li  className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">
          <TrendingUp  className="mr-3" size={20}  /> Shorts
        </li>
        </ul>
    </div>
}