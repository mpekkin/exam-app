
interface ExamProps {
    examName: string
    id: string
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