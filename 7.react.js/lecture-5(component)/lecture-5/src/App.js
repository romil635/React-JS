import React from 'react';
import './App.css';
import Nested from './componets/Nested';
import Card from './componets/Card';
import TodoList from './componets/Task'
import TodoList2 from './Task-2';
import TodoList3 from './Task-3';

function App() {
  return (
   <div>
    <Nested/>
  <Card/>
  <TodoList/>
  <TodoList2/>
  <TodoList3/>
   
   </div> 
    );
}

export default App;




