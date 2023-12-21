import './App.css'
import Header from './components/Header'
import Exam from './components/Exam'
import { useAppSelector, useAppDispatch } from "./app/hooks"
import { applicationState, selectExam, updateExams } from './components/examsSlice'
import { useEffect, useState } from 'react'
import Login from './components/Login'
import StudentExam from './components/student/StudentExam'


function App() {

  const state: applicationState = useAppSelector(selectExam)
  const dispatch = useAppDispatch()

  //const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [student, setStudent] = useState(false)

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

  
  //if(!isLoggedIn) {
    //return (<Login setIsLoggedIn={setIsLoggedIn}/>)
  //}

  if(student) {
    return (
      <div id='root'>
        <Header setStudent={setStudent} student={student}/>
        <StudentExam />
      </div>
    )
  }

  return (
    <div id='root'>
      <Header setStudent={setStudent} student={student}/>
      <Exam />
      
    </div>
  )
}

export default App



