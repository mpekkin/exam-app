import { TextField, Checkbox } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from "@mui/material/IconButton"
import { useAppDispatch } from "../app/hooks"
import { editOption } from "./examsSlice"

interface ExamProps {
    value: string
    id: number
    handleDelete: Function
    handleEdit: Function
  }


const Option:React.FC<ExamProps> = ({ value, id, handleDelete, handleEdit }: ExamProps) => {

    return (

        <div className="line" >
        <Checkbox /> 
        <TextField fullWidth multiline
          value={value} 
          key={id}
          onChange={(e) => handleEdit(id, e.target.value)} 
          label="Vaihtoehto" 
          id="fullWidth"  />    
        <IconButton 
          aria-label="delete"
          value={id}
          onClick={(e) => handleDelete(e.currentTarget.value)}
          >
            <DeleteIcon />
        </IconButton>
        </div>
        
        )
            
}

export default Option