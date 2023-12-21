import { TextField, Checkbox } from "@mui/material"
import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { addAnswer, answerState } from "../examsSlice"


interface ExamProps {
    value: string
    id: number
    questionId: number
    correct: boolean
    showResults: boolean
    studentAnswers: answerState[]
  }



const StudentOption:React.FC<ExamProps> = ({ value, id, correct, showResults, questionId, studentAnswers }: ExamProps) => {

const [checked, setChecked] = useState(false)
const dispatch = useAppDispatch()


const handleCheckbox = (checked: boolean) => {
    let newChecked = checked==false? true : false
    setChecked(newChecked)     
    const payload = {questionID: questionId, optionID: id, answer: newChecked}
    dispatch(addAnswer(payload))  
}


 if(!showResults) {
    return (     
        <div className="line" >
            <Checkbox 
                value= {checked}
                onClick={()=> handleCheckbox(checked)}
            /> 
            <TextField fullWidth multiline
                value={value} 
                key={id}
                label="Vaihtoehto" 
            />    
        </div>
        
    )
} return (
    <div>
        <div className="line" >
            <Checkbox 
                checked= {correct ? true : false}
                color="success"
            />
            <Checkbox
            //Problem: These answers disappear during re-render
                checked= {checked ? true : false}
            />        

            <TextField fullWidth multiline 
                value={value} 
                key={id}
                label="Vaihtoehto"
            />    
        </div>
    </div>
)
            
}

export default StudentOption