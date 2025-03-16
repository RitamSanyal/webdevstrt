const TaskListNumbers = () => {
    return (
        <div className="!bg-[#1C1C1C] flex mt-10 justify-between gap-5 screen">
            <div className="rounded-xl w-[45%] py-6 px-9 !bg-red-400">
                <h2 className="!bg-[inherit] text-3xl font-semibold">0</h2>
                <h3 className="!bg-[inherit] text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 !bg-red-400">
                <h2 className="!bg-[inherit] text-3xl font-semibold">0</h2>
                <h3 className="!bg-[inherit] text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 !bg-red-400">
                <h2 className="!bg-[inherit] text-3xl font-semibold">0</h2>
                <h3 className="!bg-[inherit] text-xl font-medium">New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers