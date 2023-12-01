import { TextField } from "@mui/material"
import { editExamName } from "./examsSlice"
import { useAppDispatch } from "../app/hooks"

interface ExamProps {
    name: string
  }

const ExamName:React.FC<ExamProps> = ({ name }: ExamProps) => {

    const dispatch = useAppDispatch()

    return (
        <TextField fullWidth 
        value={name} 
        label="Tentin nimi" 
        id="fullWidth"
        onChange={(e) => dispatch(editExamName(e.target.value))}
        />
        
    )
}

export default ExamName