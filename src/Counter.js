import React, { useState, useEffect } from 'react'
import ToDoList from './ToDoList';

export default function Counter() {
    const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(0);

    // component did mount
    // useEffect(() => {
    //     console.log("The use effect ran")
    // }, []);

    // component did update
    // useEffect(() => {
    //     console.log("The use effect ran")
    // }, [count, count2])

    // component did unmount or cleaup
    // useEffect(() => {
    //     console.log("The use effect ran");
    //     return () => {
    //         console.log("The return is being ran")
    //     }
    // }, [])

    // combining update useEffect with cleanup
    // useEffect(() => {
    //     console.log(`The count has updated ${count}`);
    //     return () => {
    //         console.log(`we are in the cleanup - the count is ${count}`)
    //     }
    // }, [count])

  return (
    <div>
        <ToDoList />
        <h6> Counter </h6>
        <p> current count : {count} </p>
        <button onClick={() => setCount(count + 1)}> Increment the count </button>
        {/* <button onClick={() => setCount2(count2 + 1)}> Increment count 2 </button> */}
    </div>
  )
}
