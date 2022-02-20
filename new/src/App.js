import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://newsapi.org/v2';
const API_KEY = 'ab8bb696c5754955b3aa9397ec3795b4';




function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const criteria = 'top-headlines?country=us&category=business';
    const address = URL + '/' + criteria + '&apiKey=' + API_KEY;
  
    axios.get(address)
    .then((response) => {
      console.log(response.data.articles);
      setItems(response.data.articles);
    }).catch(error => {
      alert(error);
    });
  
  }, []);


  
  return (
   <div>
     <h1>Top-headlines</h1>
     <div> 
       {
         items.map(items => (
           <div key={items.title}>
             <h3>{items.title}</h3>
             <img src={items.urlToImage}/>
             <p>{items.description}</p>

             </div>
          ))
       }
     </div>
   </div>
  );
}

export default App;
