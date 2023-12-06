import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import QuestionCard from './QuestionCard';
import ExamName from './ExamName';
import { Button } from '@mui/material';
import { selectExam, addQuestion, deleteExam, getSelectedExam, applicationState } from "./examsSlice"
import { useAppSelector, useAppDispatch } from "../app/hooks"





const Exam = () => {
    const state: applicationState = useAppSelector(selectExam)
    const dispatch = useAppDispatch()
    const exam = getSelectedExam(state)

    if (!exam) {
        return null
    }

    return (
        <div className='card-container'>
            <div className='exam-name'>
                <ExamName name={exam.name}/>
            </div>
        {exam.questions.map((obj: any) => 
        <QuestionCard
            key={obj.id}
            id={obj.id}
            text={obj.text}
            options={obj.options}
        />)}
        
        <IconButton 
            aria-label='add'
            onClick={() => dispatch(addQuestion())}>
            <AddCircleIcon/>
        </IconButton>
        <Button 
            variant="outlined" 
            color='error'
            onClick={() => dispatch(deleteExam())}
            >
            Poista tentti
        </Button>
        </div>
    )
}

export default Exam