import { useState } from 'react'
import Chart from './chart'



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='flex w-full h-screen  flex-col justify-start   items-center'>
      <div className='flex flex-row w-2/5 gap-x-5 mt-12 justify-center'>
      <input 
      className="bg-white border focus:outline focus:outline-offset-2 focus:outline-pink-500 :bg-slate-700 border-gray-400 rounded-md  py-2 px-4 block w-2/6  leading-tight focus:outline-none hover:shadow-outline-blue focus:shadow-outline-blue transition duration-150 ease-in-out" 
      type="text" 
      placeholder="Enter number"
      />
      <button className='transition px-4 py-2 rounded-lg ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Enter</button>
      </div>  
      <div className='w-3/5 h-3/5 rounded-md bg-pink-400 mt-14 shadow-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
        <Chart />
      </div>
      </div>
    </>
  )
}

export default App
