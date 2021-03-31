import React from 'react';
import './style.scss'
import {TaskItem} from '../taskitem/taskItem';


export const TaskList = ({theTask}) => {
    return (
        <ul className= "list">
            {theTask.map((item) => <TaskItem key={item.id} {...item} />
            )}
        </ul>
    );
};