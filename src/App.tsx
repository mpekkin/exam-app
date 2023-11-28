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
      <Header/>
      <Exam 
        name={state.exams[state.selectedExam].name}
        questions={state.exams[state.selectedExam].questions}
        />
      
    </div>
  )
}

export default App



/*       <div className='card-container'>
        <div className='exam-name'><ExamName /></div>
        <QuestionCard/>
        <IconButton aria-label='add'><AddCircleIcon/></IconButton>
        <Button variant="contained">Tallenna</Button>
        </div> */