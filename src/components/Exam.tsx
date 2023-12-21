import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import QuestionCard from './QuestionCard';
import ExamName from './ExamName';
import { Button } from '@mui/material';
import { selectExam, addQuestion, deleteExam, getSelectedExam, applicationState } from "./examsSlice"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { fetchAddQuestion, fetchDeleteExam } from '../API';


const Exam = () => {
    const state: applicationState = useAppSelector(selectExam)

    const dispatch = useAppDispatch()
    const exam = getSelectedExam(state)
    

    const handleAddQuestion = async (examId: number) => {
        try {
            const newId: number = await fetchAddQuestion(examId)
            dispatch(addQuestion(newId)) 
            } catch (err) {
                console.error(err)
            }
    }

    const handleDeleteExam =  async (examId: number) => {
        try {
            if(exam && confirm(`Haluatko varmasti poistaa tentin ${exam.name}?`)) {
                dispatch(deleteExam(examId))
                await fetchDeleteExam(examId)
            }
        } catch (err){
            console.error(err)
        }
    }
     
    
    if (!exam) {
        return null
    }

    return (
        <div className='card-container'>
            <div className='exam-name'>
                <ExamName 
                    name={exam.name}
                    id={exam.id}
                    />
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
            onClick={() => handleAddQuestion(exam.id)}>
            <AddCircleIcon/>
        </IconButton>
        <Button 
            variant="outlined" 
            color='error'
            onClick={() => handleDeleteExam(exam.id)}
            >
            Poista tentti
        </Button>
        </div>
    )
}

export default Exam