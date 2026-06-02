// react.js imports - specifically our HOOKS!
import React, {useState, useEffect} from 'react'

// import Posts component
import Posts from "./components/Posts"

// main component function
export default function App() {
  // slice of state declaration
 const [count, setCount] = useState(0);

 useEffect(()=>{
  document.title = `Count: ${count}`
 }, [count])
  
 // return renders in the browser window
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

    <Posts />
    </div>
  )
}
