import React from 'react'; // Importing React core library
import Header from './MyComponents/Header'; // Custom Header component
import Todos from './MyComponents/Todos'; // Component to display todo list
import Footer from './MyComponents/Footer'; // Footer component
import AddTodo from './MyComponents/AddTodo'; // Component to add a new todo
import './App.css'; // Importing CSS styling
import react ,{ useState,useEffect } from 'react'; // useState and useEffect hooks from React

function App(){
    let initTodo; // Variable to store initial todo list

    // Check if 'todos' key exists in localStorage
    if(localStorage.getItem("todos")===null){
       initTodo=[]; // If not, start with an empty array
    }
    else{
        initTodo=JSON.parse(localStorage.getItem("todos")) // If yes, parse and use the stored array
    }

    // Function to delete a todo
    const onDelete=(todo)=>{
        console.log("this deletes todo",todo)
        
        // Filter out the todo that needs to be deleted
        setTodos(todos.filter((e)=>{
            return e!==todo;
        }));

        // Update the localStorage after deleting (Note: This line is not effective here, because it's called before the state is updated)
        localStorage.setItem("todos",JSON.stringify(todos));
    }

    // Function to add a new todo
    const addTodo=(title,desc)=>{
        console.log("I am adding this todo",title,desc)
        let sno;

        // Assign serial number (sno) to the new todo
        if(todos.length==0){
            sno=1; // Start with 1 if no todos
        }
        else{
         sno=todos[todos.length-1].sno+1; // Else, use last sno + 1
        }

        // Create the new todo object
        const myTodos={
            sno:sno,
            title:title,
            desc:desc,
        }

        // Add the new todo to the list
        setTodos([...todos,myTodos]); // Use spread operator to keep existing todos
        console.log(myTodos);      
    }

    // State hook to manage todos
    const [todos,setTodos]=useState(initTodo); // Initialize state with data from localStorage or empty array

    // useEffect runs after every render when 'todos' changes
    useEffect(()=>{
        // Update the localStorage whenever todos change
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]) // Dependency array ensures this runs only when todos change

    return(
        <>
        {/* Render Header with a title */}
        <Header title="My To do list " searchBar={false} />

        {/* AddTodo component lets user input new todo */}
        <AddTodo addTodo={addTodo}/>

        {/* Todos component displays the list of todos and handles deletion */}
        <Todos todos={todos} onDelete={onDelete}/>

        {/* Render Footer */}
        <Footer/>
        </>
    )
}
export default App; // Export the App component so it can be used in index.js
