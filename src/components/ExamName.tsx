import { TextField } from "@mui/material"
import { editExamName } from "./examsSlice"
import { useAppDispatch } from "../app/hooks"
import { fetchEditExamName } from "../API"

interface ExamProps {
    name: string,
    id: number
  }

const ExamName:React.FC<ExamProps> = ({ name, id }: ExamProps) => {

    const dispatch = useAppDispatch()

    const handleEditExamName = async (examName: string, examId: number) => {
        try{
            await fetchEditExamName(examName, examId)
            dispatch(editExamName(examName))
        } catch (err) {
            console.log(err);
        }  
    }

    return (
        <TextField fullWidth 
        value={name} 
        label="Tentin nimi" 
        id="fullWidth"
        onChange={(e) => handleEditExamName(e.target.value, id)}
        />
        
    )
}

export default ExamName