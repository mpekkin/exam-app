import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectExam, changeSelectedExam, addNewExam } from '../components/examsSlice'
import ExamMenuItem from "./ExamMenuItem"
import { uuid } from "../components/examsSlice"


const Header = () => {

  const state: any = useAppSelector(selectExam)
  const dispatch = useAppDispatch()



    return (
        <div className='header'>
          <div className="header-content">
            <div className="select">
              <select 
                onChange={(event) => dispatch(changeSelectedExam(event.currentTarget.value))}>
                  <option value="">--Valitse tentti--</option>
                {state.exams.map((exam: any) => 
                <ExamMenuItem examName={exam.name} id={uuid()} key={uuid()}/>)}
              </select>
            
          </div>
          <button className="select" onClick={() => dispatch(addNewExam())}>Uusi tentti</button>
          
          <h1 className="select">Tentit</h1>
          </div>
        </div>
      )
}
//
export default Header