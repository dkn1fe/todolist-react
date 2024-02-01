import detective from '../../img/detective.png'
import './DontFindTask.scss'

const DontFindTask = (props) => {
    let {isNight} = props;
    const isNightDontFintTask = isNight ? 'dont-find-task-title white' : 'dont-find-task-title' 
    return (
        <>
        <div className="dont-find-task-img">
            <img src = {detective}></img>
        </div>
        <div className={isNightDontFintTask}>
            <h3>Empty</h3>
        </div>
        </>
    )
}

export default DontFindTask