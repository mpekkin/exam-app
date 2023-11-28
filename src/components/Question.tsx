import { TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from "@mui/material/IconButton"
import { QuestionItem } from './examsSlice';


interface ExamProps {
    questions: QuestionItem
  }

const Question:React.FC<ExamProps> = ({ questions }: ExamProps) => {
    return (
        <div className="line">
            <TextField fullWidth value={questions.text} label="Kysymys" id="fullWidth" multiline />
            <IconButton aria-label="delete"><DeleteIcon /></IconButton>
        </div>
    )
}

export default Question