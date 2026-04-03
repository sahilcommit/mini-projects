import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {
  // We keep the image data in an array. Initially, it's empty.
  const [userData, setUserData] = useState([]);
  
  // This state tracks which "page" of the API we are looking at.
  const [index, setIndex] = useState(1)

  // Our helper function to talk to the external server
  const getData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      // Once the data arrives, we save it into our state
      setUserData(response.data)
    } catch (error) {
      console.error("Oops! Failed to fetch images:", error)
    }
  }

  // This is the brain of the app: 
  // Whenever the 'index' (page number) changes, trigger the getData function.
  useEffect(function () {
    getData()
  }, [index])

  // Placeholder UI: Show "Loading" if we don't have data yet
  let printUserData = <h3 className='text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium italic'>Fetching photos...</h3>

  // If data exists, map through it to create our card list
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <Card key={idx} elem={elem} />
    })
  }

  return (
    <div className='bg-zinc-950 overflow-hidden h-screen flex flex-col text-white'>
      
      {/* Header Area */}
      <header className='p-6 border-b border-zinc-800 flex justify-between items-center'>
        <h1 className='text-2xl font-bold tracking-tight text-amber-400'>Lumina Gallery</h1>
        <p className='text-xs text-zinc-500 hidden md:block'>Powered by Lorem Picsum API</p>
      </header>

      {/* Main Gallery Grid */}
      <div className='flex-1 overflow-y-auto p-8 flex flex-wrap justify-center gap-6'>
        {printUserData}
      </div>

      {/* Pagination Controls */}
      <footer className='bg-zinc-900/50 p-6 border-t border-zinc-800 flex justify-center gap-8 items-center'>
        <button
          // We dim the button if we are on the first page
          style={{ opacity: index === 1 ? 0.4 : 1 }}
          className='bg-amber-400 hover:bg-amber-300 text-black px-6 py-2 rounded-full font-bold transition-all active:scale-90 disabled:cursor-not-allowed'
          disabled={index === 1}
          onClick={() => {
            setUserData([]) // Clear old data for a fresh "Loading" feel
            setIndex(index - 1)
          }}
        >
          Previous
        </button>

        <span className='font-mono font-bold text-lg bg-zinc-800 px-4 py-1 rounded border border-zinc-700'>
          {index.toString().padStart(2, '0')}
        </span>

        <button
          className='bg-amber-400 hover:bg-amber-300 text-black px-6 py-2 rounded-full font-bold transition-all active:scale-90'
          onClick={() => {
            setUserData([]) // Clear old data
            setIndex(index + 1)
          }}
        >
          Next Page
        </button>
      </footer>
    </div>
  )
}

export default App