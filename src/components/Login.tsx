import {useState} from "react"

interface ExamProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<ExamProps> = ({setIsLoggedIn}: ExamProps) => {

const [username, setUsername] = useState([])
const [password, setPassword] = useState([])


const handleSubmit = () => {
    setIsLoggedIn(true)
    const loginData = {username: username, password: password}
    localStorage.setItem("login_details", JSON.stringify(loginData))
}



    return(
    <div className="login-wrapper">
        <h1>Kirjaudu sisään</h1>
        <form onSubmit={handleSubmit}>
        <label>
          <p>Käyttäjätunnus</p>
          <input type="text" value={username} onChange={(e: any) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Salasana</p>
          <input value={password} type="password" onChange={(e: any) => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    )
  }

  export default Login