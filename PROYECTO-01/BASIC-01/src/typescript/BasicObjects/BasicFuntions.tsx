import { useState } from "react";

export default function BasicFuntions() {

    const numA: number = 400
    const numB: number = 10
    const myName: string = 'PAULO';


    const sumar = (num1: number, num2: number) => num1 + num2;
    const restar = (num1: number, num2: number) => num1 - num2;
    const multiplicar = (num1: number, num2: number) => num1 * num2;
    const dividir = (num1: number, num2: number) => num1 / num2;


    const [msj, setMsj] = useState('');
    //Funciones sin parametros y sin retorno
    const mostrarMensaje = () => {
        setMsj("Hola, esta es una funcion sin parametros y sin retorno")
    }
    // Funciones con parametro pero sin retorno
    const saludar = (name: string) => {
        // no hay un retorno pero si una actualiazcion
        // de la variable msj
        setMsj(`Hola${name}`)
        // Funcion con parametros y con retorno 
    }
    const addition = (a: number, b: number) => {
        return a + b;
    }

    // Funcion para cambiar el estado de una variable
    const initialValue: number = 0;
    const [count, setCount] = useState(initialValue);


    const increaseBy = (value: number) => {
        setCount(Math.max(count + value, 0));
    }

    // Funcion callback
    const ejecutarOperacion=(operacion:(a:number,b:number)=>number, x:number,y:number)=>{
        const resultado =operacion(x,y);
        setMsj(`El resultado de la operacion es: ${resultado}`)
    }


    return (
        <>  <div className=" text-3xl border border-black p-10 h-screen w-screen text-center">
            <h1>Basic Funtions</h1>
            <p>La suma de {numA} y {numB} es igual:{sumar(numA, numB)}</p>
            <p>La resta de {numA} y {numB} es igual:{restar(numA, numB)}</p>
            <p>El producto de {numA} y {numB} es igual:{multiplicar(numA, numB)}</p>
            <p>La division de {numA} y {numB} es igual:{dividir(numA, numB)}
                <p><span> 5+3: {addition(5, 3)}<br /></span>
                    <span>10+23:{addition(10, 23)}</span></p>






            </p>



            <div className="rounded rounded-3xl bg-green-700 border border-black p-10 text-white">
                <p> DIFERENTES TIPOS DE FUNCIONES</p>
                <button className="text-black m-10" onClick={(mostrarMensaje)}> Mostrar MSj</button>

                <button onClick={() => saludar(myName)} className="text-black">Saludar</button>


                <button className="text-black m-10" onClick={() => increaseBy(10)}>+10</button>


                <button className="text-black" onClick={() => increaseBy(-10)}>- 10</button>
                <button className="text-black font-bold mx-10 hover:bg-red-100" onClick={()=>ejecutarOperacion(sumar,12,5)}> EjecutarOperacion</button>
            
            </div>

            <div>
                <p>

                    <h2>mensaje:{msj}</h2>
                    <h2>contador:{count}</h2>
                </p>
            </div>



        </div>  </>

    )
}
