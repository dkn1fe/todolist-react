import { React, useState } from 'react'
import SearchPanel from './components/search-panel/SearchPanel';
import FilterButton from './components/filter-button/FilterButton';
import NightMode from './components/nightMode/NightMode';
import ItemsList from './components/itemsList/ItemsList';
import AddList from './components/add-list/AddList';
import ErrorBoundary from './components/errorBoundaries/ErrorBoundaries';
import DontFindTask from './components/dontFindTask/DontFindTask';
import './App.scss';

function App() {
  const [itemsList, setItemsList] = useState(
    [
      { name: 'Покакать', id: 1, complited: false },
      { name: 'Покодить', id: 2, complited: false },
      { name: 'Поиграть', id: 3, complited: false },
      { name: 'Поспать', id: 4, complited: false },
      { name: 'Покушать', id: 5, complited: false },
    ]
  )
  const [isNight,setIsNight] = useState(false)
  const [filter, setFilter] = useState('')
  const [term, setTerm] = useState('All')
  const [id, setId] = useState(5)

  function ComplitedOrNo(id) {
    setItemsList(itemsList => {
      return itemsList.map(item => {
        if (item.id === id) {
          return { ...item, complited: !item.complited }
        }
        return item
      })
    })
  }

  function onSearchTask(items, filter) {
    if (items.length === 0) {
      return 
    }
    return items.filter(item => {
      return item.name.indexOf(filter) > -1
    })
  }

  function onFilteredItems(items, term) {
    switch (term) {
      case 'All':
        return items
      case 'Complated':
        return items?.filter(item => item.complited)
      case 'Incomplate':
        return items?.filter(item => item.complited === false)
      default:
        return items
    }
  }

  function updateTerm(term) {
    setTerm(term)
  }

  function newTask(name) {
    let newTasked = {
      name: name.length > 14 ? name.substr(0, 14) : name,
      id: id + 1,
      complited: false,
    }
    setItemsList(itemsList => {
      return [...itemsList, newTasked];
    })
    setId((prevId) => prevId + 1);
  }

  function deleteTask(id) {
    setItemsList(itemsList => {
      return itemsList.filter(item => item.id !== id)
    })
  }

  function updateFilter(filter) {
    setFilter(filter)
  }
 
 function updateIsNight(Night){
   setIsNight(Night)
 }


  const SearchListItems = onFilteredItems(onSearchTask(itemsList, filter), term)
  const isNightMainTitle = isNight ? 'main-title white' : 'main-title'
  return (
    <>
      <div className='container'>
        <h2  className={isNightMainTitle}>TODO LIST</h2>
        <div className='search-panel-app'>
          <SearchPanel isNight = {isNight} updateFilter={updateFilter} />
          <div className='filter-btn'>
            <FilterButton term={term} updateTerm={updateTerm} />
          </div>
          <div className='night-mode'>
            <NightMode updateIsNight = {updateIsNight}/>
          </div>
        </div>
      </div>
      <section className='tasks'>
        <ErrorBoundary>
          {console.log(SearchListItems)}
           {SearchListItems?.length === 0  ? <DontFindTask isNight = {isNight}/> : 
          <ItemsList isNight = {isNight} deleteTask={deleteTask} complitedTask={ComplitedOrNo} itemsList={SearchListItems} />
}
        </ErrorBoundary>
      </section>
      <div className='add'>
        <AddList isNight = {isNight} getNewTasked={newTask} />
      </div>
    </>
  );
}

export default App;
