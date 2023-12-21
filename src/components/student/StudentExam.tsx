import ExamName from '../ExamName';
import { Button } from '@mui/material';
import { selectExam, getSelectedExam, applicationState, QuestionItem, answerState, examState, OptionItem, resetAnswer } from "../examsSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import StudentQuestionCard from './StudentQuestionCard';
import { useState } from 'react';

const StudentExam = () => {
    const state: applicationState = useAppSelector(selectExam)

    const exam = getSelectedExam(state)
    const answerArray = state.examAnswer
           
    const [showResults, setShowResults] = useState(false)
    const [points, setPoints] = useState(0)
    const [totalPoints, setTotalPoints] = useState(0)

    const dispatch = useAppDispatch()
  
    
    const handleCheckAnswers = (answerArray: answerState[]) => {
        
        let pointCounter = 0
        const exam = getSelectedExam(state)

        for(let answer of answerArray) {           
            const question = exam?.questions.find((q) => q.id === answer.questionId)
            const option = question?.options.find((op) => op.id == answer.optionId)
            if(option?.is_correct === true && answer.answer === true) {
                pointCounter++
            }
        }

        setShowResults(true)
        setPoints(pointCounter)
        getTotalPoints()
        dispatch(resetAnswer())
    }
   
    const getTotalPoints = () => {
        let total = 0
        const exam = getSelectedExam(state)
        if (exam) {
            for(let question of exam?.questions) {
                const correctAnswers = question.options.filter((op) => op.is_correct === true).length
                total += correctAnswers
            }
        }
        setTotalPoints(total)
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
                studentAnswers={state.examAnswer}
            />)}
            <Button 
                variant="contained"
                size='large'
                onClick={() => handleCheckAnswers(answerArray)}
                >
                Palauta vastaukset
            </Button>

            </div>
        )
    }
    return (
        <div className='card-container'>
            <h1>Sait {points} / {totalPoints} pistettä</h1>
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
            studentAnswers={state.examAnswer}
        />)}

        </div>
    )

}

export default StudentExam