import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectExam, changeSelectedExam, addNewExam, examState, applicationState } from '../components/examsSlice'
import ExamMenuItem from "./ExamMenuItem"


const Header = () => {

  const state: applicationState = useAppSelector(selectExam)
  const dispatch = useAppDispatch()

  const handleSaveAllChanges = async () => {
    const newJSON = JSON.stringify(state.exams)
    try {
      const response = await fetch("http://localhost:3000/exams", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: newJSON,
      })
      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`)
      }
    } catch (err) {
      console.error(err)
    }
    
  }

    return (
        <div className='header'>
          <div className="header-content">
            <div className="select">
              <select 
                onChange={(event) => dispatch(changeSelectedExam(event.currentTarget.value))}>
                  <option value="">--Valitse tentti--</option>
                {state.exams.map((exam: examState, index: number) => 
                <ExamMenuItem examName={exam.name} id={exam.id} key={`exam-menu-item-${index}`}/>)}
              </select>
            
          </div>
          <button className="select" onClick={() => dispatch(addNewExam())}>Uusi tentti</button>
          
          <h1 className="select">Tentit</h1>
          <button className="select" onClick={() => handleSaveAllChanges()}>Tallenna kaikki muutokset</button>
          </div>
        </div>
      )
}
//
export default Header