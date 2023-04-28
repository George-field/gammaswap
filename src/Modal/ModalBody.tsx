import React from 'react';

interface ModalBodyProps {
  children: JSX.Element;
}

export default function ModalBody({
  children
}: ModalBodyProps) {
  return (
    <div
      className="rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl sm:my-8 sm:w-full sm:p-6"
      style={{
        width: 460
      }}
    >
      {children}
    </div>
  )
}