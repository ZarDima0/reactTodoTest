function ToDo({ task  }) {
    return (
        <div key={task.id} className="item-todo">
        <div 
            className={task.complete ? "item-text strike" : "item-text"}
            >
            {task.taskk}
        </div>
        <div className="item-delete" >
            X
        </div>
    </div>
    )
}

export default ToDo