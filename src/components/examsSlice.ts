import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
import { v4 as uuidv4 } from 'uuid'

export function uuid(): string {
    return uuidv4()
}


export interface QuestionItem {
    id: number  
    text: string
    options: OptionItem[]
}

export interface OptionItem {
    id: number 
    text: string
    is_correct: boolean
}

export interface examState {
    name: string,
    id: number,
    questions: QuestionItem[]
    
}

export interface applicationState {
    exams: examState[],
    selectedExam: number | null 
}


const initialState: applicationState = 

{ exams:[],
selectedExam: null

}

export const getSelectedExam = (state: applicationState): examState | undefined => 
    state.exams.find((exam) => exam.id === state.selectedExam)   


export const examsSlice = createSlice({
    name: "exam",
    initialState,
    reducers: {

        updateExams: (state, action) => {
            state.exams = action.payload
            state.selectedExam = null
        },
        addOption: (state, action: PayloadAction<{questionID: number; newOptionID: number}>) => {
            const { questionID, newOptionID } = action.payload
            const question = getSelectedExam(state)?.questions
                .find((q) => q.id === questionID)

            if (question) {
                const newOption: OptionItem = {id: newOptionID, text:"", is_correct: false}
                question.options.push(newOption)              
            }
        },
        editOption: (state, action: PayloadAction<{questionID: number; optionID: number; newText: string}>) => {
            const { questionID, optionID, newText } = action.payload
            
            const question = getSelectedExam(state)?.questions
                .find((q) => q.id === questionID)

                if (question) {
                const option = question.options.find((op) => op.id === optionID)

                    if (option) {
                    option.text = newText            
                    }
                }
        },
        editOptionIsCorrect: (state, action: PayloadAction<{correct: boolean; optionId: number; questionId: number}>) => {
            const { correct, optionId, questionId } = action.payload
            
            const question = getSelectedExam(state)?.questions
                .find((q) => q.id === questionId)
            
                if (question) {
                    const option = question.options.find((op) => op.id === optionId)
    
                    if (option) {
                        option.is_correct = correct            
                    }
                }
        },
        deleteOption: (state, action: PayloadAction<{questionID: number; optionID: number}>) => {
            const { questionID, optionID } = action.payload
            
            const question = getSelectedExam(state)?.questions
                .find((q) => q.id === questionID)

            if (question) {               
                question.options = question.options.filter(op => op.id !== optionID)  
            }
        },
        addQuestion: (state, action: PayloadAction<number>) => {
            const newQuestionCard: QuestionItem = {id: action.payload, text: "", options:[]}
            getSelectedExam(state)?.questions.push(newQuestionCard)
        },
        editQuestion: (state, action: PayloadAction<{questionID: number; newText: string}>) => {
            const { questionID, newText } = action.payload
           
            const question = getSelectedExam(state)?.questions.find((q) => q.id === questionID)

            if (question) {
            question.text = newText
            }
        },
        deleteQuestion: (state,action: PayloadAction<number>) => {          
            const exam = getSelectedExam(state)
            const question = exam?.questions.find((q) => q.id === action.payload)
            if (question && exam) {
                exam.questions = exam.questions.filter((q) => q.id !== question.id)
            }
        },
        changeSelectedExam: (state, action: PayloadAction<string>) => {
            state.selectedExam = Number(action.payload) 
        },
        addNewExam: (state, action: PayloadAction<number>) => {
            const newExamId = action.payload
            const newExam: examState = {name: "", id: newExamId, questions: []}
            state.exams.push(newExam)
            state.selectedExam = newExamId
        },
        editExamName: (state, action) => {
            const exam = getSelectedExam(state)

            if (exam) {
                exam.name = action.payload
            }
            
        },
        deleteExam: (state, action: PayloadAction<number>) => {
            console.log(action.payload);
            
            state.exams = state.exams.filter((e) => e.id !== action.payload)
            state.selectedExam = null
        }
    }
})

export const selectExam = (state: RootState) => state.exam
export const { addOption, editOption, deleteOption, addQuestion, editQuestion, deleteQuestion, changeSelectedExam, addNewExam, editExamName, deleteExam, updateExams, editOptionIsCorrect } = examsSlice.actions
export default examsSlice.reducer

