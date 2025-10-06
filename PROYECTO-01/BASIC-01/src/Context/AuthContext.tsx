import { createContext, useState, type PropsWithChildren } from "react"

interface AuthState{
     user:string|null,
     token:string|null
}

export const AuthContext=createContext<AuthState>({
    user:null,
    token:null
})

export const AuthProvider=({children}:PropsWithChildren)=>{
    const [user]=useState<string|null>('Paulo')
    const [token]=useState<string|null>('1343')

    return(
        <AuthContext.Provider value={{user,token}}>
            {children}
        </AuthContext.Provider>
    )

}