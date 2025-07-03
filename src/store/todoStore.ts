import { Task } from "@/components/Task";
import { create } from "zustand";


type TodoStore = {
    list: Array<Task>,
    addTodo: (name: string) => void,
    // deleteTodo: (name: string) => void,
    // updateTodo: (isDone: boolean) => void
}

export const TodoListStore = create<TodoStore>((set)=> ({
    list: [{ name: 'buy something', isDone: false}, {name: 'drink water', isDone: true}],
    addTodo: (name: string) => set((state)=> ({ list: [...state.list, { name: name, isDone : false}]}))
    // deleteTodo: (name: string) => set((state) => ( {
    //     const newList = state.list.filter((l)=> l.name !=name);

    // }))
}))