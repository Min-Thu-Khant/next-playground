'use client';
import { useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import Button from '@/components/Button';
import CustomProgressBar from '@/components/CustomProgressBar';

export default function Home() {
    type Colors = {
        green: number,
        red: number,
        blue: number,
    }
    const [colors, setColors] = useState<Colors>({
        green: 0,
        red: 0,
        blue: 0,
    });



    return <div className='flex flex-col justify-between'>
        <CustomProgressBar
            value={colors.green}
            color='#00ff00' onReset={() => setColors((prev) => ({ ...prev, green: 0 }))}
            onIncrease={() => { setColors((prev) => ({ ...prev, green: prev.green + 20 })) }} />
        <CustomProgressBar 
            value={colors.red} 
            color='#ff0000' 
            onReset={() => setColors((prev) => ({ ...prev, red: 0 }))} 
            onIncrease={() => { setColors((prev) => ({ ...prev, red: prev.red + 20 })) }} />
        <CustomProgressBar 
            value={colors.blue} 
            color='#0000ff' 
            onReset={() => setColors((prev) => ({ ...prev, blue: 0 }))} 
            onIncrease={() => { setColors((prev) => ({ ...prev, blue: prev.blue + 20 })) }} />

        <CustomProgressBar 
            value={100} 
            color='#0240ff' 
            onReset={() => alert("reset")} 
            onIncrease={() => { alert("increase") }} />
    </div>
}