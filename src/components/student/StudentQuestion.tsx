import { TextField } from "@mui/material"




interface ExamProps {
    value: string
    id: number
  }

const StudentQuestion:React.FC<ExamProps> = ({ value, id }: ExamProps) => {

    //const dispatch = useAppDispatch()

  

    return (
        <div className="line">
            <TextField 
                fullWidth multiline
                value={value} 
                key={id} 
                label="Kysymys"

                 />

        </div>
    )
}

export default StudentQuestion