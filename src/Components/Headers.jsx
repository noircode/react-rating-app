import React from 'react';
import StarRating from './StarRating';
import ColorList from './ColorList';

export default function Headers() {
  return(
    <div className="p-80 max-w-sm mx-auto h-screen  flex items-center space-x-4 align justify-center ">
      <div>
        <ColorList />
      </div>
    </div>
  )
}