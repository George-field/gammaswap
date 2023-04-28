import React from 'react';

import LinkIcon from '../../images/link.svg';

interface ModalLinkProps {
  label: string;
  url: string;
}

export default function ModalLink({
  label,
  url
}: ModalLinkProps) {
  return (
    <div
      className='flex items-center font-medium'
    >
      <p
        style={{
          color: '#969696'
        }}
        className='mr-1 text-sm'
      >
        {label}
      </p>
      <a
        href={url}
        style={{
          color: '#969696'
        }}
        className='font-medium'
      >
        <img src={LinkIcon} />
      </a>
    </div>
  )
}