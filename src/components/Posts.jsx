import React, {useState, useEffect} from 'react'

export default function Posts() {
   // declare some state to store some data
   const [data, setData] = useState([]);

   // fetch some data with promises
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(json => setData(json))
   }, [])

   console.log(data)

   // render data
  return (
    <div>
        <h2>Posts</h2>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
    </div>
  )
}
