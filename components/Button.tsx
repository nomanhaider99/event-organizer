import React from 'react'

interface ButtonProps {
  content: string | React.ReactElement,
  secondary?: boolean,
  type?: "button" | "reset" | "submit" | undefined
}

const Button: React.FC<ButtonProps> = ({
  content,
  secondary,
  type
}) => {
  return (
    <button
      type={type}
      className={`
                ${secondary ? 'bg-transparent border-[0.5px] border-zinc-600' : 'bg-deeppurple text-white'}
                px-4 py-1 rounded-md w-full 
            `}
    >
      {content}
    </button>
  )
}

export default Button