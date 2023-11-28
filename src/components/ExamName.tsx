import { TextField } from "@mui/material"

interface ExamProps {
    name: string
  }

const ExamName:React.FC<ExamProps> = ({ name }: ExamProps) => {
    return (
        <TextField fullWidth value={name} label="Tentin nimi" id="fullWidth" />
        
    )
}

export default ExamName