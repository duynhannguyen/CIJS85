const TodoItem = (props) => {
    const {id , title} = props
    return(
        <p id = {id} className = "todoitem">
            {title}
            <input className = "check-box" type = "checkbox"></input>
        </p>
    )
}
export default TodoItem ;