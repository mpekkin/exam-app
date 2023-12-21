import { useState } from "react"
import { fetchAddExam } from "../API"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectExam, changeSelectedExam, addNewExam, examState, applicationState } from '../components/examsSlice'
import ExamMenuItem from "./ExamMenuItem"

interface ExamProps {
  setStudent: React.Dispatch<React.SetStateAction<boolean>>,
  student: boolean
}

const Header: React.FC<ExamProps> = ({setStudent, student}: ExamProps) => {

  const state: applicationState = useAppSelector(selectExam)
  const dispatch = useAppDispatch()

/*   interface LoginDetails {
    username: string,
    password: string
  } */

  //const loginData: LoginDetails = JSON.parse(localStorage.getItem("login_details") || "")

  

  const handleAddNewExam = async () => {
    try {
      const payload: any = await fetchAddExam()
        if(payload) {
          dispatch(addNewExam(payload)) 
        }
      } catch (err) {
          console.error(err)
      }
}
  
  const handleStudent = () => {
    setStudent(!student)
  }


    return (
        <div className='header'>
          <div className="header-content">
            <div className="select">
              <select 
                onChange ={(event) => dispatch(changeSelectedExam(event.currentTarget.value))}>
                  <option value="">--Valitse tentti--</option>
                {state.exams.map((exam: examState, index: number) => 
                <ExamMenuItem examName={exam.name} id={exam.id} key={`exam-menu-item-${index}`}/>)}
              </select>
            
          </div>
          <button className="select" onClick={() => handleAddNewExam()}>Uusi tentti</button>
          <h1 className="select">Tentit</h1>
          <button className="select" onClick={() => handleStudent()}>{student ? "Opettajan näkymä" : "Tee tentti"}</button>
          </div>
        </div>
      )
}
//
export default Header