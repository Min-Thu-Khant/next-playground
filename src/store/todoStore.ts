import { Task } from "@/components/Task";
import { create } from "zustand";


type TodoStore = {
    list: Array<Task>,
    addTodo: (name: string) => void,
    deleteTodo: (name: string) => void,
    updateTodo: (task: Task) => void,
    deleteAll: () => void
}

export const TodoListStore = create<TodoStore>((set) => ({
    list: [{ name: 'buy something', isDone: false }, { name: 'drink water', isDone: true }],
    addTodo: (name: string) => set((state) => ({ list: [...state.list, { name: name, isDone: false }] })),
    deleteTodo: (name: string) => set((state) => ({ list: state.list.filter((l) => l.name != name) })),
    updateTodo: (task : Task) => set((state)=> ({
        list: state.list.map((l)=> {
            if (l.name == task.name){
                return task
            }else{
                return l
            }
        })
    })),
    deleteAll: () => set(()=> ({ list: []}))

}))