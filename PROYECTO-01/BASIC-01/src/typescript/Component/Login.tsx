import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

export default function Login() {
 const {user,token}=useContext(AuthContext);
    return (
        <>
        <div className="bg-black h-screen w-screen m-auto border border-white-dashed text-center text-5xl p-5 m-10 text-white"><h1>LOGIN</h1>
        <h2 className="border border-white p-5 text-white font-bold text-3xl tracking:widest" >user: {user}</h2>
        <h2 className="border border-white p-5 text-white font-bold text-3xl tracking:widest" >token:{token}</h2></div>
        
        </>
    

  )
}
