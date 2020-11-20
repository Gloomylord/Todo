import React from 'react';
import './App.css';
import TodoForm from "../components/Todo/TodoForm";
import Header from "../components/Header";
import TodoList from "../components/Todo/TodoList";

function App() {
    return (
        <div className='App'>
            <Header/>
            <div className='container'>
              <TodoForm/>
              <TodoList/>
            </div>
        </div>
    );
}

export default App;
