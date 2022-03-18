import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

const URL = 'http://localhost/todo2022/'

function App() {
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    axios.get(URL)
    .then((response) =>{
    setTasks(response.data);
    }).catch(error => {
      if(error.response){
        alert(error.response.data.error)
      } else{
        alert(error)
      }
    });

  }, [])


  return (
    <div>
      {tasks?.map(task => (
        <li key={task.id}>{task.description} </li>
      ))}
    </div>
  );
}

export default App;
