
 export const fetchAddOption = async (questionId: number) => {
    const data = JSON.stringify({ questionID: questionId, optionText: "", correct: false })
        try {
            const response = await fetch("http://localhost:3000/question/`${questionId}`/options", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })            
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
        const idObject = await response.json()
        const newOptionId: number = idObject.id
        
        const payload = {questionID: questionId, newOptionID: newOptionId}
        return payload

        } catch (err) {
        console.error(err)
    }
} 

 export const fetchAddQuestion = async (examId: number) => {
    const data = JSON.stringify({ examId: examId, questionText: "" })
        try {
            const response = await fetch("http://localhost:3000/exam/`${examId}`/questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })            
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
       
        const idObject = await response.json()
        const newQuestionId = idObject.id
        return newQuestionId
        
        } catch (err) {
        console.error(err)
    }
}

export const fetchEditOption = async (optionId: number, newText: string) => {
    const data = JSON.stringify({ optionId: optionId, newText: newText })
        try {
            const response = await fetch("http://localhost:3000/option/`${optionId}`", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })            
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
        } catch (err) {
        console.error(err)
    }
}

export const fetchEditOptionIsCorrect = async (correct: boolean, optionId: number) => {
    const data = JSON.stringify({ is_correct: correct, optionId: optionId })
        try {
            const response = await fetch("http://localhost:3000/option/`${optionId}`/correct", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })            
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
        } catch (err) {
        console.error(err)
    }
}


export const fetchEditQuestion = async (questionId: number, newText: string) => {
    const data = JSON.stringify({ questionId: questionId, newText: newText })
        try {
            const response = await fetch("http://localhost:3000/question/`${questionId}`", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })            
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
        } catch (err) {
        console.error(err)
    }
}

export const fetchDeleteOption = async (optionId: number) => {
    const data = JSON.stringify({ optionId: optionId })
        try {
            const response = await fetch("http://localhost:3000/option/`${optionId}`", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })            
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
        } catch (err) {
        console.error(err)
    }
}

export const fetchDeleteQuestion = async (questionId: number) => {
    const data = JSON.stringify({ questionId: questionId })
        try {
            const response = await fetch("http://localhost:3000/question/`${questionId}`", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })            
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
        } catch (err) {
        console.error(err)
    }
}

export const fetchAddExam = async () => {
    const data = JSON.stringify({ exam_name: "" })
        try {
            const response = await fetch("http://localhost:3000/exam", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })            
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
       
        const idObject = await response.json()
        const newExamId = idObject.id
        return newExamId
        } catch (err) {
        console.error(err)
    }
}

export const fetchEditExamName = async (examName: string, examId: number) => {
    const data = JSON.stringify({ examName: examName, examId: examId })
        try {
            const response = await fetch("http://localhost:3000/exam/`${examId}`", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })            
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
        } catch (err) {
        console.error(err)
    }
}

export const fetchDeleteExam = async (examId: number) => {
    const data = JSON.stringify({ examId: examId })
        try {
            const response = await fetch("http://localhost:3000/exam/`${examId}`", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })            
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }
        } catch (err) {
        console.error(err)
    }
}