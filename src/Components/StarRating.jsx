import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar onClick={onSelect} className='inline text-5xl' color={selected ? 'red' : 'grey'} />
)

const createArray = (length) => [...Array(length)];

export default function StarRating({ 
  totalStars = 5,
  selectedStars = 0,
  onRate = f => f
}) {
  
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
         key={i}
         selected={selectedStars > i}
         onSelect={() => onRate(i + 1)}
         />
      ))}
      <p className='pt-12 text-4xl text-center text-slate-900 font-serif font-bold'>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )
}