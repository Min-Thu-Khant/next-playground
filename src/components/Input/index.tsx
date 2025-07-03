
export type InputProps =  React.InputHTMLAttributes<HTMLInputElement> & {
    text?: string,
    handleChange: (value: string)=> void
}

export default function TextBox({  text, handleChange, ...props } : InputProps) {
    return (
        <input
            {...props}
            type="text"
            value={text}
            onChange={(e) => handleChange(e.target.value) }
            className="flex-grow border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
    )
}