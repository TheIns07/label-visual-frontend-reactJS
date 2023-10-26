import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CategoryDTO } from './models/CategoryDTO';


function App() {
  const [categories, setCategories] = useState<Array<CategoryDTO>>([]);

  function getAllCategories(){
    return fetch('https://localhost:7131/api/Category')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllCategories();
  }, [])

  return (
    <div className="App">
      {categories.map((category, index) => {
        return (
          <div>
          <h1>{index}</h1>
          <h1>{category.name}</h1>
          </div>
        )
      })}
    </div>
  );
}



export default App;
