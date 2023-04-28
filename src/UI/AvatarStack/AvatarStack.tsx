import React from 'react';

interface AvatarStackProps {
  images: string[]
}

export default function AvatarStack({
  images
}: AvatarStackProps) {
  return (
    <div className="flex -space-x-2 overflow-hidden">
      {images && images.map(image => (
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={image}
          alt={image}
        />
      ))}
    </div>
  )
}