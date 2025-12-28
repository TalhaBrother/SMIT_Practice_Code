import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagination from '@mui/material/Pagination';
import axios from 'axios'
import { useQueryClient,useQuery } from '@tanstack/react-query'

function App() {
    const queryClient = useQueryClient()
  let fetchData = async () => {
    let response=await axios.get("https://dummyjson.com/products?limit=0&skip=0")
    return response.data.products
  
  }
  const{data}=useQuery({
    queryKey:['products'],
    queryFn: fetchData
  })
 console.log(data);
  return (
    <>
    <div >
   {data?.map((item)=>{
    return (
    <div >
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={item.thumbnail}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {item.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {item.title}
          </h2>
          <p className="mt-1">{item.price}</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
   )})}
    <div>
     <Pagination/>
    </div>
    </div>
    </>
  )
}

export default App
