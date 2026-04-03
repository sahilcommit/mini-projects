import { useState } from 'react'

const App = () => {
  // We use separate states for the inputs to keep the form logic simple and reactive
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  // This array holds all our notes; it's the "Source of Truth" for the UI
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    // Validation: Don't let the user add an empty note
    if (!title.trim() && !details.trim()) {
      alert("Please add a title or some details first!")
      return
    }

    // Creating a new note object and adding it to our list
    // Using the spread operator (...) is the modern way to update arrays in React
    setTask([...task, { title, details }])

    // Reset the form inputs so the user can type a new note immediately
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    // We filter out the note that matches the index we want to remove
    // This creates a new array without mutating the original state directly
    const filteredTasks = task.filter((_, i) => i !== idx)
    setTask(filteredTasks)
  }

  return (
    <div className='h-screen lg:flex bg-zinc-950 text-white selection:bg-yellow-500 selection:text-black'>

      {/* LEFT SIDE: The Input Area */}
      <form 
        onSubmit={submitHandler} 
        className='flex gap-4 lg:w-1/3 p-10 flex-col items-start border-r border-zinc-800'
      >
        <h1 className='text-4xl mb-4 font-bold tracking-tight'>Sticky Notes</h1>
        <p className='text-zinc-400 mb-4 text-sm'>Capture your thoughts before they disappear.</p>

        <input
          type="text"
          placeholder='Note Title'
          className='px-4 w-full bg-zinc-900 border-zinc-700 font-medium py-3 border outline-none rounded-lg focus:border-yellow-500 transition-colors'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className='px-4 w-full bg-zinc-900 border-zinc-700 font-medium h-40 py-3 border outline-none rounded-lg focus:border-yellow-500 transition-colors resize-none'
          placeholder='What’s on your mind?'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className='bg-yellow-500 hover:bg-yellow-400 active:scale-95 font-bold w-full text-black px-5 py-3 rounded-lg transition-all'>
          Save Note
        </button>
      </form>

      {/* RIGHT SIDE: The Display Area */}
      <div className='lg:w-2/3 p-10 bg-zinc-900/50'>
        <h1 className='text-2xl font-bold text-zinc-500 mb-8'>Your Collection</h1>
        
        <div className='flex flex-wrap items-start justify-start gap-6 h-[85%] overflow-y-auto no-scrollbar'>
          {/* If the list is empty, show a friendly placeholder */}
          {task.length === 0 ? (
            <div className='flex flex-col items-center justify-center w-full h-64 text-zinc-600'>
              <p className='text-lg italic'>Your board is empty. Write something on the left!</p>
            </div>
          ) : (
            task.map((elem, idx) => (
              <div 
                key={idx} 
                className="group flex justify-between flex-col relative h-60 w-52 bg-yellow-200 rounded-sm shadow-xl hover:shadow-yellow-500/10 text-black p-5 transition-transform hover:-rotate-1"
              >
                {/* Visual "Tape" piece at the top to give it that 'Sticky Note' feel */}
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/60 backdrop-blur-md rotate-2'></div>
                
                <div className='overflow-hidden'>
                  <h3 className='leading-tight text-xl font-bold mb-2 border-b border-black/10 pb-1'>{elem.title}</h3>
                  <p className='leading-tight text-sm font-medium text-zinc-800 line-clamp-5'>{elem.details}</p>
                </div>

                {/* The delete button only reveals itself when you hover over the note */}
                <button 
                  onClick={() => deleteNote(idx)} 
                  className='opacity-0 group-hover:opacity-100 transition-opacity w-full cursor-pointer hover:bg-red-600 bg-red-500 py-2 text-xs rounded font-bold text-white'
                >
                  Discard Note
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App