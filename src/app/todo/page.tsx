'use client'
import { ShopButton } from "@/components/Button"
import TextBox from '@/components/Input'
import { useState } from "react"
import TaskCard, { Task } from "@/components/Task"
export default function Todo() {
    const [text, setText] = useState("")
    const [tasks, setTasks] = useState<Array<Task>>([
        { name: 'buy something', isDone: false },
        { name: 'drink water', isDone: false }
    ])

    const addTasks = () => {
        setTasks((prev) => [...prev, { name: text, isDone: false }])
    }

    const removeTasks = (name: string) => {
        const newTasks = tasks.filter((task) => task.name !== name)
        setTasks(newTasks)
    }

    const updateTask = (newTask: Task) => {
        const newTasks = tasks.map((task) => {
            if (task.name == newTask.name) {
                return newTask
            }
            return task
        })

        setTasks(newTasks)
    }
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">📝 Todo List</h1>

                <div className="flex items-center gap-2 mb-4">
                    <TextBox text={text} handleChange={(setText)} placeholder="input dfsdfsd tasks here" />
                    <ShopButton text="Add" onClick={addTasks} />

                </div>
                <ul className="space-y-3">
                    {
                        tasks.map((task) => <TaskCard key={task.name} task={task} handleDelete={() => removeTasks(task.name)} handleUpdate={updateTask} />)
                    }

                </ul>
            </div>
        </div>

    )
}