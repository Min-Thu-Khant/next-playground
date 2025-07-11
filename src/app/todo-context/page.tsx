'use client'

import { ShopButton } from "@/components/Button"
import TextBox from "@/components/Input"
import { useState } from "react"
import { TodoListStore } from "@/store/todoStore"
import TaskCard from "@/components/Task"

export default function TodoContext() {
    const [text, setText] = useState("")
    const { list, addTodo, deleteTodo, updateTodo } = TodoListStore()
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">📝 Todo List</h1>

                <div className="flex items-center gap-2 mb-4">
                    <TextBox text={text} handleChange={(setText)} placeholder="input dfsdfsd tasks here" />
                    <ShopButton text="Add" onClick={() => {addTodo(text) ; setText("")}} />

                </div>
                <ul className="space-y-3">
                    {
                        list.map((task) => <TaskCard key={task.name} task={task} handleDelete={() => deleteTodo(task.name)} handleUpdate={updateTodo} />)
                    }

                </ul>
            </div>
        </div>
    )
}