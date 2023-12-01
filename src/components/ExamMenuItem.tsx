
interface ExamProps {
    examName: string
    id: string
  }
  
const ExamMenuItem:React.FC<ExamProps> = ({ examName }: ExamProps) => {

    return (

        <option
          value={examName}
          >
            {examName}
        </option>

    )

  }

  export default ExamMenuItem