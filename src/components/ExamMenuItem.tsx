
interface ExamProps {
    examName: string
    id: number
  }
  
const ExamMenuItem:React.FC<ExamProps> = ({ examName, id }: ExamProps) => {

    return (

        <option
          value={id}
          >
            {examName}
        </option>

    )

  }

  export default ExamMenuItem