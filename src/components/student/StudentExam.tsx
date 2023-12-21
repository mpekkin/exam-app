import ExamName from '../ExamName';
import { Button } from '@mui/material';
import { selectExam, getSelectedExam, applicationState } from "../examsSlice"
import { useAppSelector } from "../../app/hooks"
import StudentQuestionCard from './StudentQuestionCard';
import { useState } from 'react';

const StudentExam = () => {
    const state: applicationState = useAppSelector(selectExam)

    const exam = getSelectedExam(state)
    const questions = exam?.questions
    
    const [showResults, setShowResults] = useState(false)
        
    const handleCheckAnswers = () => {


    }
    
    if (!exam) {
        return null
    }

    if(!showResults) {
        return (
            <div className='card-container'>
                
                <div className='exam-name'>
                    <ExamName 
                        name={exam.name}
                        id={exam.id}
                        />
                </div>
            {exam.questions.map((obj: any) => 
            <StudentQuestionCard
                key={obj.id}
                id={obj.id}
                text={obj.text}
                options={obj.options}
                showResults={showResults}
                setShowResults={setShowResults}
            />)}
            <Button 
                variant="contained"
                size='large'
                onClick={() => setShowResults(true)} 
                >
                Palauta vastaukset
            </Button>

            </div>
        )
    }
    return (
        <div className='card-container'>
            
            <div className='exam-name'>
                <ExamName 
                    name={exam.name}
                    id={exam.id}
                    />
            </div>
        {exam.questions.map((obj: any) => 
        <StudentQuestionCard
            key={obj.id}
            id={obj.id}
            text={obj.text}
            options={obj.options}
            showResults={showResults}
            setShowResults={setShowResults}
        />)}

        </div>
    )

}

export default StudentExam