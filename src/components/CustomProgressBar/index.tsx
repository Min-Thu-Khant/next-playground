import ProgressBar from "@ramonak/react-progress-bar"
import Button from "../Button"

export default function CustomProgressBar({
    value, color, onReset, onIncrease
} : { value: number, color: string, onReset: () => void, onIncrease : () => void}) {
    return <div className='w-full p-2 border border-b-amber-900 rounded-md'>
            <ProgressBar completed={value} maxCompleted={100} bgColor={color} customLabel={value === 100 ? 'Completed' : ''} />
            {
                value === 100 ?
                    <Button text='Reset' handleClick={onReset}/>
                    :
                    <Button text='Increase' handleClick={onIncrease}/>
            }
        </div>
}