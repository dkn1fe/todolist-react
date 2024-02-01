import React, { Component } from 'react';
import ItemTask from '../itemTask/ItemTask';
import './ItemsList.scss';

const ItemList = (props) => {
    const { itemsList,deleteTask,complitedTask,isNight} = props
    const ItemTaskLists = itemsList?.map(item=> {
        const  {id, ...itemProps} = item;
        return (
            <ItemTask
            key = {id}
            {...itemProps}
            deleteTask = {() => deleteTask(id)}
            complitedTask = {()  => complitedTask(id)}
            isNight = {isNight}
            />
        )
    })

    return (
        <div className='task-list'>
            {ItemTaskLists}
        </div>
    )
}



export default ItemList;
