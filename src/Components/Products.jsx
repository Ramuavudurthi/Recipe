import React from 'react'


  
const Products = ({data}) => {
  return (
    <div className='pl-4'>
        <h1 className='text-4xl font-bold '>Items</h1>
    <div className="grid items-center justify-center grid-cols-1 mx-auto ml-4 md:grid-cols-3">
        {data.map(data=>
        
      <div className="max-w-sm m-4 overflow-hidden bg-white rounded shadow-lg">
        <img className="w-full h-64 " src={data.recipe.image} alt="Card Image" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{data.recipe.label}</div>
          <p className="text-base text-gray-700">Total Calories:{Math.round(data.recipe.calories)}</p>
          <button className='px-4 py-2 font-semibold bg-blue-400 rounded hover:bg-blue-500'>Buy</button>
        </div>
      </div>
      )}
    </div>
    
    </div>
  )
}

export default Products
