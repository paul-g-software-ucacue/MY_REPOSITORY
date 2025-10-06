// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { AuthProvider } from './Context/AuthContext'
import Objects from './typescript/BasicObjects/Objects'
// import Login from './typescript/Component/Login'

function App() {


  return (
    <>
    {/* //   <div className='bg-gray-300 h-800'>
    //     <h1 className='bg-red-800 p-5 font-bold tracking-widest rounded rounded-3xl' >REPASO Y REFUERZO</h1>
    //     <BasicsDataType></BasicsDataType>

    //   </div> */}
    {/* <BasicFuntions></BasicFuntions> */}

    <AuthProvider>
      {/* <Login/> */}
      <Objects></Objects>

    </AuthProvider>

  
</>
)}export default App
