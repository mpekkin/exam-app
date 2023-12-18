import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Question from "./Question"
import Option from "./Option"
import { addOption, deleteOption, editOption, editOptionIsCorrect } from "./examsSlice"
import { useAppDispatch } from "../app/hooks"
import { OptionItem } from './examsSlice';
import { fetchAddOption, fetchDeleteOption, fetchEditOption, fetchEditOptionIsCorrect } from '../API';

interface ExamProps {
    id: number 
    text: string
    options: OptionItem[]
  }

const QuestionCard:React.FC<ExamProps> = ({ id, text, options }: ExamProps) => {

    const dispatch = useAppDispatch()

    const handleDeleteOption = async (optionId: number) => {
        try {
            await fetchDeleteOption(optionId)
            const payload = {questionID: id, optionID: optionId}
            dispatch(deleteOption(payload))
        } catch (err) {
            console.error(err)
        }
    }
    
    const handleEditOption = async (optionId: number, newText: string) => {
        try {
            await fetchEditOption(optionId, newText)
            const payload = {questionID: id, optionID: optionId, newText: newText}
            dispatch(editOption(payload))
        } catch (err) {
            console.error(err)
        }
    }

     const handleAddOption = async (questionId: number) => {
        try {
            const payload: any = await fetchAddOption(questionId)
            dispatch(addOption(payload))
            
        } catch (err) {
            console.error(err)
        }
    }
    
    const handleChangeCorrect = async (correct: boolean, optionId: number) => {
        try {
          await fetchEditOptionIsCorrect(correct, optionId)
          const payload = {correct: correct, optionId: optionId, questionId: id}
          dispatch(editOptionIsCorrect(payload))
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
                    correct={option.is_correct} 
                    handleDelete={handleDeleteOption} 
                    handleEdit={handleEditOption}
                    handleCorrect={handleChangeCorrect}/>
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

