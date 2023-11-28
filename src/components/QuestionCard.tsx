import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Question from "./Question"
import Option from "./Option"
import { selectExam } from "./examsSlice"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { QuestionItem } from './examsSlice';


interface ExamProps {
    questions: QuestionItem
  }

const QuestionCard:React.FC<ExamProps> = ({ questions }: ExamProps) => {


    return (
        <div className='question-card'>
            <Question questions={questions}/>       
            <Option />      
            <IconButton aria-label='add'><AddCircleIcon/></IconButton>
        </div>
    )
    
}

export default QuestionCard