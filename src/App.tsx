import './App.css'
import Header from './components/Header'
import Exam from './components/Exam'
import { useAppSelector, useAppDispatch } from "./app/hooks"
import { selectExam } from './components/examsSlice'


function App() {

  const state: any = useAppSelector(selectExam)
  const dispatch = useAppDispatch()

  

  return (
    <div id='root'>
      <Header />
      <Exam />
      
    </div>
  )
}

export default App



