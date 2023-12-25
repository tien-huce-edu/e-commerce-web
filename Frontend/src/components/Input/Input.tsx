import { HTMLInputTypeAttribute } from 'react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}

export default function Input({ type, errorMessage, placeholder, className, name, register, rules }: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
        placeholder={placeholder}
        {...register(name, rules)}
      />
      <div className='pl-2 mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}
