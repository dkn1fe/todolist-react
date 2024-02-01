
import deleteImg from '../../img/delete.svg'

const ItemTask = (props) => {
    let {name,id,deleteTask,complitedTask,complited,isNight} = props
    const isComplited = complited ? 'task-and-checkbox actived ' : 'task-and-checkbox'
    const isNightTask = isNight ? 'task-name white' : 'task-name'
    return (
        <div  className="task">
        <div className={isComplited}>
            <input onClick={() => complitedTask(id)}
            className='checkbox'
                type='checkbox'>
                </input>
            <div className={isNightTask}>
            <p >{name}</p>
            </div>
        </div>
        <div className="task-change-delete">
            <img onClick={() => deleteTask(id)} className='delete' src={deleteImg} alt="Delete" />
        </div>
    </div>
    )
}

export default ItemTask;