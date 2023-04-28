import React from 'react';

interface ButtonProps {
  icon?: JSX.Element
  label: string;
}

export default function Button({
  icon,
  label
}: ButtonProps) {
  return (
    <button
      className='flex items-center bg-white rounded-xl py-2 pl-2 pr-3.5 text-sm font-bold dropdown'
    >
      <span
        className='pr-1.5'
      >
       {icon}
      </span>
      {label}
    </button>
  )
}