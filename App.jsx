
import './App.css'
import AllMenu from './AllMenu/AllMenu'
import { Suspense } from 'react'

function App() {

  const foodUrl = fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then((res)=> res.json())
  return (
    <>
      <h1>Food Menu</h1>
      <Suspense fallback={<h2>Food Menu is loading...</h2>}>
         <AllMenu foodUrl={foodUrl}></AllMenu>
      </Suspense>
    </>
  )
}

export default App
