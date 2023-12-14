import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Question from "./Question"
import Option from "./Option"
import { addOption, deleteOption, editOption } from "./examsSlice"
import { useAppDispatch } from "../app/hooks"
import { OptionItem } from './examsSlice';


interface ExamProps {
    id: number 
    text: string
    options: OptionItem[]
  }

const QuestionCard:React.FC<ExamProps> = ({ id, text, options }: ExamProps) => {

    const dispatch = useAppDispatch()

    const handleDeleteOption = (optionId: number) => {
        const payload = {questionID: id, optionID: optionId}
        dispatch(deleteOption(payload))
    }
    
    const handleEditOption = (optionId: number, newText: string) => {
        const payload = {questionID: id, optionID: optionId, newText: newText}
        dispatch(editOption(payload))
    }

    const handleAddOption = async (questionId: number) => {
        dispatch(addOption(questionId))

        const data = JSON.stringify({ questionID: questionId, optionText: "", correct: false })
        console.log(data);
        
            try {
                const response = await fetch("http://localhost:3000/exams/options", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            })            
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
            } catch (err) {
            console.error(err)
        }
    }
       

    return (
        <div className='question-card'>
            <Question 
                key={id} 
                id={id} 
                value={text}/>

            {options.map((option: any) => 
                <Option 
                    key={option.id}
                    value={option.text} 
                    id={option.id} 
                    handleDelete={handleDeleteOption} 
                    handleEdit={handleEditOption}/>
            )}

            <IconButton 
                aria-label='add'
                value={id}
                onClick={() => handleAddOption(id)}
                >
                 <AddCircleIcon/>
            </IconButton>
        </div>
    )
    
}

export default QuestionCard

