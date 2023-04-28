import React, { useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface Option {
  label: string;
  id: number;
}

interface DropdownProps {
  selectedId: number
  options: Option[]
  onChange: (id: number) => void;
}

export default function Dropdown({
  options,
  selectedId,
  onChange
}: DropdownProps) {
  const ref = useRef(null)
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref as any, () => setOpen(false))

  return (
    <div
      className='relative'
      ref={ref as any}
    >
      <button
        className='flex items-center bg-white rounded-xl py-2 pl-3 pr-3.5 text-sm font-bold dropdown'
        onClick={() => setOpen(!open)}
      >
        {options.find(option => option.id === selectedId)?.label}
        <span
          className='pl-3'
        >
          <DropdownIcon />
        </span>
      </button>

      {open && (
        <ul
          className='bg-white rounded-xl p-3 text-sm font-bold dropdown absolute right-0 z-10 menu mt-1'
        >
          {options && options.map(({ id, label }) => (
            <li 
              className={`pl-2 py-2 rounded-lg cursor-pointer li-hover ${id === selectedId && 'flex items-center cursor-default li-hover-default'}`}
              onClick={() => {
                onChange(id)
                setOpen(!open)
              }}
            >
              {label}
              {id === selectedId && <span className='ml-auto'><Checked /></span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


// Should move these to seprate compoents if I had time
function DropdownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="6"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        fill="#1C1C1C"
        fillRule="evenodd"
        d="M.23.21a.75.75 0 011.06.02L5 4.168 8.71.23a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L.21 1.27A.75.75 0 01.23.21z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function Checked() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#0085FF"
        fillRule="evenodd"
        d="M8 16A8 8 0 108-.001 8 8 0 008 16zm3.707-9.293a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
