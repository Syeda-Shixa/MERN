import React from "react";
import { Home, TrendingUp,  Library, History, Clock, ThumbsUp, Play, Download, Video } from 'lucide-react';

export const NavItem = () => {
  return (
    <div className="w-64 bg-black-400 text-white h-screen p-4 sticky top-0">
      <ul className="space-y-4">
        <li className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">
          <Home className="mr-3" size={20} /> Home
        </li>
        <li className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">
          <TrendingUp className="mr-3" size={20} /> Shorts
        </li>
       
        <hr className="border-gray-600 my-4" />
        <h3 className="text-gray-400 text-sm uppercase">You</h3>
        <li className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">
          <Library className="mr-3" size={20} /> History
        </li>
        <li className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">
          <Play className="mr-3" size={20} /> Playlists
        </li>
        <li className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">
          <Video className="mr-3" size={20} /> Your videos
        </li>
        <li className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">
          <Clock className="mr-3" size={20} /> Watch Later
        </li>
        <li className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">
          <ThumbsUp className="mr-3" size={20} /> Liked Videos
        </li>
        <li className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">
          <Download className="mr-3" size={20} /> Downloads
        </li>
        <hr className="border-gray-600 my-4" />
        <h3 className="text-gray-400 text-sm uppercase">Subscriptions</h3>
        <li className="cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">SAMAA TV</li>
        <li className="cursor-pointer hover:bg-gray-700 p-2 rounded transition-all duration-200">Cats life adventures</li>
      </ul>
    </div>
  );
};
