import { TextField, Checkbox } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from "@mui/material/IconButton"

interface ExamProps {
    value: string
    id: number
    handleDelete: Function
    handleEdit: Function
    handleCorrect: Function
    correct: boolean
  }


const Option:React.FC<ExamProps> = ({ value, id, handleDelete, handleEdit, correct, handleCorrect }: ExamProps) => {



    return (

        <div className="line" >
        <Checkbox 
          value={correct}
          checked={correct? true : false}
          onClick={() => handleCorrect(!correct, id)} /> 
        <TextField fullWidth multiline
          value={value} 
          key={id}
          onChange={(e) => handleEdit(id, e.target.value)} 
          label="Vaihtoehto" 
          id="fullWidth"  />    
        <IconButton 
          aria-label="delete"
          value={id}
          onClick={() => handleDelete(id)}
          >
            <DeleteIcon />
        </IconButton>
        </div>
        
        )
            
}

export default Option