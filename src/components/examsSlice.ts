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
    selectedExam: number 
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
selectedExam: 0

}
export const examsSlice: any = createSlice({
    name: "exam",
    initialState,
    reducers: {
        addOption: (state, action: PayloadAction<string>) => {
            const question = state.exams[state.selectedExam].questions.find((q) => q.id === action.payload)
            if (question) {
                const newOption = {id: uuid(), text:""}
                question.options.push(newOption)
            }
        },
        editOption: (state, action: PayloadAction<{questionID: string; optionID: string; newText: string}>) => {
            const { questionID, optionID, newText } = action.payload
            console.log("q:", questionID, "o:", optionID, "text:", newText);
            const question = state.exams[state.selectedExam].questions.find((q) => q.id === questionID)
            if (question) {
            const option = question.options.find((op) => op.id === optionID)
            if (option) {
            option.text = newText            
            }}
        },
        deleteOption: (state, action: PayloadAction<{questionID: string; optionID: string}>) => {
            const { questionID, optionID } = action.payload          
            const question = state.exams[state.selectedExam].questions.find((q) => q.id === questionID)
            if (question) {               
                question.options = question.options.filter(op => op.id !== optionID)
               
            }
        },
        addQuestion: (state) => {
            const newQuestionCard = {id: uuid(), text: "", options:[]}
            state.exams[state.selectedExam].questions.push(newQuestionCard)
        },
        editQuestion: (state, action: PayloadAction<{questionID: string; newText: string}>) => {
            const { questionID, newText } = action.payload
            console.log("q:", questionID, "text:", newText);
            const question = state.exams[state.selectedExam].questions.find((q) => q.id === questionID)
            if (question) {
            question.text = newText
            }
        },
        deleteQuestion: (state,action: PayloadAction<string>) => {
            const question = state.exams[state.selectedExam].questions.find((q) => q.id === action.payload)
            if (question) {
                state.exams[state.selectedExam].questions = state.exams[state.selectedExam].questions.filter((q) => q.id !== question.id)
            }
        },
        changeSelectedExam: (state, action: PayloadAction<string>) => {
            const selected = state.exams.map(exam => { 
                return exam.name}).indexOf(action.payload)
            state.selectedExam = selected
                
                
        },
        addNewExam: (state) => {
            const newExam: examState = {name: "", id: uuid(), questions: []}
            state.exams.push(newExam)
            state.selectedExam = state.exams.length - 1 
        },
        editExamName: (state, action) => {
            state.exams[state.selectedExam].name = action.payload
        },
        deleteExam: (state) => {
            const examId = state.exams[state.selectedExam].id
            if (confirm(`Haluatko varmasti poistaa tentin ${state.exams[state.selectedExam].name} ?`)) {
               state.exams = state.exams.filter((e) => e.id !== examId)
                state.selectedExam = 0
              } else {
                
              }
            
            
        }
    }
})

export const selectExam = (state: RootState) => state.exam
export const { addOption, editOption, deleteOption, addQuestion, editQuestion, deleteQuestion, changeSelectedExam, addNewExam, editExamName, deleteExam } = examsSlice.actions
export default examsSlice.reducer

