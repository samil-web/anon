
'use client'
import AuthForm from "../AuthForm"

export default function Login() {
  const handleSubmit = async(e,email,password)=>{
    e.preventDefault()

    console.log(email,password)
  }
  return (
    <div>
      <p>Login</p>
      <AuthForm handleSubmit={handleSubmit}/>
    </div>

  )
}
