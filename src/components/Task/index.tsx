type TaskProp = {
    task: Task,
    handleDelete: () => void,
    handleUpdate: (task: Task) => void
}

export type Task = {
    name: string,
    isDone: boolean,
}

export default function TaskCard({ task, handleDelete, handleUpdate } : TaskProp) {
    return <li className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-xl">
        <div className="flex items-center gap-2">
            <input type="checkbox" checked={task.isDone} onChange={(e) => { handleUpdate({ name: task.name, isDone: e.target.checked})}} className="accent-blue-500" />
            <span className={`text-gray-800 ${task.isDone ? 'line-through' : ''}`}>{task.name}</span>
        </div>
        <button  className="text-red-500 hover:text-red-700" onClick={handleDelete}>✕</button>
    </li>
}