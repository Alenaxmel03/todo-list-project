import React from 'react';
import './style.scss'


export const InputField = () => {
    return (
        <div>
            <form action="#">
                <input className ="input" type = "text" placeholder="What do you want to do..." />
            </form>
            <br/>
            <form action="#">
                <button className="btn-field">All</button>
                <button className="btn-field">Active</button>
                <button className="btn-field">Completed</button>
            </form>
        </div>
    );
};