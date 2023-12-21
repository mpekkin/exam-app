import { OptionItem } from '../examsSlice';
import StudentQuestion from './StudentQuestion';
import StudentOption from './StudentOption';

interface ExamProps {
    id: number 
    text: string
    options: OptionItem[]
    showResults: boolean
    setShowResults: React.Dispatch<React.SetStateAction<boolean>>
  }

  const StudentQuestionCard:React.FC<ExamProps> = ({ id, text, options, showResults, setShowResults }: ExamProps) => {
 

    return (
        <div className='question-card'>
            <StudentQuestion 
                key={id} 
                id={id} 
                value={text}/>

            {options.map((option: any) => 
                <StudentOption 
                    key={option.id}
                    value={option.text} 
                    id={option.id}
                    correct={option.is_correct}
                    showResults={showResults}
                    setShowResults={setShowResults}
                />
            )}


        </div>
    )
    
}

export default StudentQuestionCard

