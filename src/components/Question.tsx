import { TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from "@mui/material/IconButton"
import { deleteQuestion, editQuestion } from './examsSlice';
import { useAppDispatch } from "../app/hooks"



interface ExamProps {
    value: string
    id: number
  }

const Question:React.FC<ExamProps> = ({ value, id }: ExamProps) => {

    const dispatch = useAppDispatch()

    return (
        <div className="line">
            <TextField 
                fullWidth multiline
                value={value} 
                key={id} 
                label="Kysymys"
                onChange={(e) => dispatch(editQuestion({questionID: id, newText: e.target.value}))} 
                 />
            <IconButton 
                aria-label="delete"
                value={id}
                onClick={(e) => dispatch(deleteQuestion(e.currentTarget.value))}
                >
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default Question