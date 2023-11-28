import { TextField, Checkbox } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from "@mui/material/IconButton"




const Option = () => {

    return (
        <div className="line" >
        <Checkbox /> 
        <TextField fullWidth label="Vaihtoehto" id="fullWidth" multiline />
        <IconButton aria-label="delete"><DeleteIcon /></IconButton>
        </div>
        )
            
}

export default Option