import type { ComponentProps } from 'react';

interface InputRootProps extends ComponentProps<'div'> {
    error?: boolean;
}

interface InputIconProps extends ComponentProps<'span'> {
    error?: boolean;
}

interface InputProps extends ComponentProps<'input'> {}

export function InputRoot({error = false, ...props}: InputRootProps) {
    return (
        <div
            data-error={error}
            className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
            {...props}
        />
    )
}

export function InputIcon({error = false, ...props}: InputIconProps) {
    return (
        <span 
            data-error={error}
            className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
            {...props}
        />
    )
}

export function InputField(props: InputProps) {
    return (
        <input
            className="bg-transparent flex-1 outline-0 placeholder-gray-400"
            {...props}
        />
    )
}