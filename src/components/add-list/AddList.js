import { useState } from 'react'
import ReactDOM from 'react-dom'
import './AddList.scss'


const AddList = (props) => {
    const [closeOrOpen, setCloseOrOpenWindow] = useState(false);

    function openModalWindow() {
        setCloseOrOpenWindow(true)

    }
    function closeModalWindow() {
        setCloseOrOpenWindow(false)

    }

    function getNewTasked(name) {
        props.getNewTasked(name)
    }


    const windowOpen = closeOrOpen ? 'modal active' : 'modal';
    const backDropOpen = closeOrOpen ? 'back-drop active' : 'back-drop'

    return (
        <>
            <div className="add-button">
                <button onClick={openModalWindow}>+</button>
            </div>
            <div className='modal-window'>
                <Portals>
                    <ModalWindows
                        backDropOpen={backDropOpen}
                        closeModalWindow={closeModalWindow}
                        windowOpen={windowOpen}
                        getNewTasked={getNewTasked}
                        isNight={props.isNight} />
                </Portals>

            </div>
        </>
    )
}

const Portals = (props) => {
    const node = document.createElement('div');
    document.body.append(node);
    return ReactDOM.createPortal(props.children, node)
}


const ModalWindows = (props) => {
    let { isNight } = props
    const [newTaskValue, setNewTaskValue] = useState('');
    const [isValidForm, setValidForm] = useState(true)

    function applyTask(e) {
        e.preventDefault();
        if (newTaskValue.length > 3) {
            props.getNewTasked(newTaskValue)
        }
        else {
            setValidForm(false)
        }
    }
    const isNightModalWindow = isNight ? 'modal-content white-bg-modal' : 'modal-content'
     const classValidForm = isValidForm ? 'valid-form ' : 'valid-form active'
     const isNightModalTitle = isNight ? 'modal-title white' : 'modal-title'
     const isNightModalInput  = isNight ? 'modal-inp white-bg-input' : 'modal-inp'
     const isNightCancelBtn = isNight  ? 'cancel white-btn' : 'cancel'
    return (
        <div className={props.backDropOpen}>
            <div className={props.windowOpen}>
                <div className={isNightModalWindow}>
                    <div className='modal-container'>
                        <div className={isNightModalTitle}>
                            <h3>NEW NOTE</h3>
                        </div>
                        <form className='modal-input'>
                            <input required
                                type='text'
                                onChange={(e) => setNewTaskValue(e.target.value)}
                                value={newTaskValue}
                                className={isNightModalInput}
                                placeholder='Input your note...'
                            />
                        </form>
                        <p className={classValidForm}>enter more characters</p>
                        <div className='modal-buttons'>
                            <button onClick={props.closeModalWindow} className={isNightCancelBtn}>CANCEL</button>
                            <button onClick={applyTask} type="submit" className='apply'>APPLY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddList