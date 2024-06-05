import { useState } from 'react'
import './App.css'
import Search from './Component/Search'
import Search_result from './Component/Search_result'
import Task_1 from './Component/Task_1'
import Task_2 from './Component/Task_2'
import Task_3 from './Component/Task_3'
import Task_4 from './Component/Task_4'
import Task_5 from './Component/Task_5'
import Use_State from './Component/Use_State'

function App() {

   const[result , setresult]=useState([])
   
  return (
    <>
   {/* <Use_State/>
   <Task_1/>
   <Task_2/>
   <Task_3/>
   <Task_4/>
   <Task_5/> */}
   <div className='flex justify-center items-center flex-col pt-20 min-w-[400px] w-full'>
   <div className='w-[250]'>
   <Search setresult ={setresult}/>
   <Search_result result ={result}/>
   </div>
   </div>
   
  

   
    </>
  )
}

export default App
