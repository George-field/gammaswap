import React from 'react';

interface StatProps {
  label: string;
  value: string;
  secondaryValue?: string;
  secondaryLabel: string;
}

export default function Stat({
  label,
  value,
  secondaryLabel,
  secondaryValue
}: StatProps) {
  return (
    <div>
      <p
        style={{
          color: '#969696'
        }}
        className='text-sm font-medium'
      >{label}</p>
      <h1
        className='text-2xl font-bold'
      >
        {value}
      </h1>
      <div
        className='flex text-sm'
      >
        {/* TODO: Create function that renders correct styles based on inputs */}
        {secondaryValue && (
          <p
            style={{
              color: '#00BA34'
            }}
            className='mr-1 font-bold'>{
              secondaryValue}
          </p>
        )}
        <p
          style={{
            color: '#969696'
          }}
          className='font-medium '
        >
          {secondaryLabel}
        </p>
      </div>
    </div>
  )
}