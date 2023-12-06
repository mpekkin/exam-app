import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Question from "./Question"
import Option from "./Option"
import { addOption, deleteOption, editOption } from "./examsSlice"
import { useAppDispatch } from "../app/hooks"
import { OptionItem } from './examsSlice';


interface ExamProps {
    id: string
    text: string
    options: OptionItem[]
  }

const QuestionCard:React.FC<ExamProps> = ({ id, text, options }: ExamProps) => {

    const dispatch = useAppDispatch()

    const handleDeleteOption = (optionId: string) => {
        const payload = {questionID: id, optionID: optionId}
        dispatch(deleteOption(payload))
    }
    
    const handleEditOption = (optionId: string, newText: string) => {
        const payload = {questionID: id, optionID: optionId, newText: newText}
        dispatch(editOption(payload))
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
                onClick={(e) => dispatch(addOption(e.currentTarget.value))}
                >
                 <AddCircleIcon/>
            </IconButton>
        </div>
    )
    
}

export default QuestionCard

