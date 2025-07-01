
export default function CustomButton({ text, handleClick }: {
    text: string,
    handleClick: () => void
}) {
    return <button className='w-full hover:bg-blue-400 bg-gray-800 rounded-md mt-2 ' onClick={handleClick}>{text}</button>
}