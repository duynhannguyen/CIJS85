import TodoItem from "./TodoItem";
const TodolList = () => {
    const TaskData = [
        {
            id: 1,
            TaskTitle: "Learn to type fast",
            color: "green",

        },
        {
            id: 2,
            TaskTitle: "Learn GitHub",
            color: "green",

        },
        {
            id: 3,
            TaskTitle: "Learn Tailwind",
            color: "green",

        },
        {
            id: 4,
            TaskTitle: "Learn vite",
            color: "green",

        },
    ]
    let TaskList = TaskData.map((TaskDataChild) =>{
            const {id,TaskTitle} = TaskDataChild
            return(
                <> <TodoItem id = {id} title = {TaskTitle} /> 
                
                </>
            )
        })

    return (
        <div className = "todolist">
            {TaskList}
        </div>
    )
}
export default TodolList; 