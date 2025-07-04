import { Task } from "@/components/Task";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'


type TodoStore = {
    list: Array<Task>,
    addTodo: (name: string) => void,
    deleteTodo: (name: string) => void,
    updateTodo: (task: Task) => void,
    deleteAll: () => void
}

export const TodoListStore = create<TodoStore>()(persist(
    (set, get) => ({
        list: [],
        addTodo: (name: string) => set(() => ({ list: [...get().list, { name: name, isDone: false }] })),
        deleteTodo: (name: string) => set(() => ({ list: get().list.filter((l) => l.name != name) })),
        updateTodo: (task: Task) => set(() => ({
            list: get().list.map((l) => {
                if (l.name == task.name) {
                    return task
                } else {
                    return l
                }
            })
        })),
        deleteAll: () => set(() => ({ list: [] }))

    }),
    {
        name: "todoStore"
    }
))