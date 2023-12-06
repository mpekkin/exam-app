import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
import { v4 as uuidv4 } from 'uuid'

export function uuid(): string {
    return uuidv4()
}


export interface QuestionItem {
    id: string
    text: string
    options: OptionItem[]
}

export interface OptionItem {
    id: string
    text: string
}

export interface examState {
    name: string,
    id: string,
    questions: QuestionItem[]
    
}

export interface applicationState {
    exams: examState[],
    selectedExam: string 
}


const initialState: applicationState = 

{ exams:[{
    name: "Maantieto",
    id: uuid(),
    questions: [
        {
            id: uuid(),
            text: "Onko maapallo pyöreä?",
            options: [
                {
                    id: uuid(),
                    text: "Kyllä"
                },
                {
                    id: uuid(),
                    text: "100"
                }
            ]
        },
        {
            id: uuid(),
            text: "Mikä on Suomen pääkaupunki?",
            options: [
                {
                    id: uuid(),
                    text: "Tampere"
                },
                {
                    id: uuid(),
                    text: "Helsinki"
                }
            ]
        }
    ]

},
{
    name: "Biologia",
    id: uuid(),
    questions: [
        {
            id: uuid(),
            text: "Onko kettu nisäkäs?",
            options: [
                {
                    id: uuid(),
                    text: "Kyllä"
                },
                {
                    id: uuid(),
                    text: "Ehkä"
                }
            ]
        },
        {
            id: uuid(),
            text: "Mikä hauki on?",
            options: [
                {
                    id: uuid(),
                    text: "Kala"
                },
                {
                    id: uuid(),
                    text: "Ei kala"
                }
            ]
        }
    ],

}],
selectedExam: ""

}

export const getSelectedExam = (state: applicationState): examState | undefined => 
    state.exams.find((exam) => exam.id === state.selectedExam)


export const examsSlice = createSlice({
    name: "exam",
    initialState,
    reducers: {

        updateExams: (state, action) => {
            state.exams = action.payload
            state.selectedExam = ""
        },
        addOption: (state, action: PayloadAction<string>) => {
            const question = getSelectedExam(state)?.questions
                .find((q) => q.id === action.payload)

            if (question) {
                const newOption = {id: uuid(), text:""}
                question.options.push(newOption)
            }
        },
        editOption: (state, action: PayloadAction<{questionID: string; optionID: string; newText: string}>) => {
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
        deleteOption: (state, action: PayloadAction<{questionID: string; optionID: string}>) => {
            const { questionID, optionID } = action.payload

            const question = getSelectedExam(state)?.questions
                .find((q) => q.id === questionID)

            if (question) {               
                question.options = question.options.filter(op => op.id !== optionID)
            }
        },
        addQuestion: (state) => {
            const newQuestionCard = {id: uuid(), text: "", options:[]}
            getSelectedExam(state)?.questions.push(newQuestionCard)
        },
        editQuestion: (state, action: PayloadAction<{questionID: string; newText: string}>) => {
            const { questionID, newText } = action.payload
           
            const question = getSelectedExam(state)?.questions.find((q) => q.id === questionID)

            if (question) {
            question.text = newText
            }
        },
        deleteQuestion: (state,action: PayloadAction<string>) => {
            const exam = getSelectedExam(state)
            const question = exam?.questions.find((q) => q.id === action.payload)
            if (question && exam) {
                exam.questions = exam.questions.filter((q) => q.id !== question.id)
            }
        },
        changeSelectedExam: (state, action: PayloadAction<string>) => {
            state.selectedExam = action.payload     
        },
        addNewExam: (state) => {
            const newExamId = uuid()
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
        deleteExam: (state) => {
            const exam = getSelectedExam(state)
            if (exam && confirm(`Haluatko varmasti poistaa tentin ${exam.name} ?`)) {
                state.exams = state.exams.filter((e) => e.id !== exam.id)
                state.selectedExam = ""
            } 
        }
    }
})

export const selectExam = (state: RootState) => state.exam
export const { addOption, editOption, deleteOption, addQuestion, editQuestion, deleteQuestion, changeSelectedExam, addNewExam, editExamName, deleteExam, updateExams } = examsSlice.actions
export default examsSlice.reducer

