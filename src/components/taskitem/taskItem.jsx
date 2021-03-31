import React from 'react';
import './style.scss'
import {Buttoms} from '../buttoms/Buttoms';


export const TaskItem =({task}) => {
    return (
        <li className="item">
            <span >
                {task} <Buttoms />
            </span>
        </li>
    );
};