import React from 'react';

const defaultMetrics = [
  {
    label: '24h Volume',
    value: '$15,00M'
  },
  {
    label: '24h Fees',
    value: '$50,000'
  }
]


export default function ReserveStats({

}) {
  return (
    <div>
      <p
        style={{
          color: '#969696'
        }}
        className='text-sm font-medium'
      >Reserves</p>
      <div
        className='flex w-full mt-2 mb-2.5'
      >
        <div
          className='rounded-l-lg h-2 w-1/2'
          style={{
            background: 'linear-gradient(270deg, #141414 0%, rgba(20, 20, 20, 0.24) 100%)'
          }}
        />
        <div style={{
          background: 'linear-gradient(270deg, rgba(38, 161, 123, 0.24) 0%, #26A17B 100%)'
        }}
          className='rounded-r-lg h-2 w-1/2'
        />
      </div>
      <div
        className='flex justify-between'
      >
        <ReserveStatsStat
          value='65980.00'
          label='ETH'
        />

        <ReserveStatsStat
          value='11,581,900'
          label='USDC'
        />
      </div>

      <div className='mt-6'>
        {defaultMetrics && defaultMetrics.map(({ label, value }) => (
          <Metric 
            label={label}
            value={value}
          />
        ))}
      </div>
    </div>
  )
}

function ReserveStatsStat({
  value,
  label
}) {
  return (
    <p
      style={{
        color: '#969696'
      }}
      className='font-bold text-base'
    >
      <span
        className='mr-1'
        style={{
          color: '#1C1C1C'
        }}
      >
        {value}
      </span>
      {label}
    </p>
  )
}


interface MetricProps {
  label: string;
  value: string;
}

function Metric ({
  label,
  value
}: MetricProps) {
  return (
    <div
      className='flex justify-between text-sm my-1.5'
    >
      <p className='font-medium' style={{ color: '#969696' }}>{label}</p>
      <p className='font-bold' style={{ color: '#1C1C1C' }}>{value}</p>
    </div>
  )
}