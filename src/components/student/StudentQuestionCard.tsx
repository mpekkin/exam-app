import { OptionItem, answerState } from '../examsSlice';
import StudentQuestion from './StudentQuestion';
import StudentOption from './StudentOption';

interface ExamProps {
    id: number 
    text: string
    options: OptionItem[]
    showResults: boolean
    studentAnswers: answerState[]
  }

  const StudentQuestionCard:React.FC<ExamProps> = ({ id, text, options, showResults, studentAnswers }: ExamProps) => {
 

    
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
                    questionId={id}
                    correct={option.is_correct}
                    showResults={showResults}
                    studentAnswers={studentAnswers}
                />
            )}


        </div>
    )
    
}

export default StudentQuestionCard

