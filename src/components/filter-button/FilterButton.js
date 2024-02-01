import { useState } from 'react'
import chevron from '../../img/chevron.svg'
import './FilterButton.scss'

const FilterButton = (props) => {
    const [filterList, setFilterList] = useState(
        [
            { name: 'All', id: 1 },
            { name: 'Complated', id: 2 },
            { name: 'Incomplate', id: 3 },
        ]
    )
    const [activeList, setActiveList] = useState(false)
   
    const activeListItems = activeList ? 'button-filter-list active' : 'button-filter-list';
    const activeImg = activeList ? 'filter-img activeImg' : 'filter-img';
    const buttonFilterList = filterList.map(({ name, id }) => {
        const activeButton = props.term === name;
        const clazz = activeButton ? 'button-list-item active-button' : 'button-list-item' 
        return (
            <li key={id}><button onClick={() => props.updateTerm(name)} className={clazz}>{name}</button></li>
        )
    })
    return (
        <>
            <div className='filter-button'>
                <div className='button-name'>
                    <button onClick={() => setActiveList(!activeList)} className='button-filter'><span>ALL</span></button>
                    <img className={activeImg} src={chevron}></img>
                </div>
                <div className={activeListItems}>
                    {buttonFilterList}
                </div>
            </div>
        </>
    )
}

export default FilterButton;