import { use, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query"


function App() {
  const [products, setProducts] = useState([])
  const [skips, setSkips] = useState(0)
  const [limits, setLimits] = useState(10)
  let fetchProducts = async () => {
    let response = await axios.get(`https://dummyjson.com/products?limit=${limits}&skip=${skips}`)
    setProducts((prev) => [...prev, ...response.data.products])
    console.log(response.data)
    return response.data

  }
  const LoadMore = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
      setSkips((prev) => prev + 10)
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", LoadMore)
    return () => {
      document.removeEventListener("scroll", LoadMore)
    }
  }, [])


  let { data, isLoading, error } = useQuery({
    queryKey: ["products", limits, skips],
    queryFn: fetchProducts,
    refetchOnWindowFocus: false,
  })
  return (
    <>
      <div>
        <div>{data?.products?.map((elm) => (
          <div key={elm.id}><h1>{elm.id}</h1>{elm.title}</div>

        ))}
        </div>
      </div>
    </>
  )
}

export default App
