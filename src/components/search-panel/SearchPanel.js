import { useState } from 'react';
import './SearchPanel.scss'

 const SearchPanel = (props) => {
    const [filterValue,setFilterValue] = useState('');
     props.updateFilter(filterValue)

     const isNightSearchPanel = props.isNight ? 'search-panel white-bg' : 'search-panel'
    return (
         <form className = {isNightSearchPanel}>
            <input  required
            onChange={(e) => setFilterValue(e.target.value)}
            className = 'icon' 
            type = 'text'
            placeholder = 'Search note...'
            ></input>
         </form>
     )
 }

 export default SearchPanel;