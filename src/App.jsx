import React from 'react';
import ReactDOM from 'react-dom';
import './Apps.scss';
import TaskList from './components/tasklist/taskList';
import InputField from './components/inputfield/inputField';
// import { render } from '@testing-library/react';
// import {ClickCounter} from './components/click-counter/ClickCounter';



class  App extends React.Component {
  state = {
    theTask: [
    {
      task: 'Learn HTML',
      id: 1,
      isimportant: false,
      isDone: false,
      isActive: false
    },
    {
      task: 'Learn CSS',
      id: 2,
      isimportant: false,
      isDone: false,
      isActive: false
    },
    {
      task: 'Learn JS',
      id: 3,
      isimportant: false,
      isDone: false,
      isActive: false
    }
  ],

  displayedList: 'active',
  newTheTask : []

}


displayedActive =  (string) => {
  console.log('displayedActive', string);

  this.setState ( {displayedList: string});
  console.log(this)
};




 



  toggleDone = (inputId) => {
    console.log('toggleDone', inputId);


    const stateCb = (preState) => {
      const {theTask} = preState;

      const newTheTask = theTask.map(item => {
        const {id, isDone} =item;

        return {
          ...item,
          isDone: inputId === id ? !isDone : isDone
        }; });

      return {
        theTask:newTheTask
      };
    };


    this.setState(stateCb);
  }





toggleIsImportant = (inputId) => {
  console.log(inputId);


  const stateCb = (preState) => {
    const {theTask} = preState;

    const newTheTask = theTask.map(item => {
      const {id, isimportant} =item;

      return {
        ...item,
        isimportant: inputId === id ? !isimportant : isimportant
      }; });

    return {
      theTask:newTheTask
    };
  };


  this.setState(stateCb);
}

delHandler = (inputId) => {
    console.log(inputId);


    const stateCb = (preState) => {
      const {theTask} = preState;

      const newTheTask = theTask.filter((item) => item.id !== inputId);
      return {
        theTask:newTheTask
      };
    };


    this.setState(stateCb);
  }





  render() {

    const {theTask,displayedList} = this.state;

    let newTheTask = [];

    if (displayedList === 'all') {
      newTheTask = this.state.newTheTask;
    } else if (displayedList === 'active') {
      newTheTask = this.state.newTheTask.filter(item =>!item.isDone)
    } else if (displayedList === 'done') {
      newTheTask = this.state.newTheTask.filter(item =>item.isDone)
    };


    const activeTask = theTask.filter(item => !item.isDone)
    const completedTask = theTask.filter(item => item.isDone)

  return (
    <div className="container">
      <h1>To Do List</h1>
      <h2>Active task: {activeTask.length}</h2>
      <h2>Completed task: {completedTask.length}</h2>
      <InputField displayedActive={this.displayedActive}  />
      <TaskList
      theTask={theTask}
      toggleDone={this.toggleDone}
      delHandler={this.delHandler}
      toggleIsImportant={this.toggleIsImportant}
      newTheTask={newTheTask}
     
     
      />
      {/* <ClickCounter initClicksQty={5}/> */}
    </div>
  )
  }
}



ReactDOM.render(
    <App />,
  document.getElementById('root')
);