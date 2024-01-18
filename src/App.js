import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react'
import Products from './Components/Products';
function App() {
  const [search,setSearch]=useState('');
  const[data,setData]=useState([]);
  const YOUR_APP_ID="87849081";
  const YOUR_APP_KEY="e1b61bb50f532dd6584c4dee29af82d2";
  const submitHandler=e=>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(response => response.json()).then(data=>setData(data.hits));
  }
  return (
    <div>
      
      <div className='h-[80vh] w-full flex justify-center items-center flex-col '>
      <h1 className='pb-12 font-serif text-4xl font-semibold text-black'>Food Recipe App</h1>
        <div className='p-12 border-4 border-gray-500 rounded-xl'>
      <h1 className='py-2 font-serif font-semibold text-black'>Enter a Recipe Name 😋😋</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='px-4 py-1 bg-transparent border rounded outline-none'/><br></br><br></br>
        <input type="submit" value="search" className='px-3 py-2 font-semibold bg-green-400 rounded hover:bg-green-500 hover:cursor-pointer'/>
      </form>
      
      </div>
      </div>
      {data.length>=1?<Products data={data}/>:null}
    </div>
  );
}

export default App;
