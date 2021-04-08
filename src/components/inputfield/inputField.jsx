import React, { Component }from 'react';
import './style.scss'


export default class InputField extends Component  {
   render () {
       const {displayedActive} = this.props;
       console.log("displayedActive", displayedActive)
       
    return (
        <div>
            <form action="#">
                <input className ="input" type = "text" placeholder="What do you want to do..." />
            </form>
            <br/>
            <form action="#">
                <button className="btn-field" type="button" onClick={() => displayedActive("all")}>All</button>
                <button className="btn-field" type="button" onClick={() => displayedActive("active")}>Active</button>
                <button className="btn-field" type="button" onClick={() => displayedActive("done")}>Completed</button>
            </form>
        </div>
    );
};}
    