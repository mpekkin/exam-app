import './App.css'
import Header from './components/Header'
import Exam from './components/Exam'
import { useAppSelector, useAppDispatch } from "./app/hooks"
import { selectExam, updateExams } from './components/examsSlice'
import { useEffect, useState } from 'react'


function App() {

  const state: any = useAppSelector(selectExam)
  const dispatch = useAppDispatch()



  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/exams");
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`)
        }
       let actualData = await response.json()
       dispatch(updateExams(actualData)) 
      } catch(err) {
        console.log(err); 
      }
    }
    getData()
  }, [])

  

  return (
    <div id='root'>
      <Header />
      <Exam />
      
    </div>
  )
}

export default App



