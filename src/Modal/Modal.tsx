import React from 'react';

interface ModalProps {
  children: JSX.Element;
  header?: JSX.Element;
}

export default function Modal({
  children,
  header
}: ModalProps) {
  return (
    <div
      className="relative transform overflow-hidden transition-all sm:my-8 sm:w-full sm:p-6"
      style={{
        width: 'fit-content'
      }}
    >
     {header}
     {children}
    </div>
  )
}