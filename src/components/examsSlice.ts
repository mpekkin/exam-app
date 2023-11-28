import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

export interface QuestionItem {
    id: number
    text: string
    options: string[]
}

export interface examState {
    name: string,
    id: number,
    questions: QuestionItem[]
    
}

export interface applicationState {
    exams: examState[],
    selectedExam: number
}


const initialState: applicationState ={ exams:[{
    name: "Esimerkkitentti_1",
    id: 1,
    questions: [
        {
            id: 1,
            text: "Onko maapallo pyöreä?",
            options: ["Kyllä", "Ei"]
        },
        {
            id: 2,
            text: "Onko kettu nisäkäs?",
            options: ["Kyllä", "Ei"]
        }
    ]

},
{
    name: "Esimerkkitentti_2",
    id: 2,
    questions: [
        {
            id: 1,
            text: "Onko maapallo pyöreä?",
            options: ["Kyllä", "Ei"]
        },
        {
            id: 2,
            text: "Onko kettu nisäkäs?",
            options: ["Kyllä", "Ei"]
        }
    ],

}],
selectedExam: 0

}
export const examsSlice: any = createSlice({
    name: "exam",
    initialState,
    reducers: {
        addQuestion: (state) => {
            
        }
    }
})

export const selectExam = (state: RootState) => state.exam
export default examsSlice.reducer

