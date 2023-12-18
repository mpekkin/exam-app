import { TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from "@mui/material/IconButton"
import { deleteQuestion, editQuestion } from './examsSlice';
import { useAppDispatch } from "../app/hooks"
import { fetchDeleteQuestion, fetchEditQuestion } from "../API";



interface ExamProps {
    value: string
    id: number
  }

const Question:React.FC<ExamProps> = ({ value, id }: ExamProps) => {

    const dispatch = useAppDispatch()

    const handleEditQuestion = async (questionId: number, newText: string) => {
        try {
            await fetchEditQuestion(questionId, newText)
            const payload = {questionID: questionId, newText: newText}
            dispatch(editQuestion(payload))
        } catch (err) {
            console.error(err)
        }
        
    }

    const handleDeleteQuestion = async (questionId: number) => {
        try {
            await fetchDeleteQuestion(questionId)
            dispatch(deleteQuestion(questionId))
        } catch (err) {
            console.error(err)
        }
        
    }    

    return (
        <div className="line">
            <TextField 
                fullWidth multiline
                value={value} 
                key={id} 
                label="Kysymys"
                onChange={(e) => handleEditQuestion(id, e.target.value)} 
                 />
            <IconButton 
                aria-label="delete"
                value={id}
                onClick={() => handleDeleteQuestion(id)}
                >
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default Question