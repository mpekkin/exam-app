import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import QuestionCard from './QuestionCard';
import ExamName from './ExamName';
import { Button } from '@mui/material';
import { selectExam, addQuestion, deleteExam } from "./examsSlice"
import { useAppSelector, useAppDispatch } from "../app/hooks"





const Exam = () => {

    const state: any = useAppSelector(selectExam)
    const dispatch = useAppDispatch()

    if(state.exams.length === 0) {
        return null
    }

    return (
        <div className='card-container'>
            <div className='exam-name'>
                <ExamName name={state.exams[state.selectedExam].name}/>
            </div>
        {state.exams[state.selectedExam].questions.map((obj: any) => 
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