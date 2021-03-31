import React from 'react';
import ReactDOM from 'react-dom';
import './Apps.scss';
import {TaskList} from './components/tasklist/taskList';
import {InputField} from './components/inputfield/inputField';



const App = () => {
  const theTask = [
    {
      task: 'Learn HTML',
      id: 1,
      status: false
    },
    {
      task: 'Learn CSS',
      id: 2,
      status: true
    },
    {
      task: 'Learn JS',
      id: 3,
      status: false
    }
  ];
  return (
    <div className="container">
      <h1>To Do List</h1>
      <InputField /> <TaskList theTask={theTask} />
      
    </div>
  )
};


ReactDOM.render(
    <App />,
  document.getElementById('root')
);



// import {Comments} from './components';
// import {Title} from './components/title/Title';

// const App = () => {
//   const commentsList = [
//     {
//       id: 2,
//       avatar: '.../',
//       text: 'comment1',
//       author: 'Ivan'
//     },
//     {
//       id: 3,
//       avatar: '...../',
//       text: 'comment22',
//       author: 'Kate'
//     },
//     {
//       id: 4,
//       avatar: '../',
//       text: 'comment3333',
//       author: 'Vova'
//     },
//   ];

//   return ( 
//     <div><Comments commentsList={commentsList} /> <Title /></div>
//     );
// };
  


// const App = () => {
//   const commentsList = ['Привет', 'Всем'];
//   return ( 
//     <div><Comments commentsList={commentsList} /></div>
//     );
// };