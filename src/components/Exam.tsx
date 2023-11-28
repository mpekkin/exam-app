import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import QuestionCard from './QuestionCard';
import ExamName from './ExamName';
import { Button } from '@mui/material';
import { selectExam } from "./examsSlice"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { QuestionItem } from './examsSlice';


interface ExamProps {
    name: string
    questions: QuestionItem
  }

const Exam:React.FC<ExamProps> = ({ name, questions }: ExamProps) => {
    return (
        <div className='card-container'>
        <div className='exam-name'><ExamName name={name} /></div>
        <QuestionCard questions={questions}/>
        <IconButton aria-label='add'><AddCircleIcon/></IconButton>
        <Button variant="contained">Tallenna</Button>
        </div>
    )
}

export default Exam