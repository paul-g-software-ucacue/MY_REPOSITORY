
export default function Objects() {
    interface Address {
        country: string | null
        city: string | null
        House: string | null
    }

    interface Person extends Address {
        name: string | null
        lastName?: string | null
        telefono: string | null
        isActive: boolean
        saludar: () => string
    }

    const person: Person = {
        name: 'Paulo Andres',
        lastName: 'Guamantario',
        telefono: '0123456899',
        isActive: true,
        country: 'Ecuador',
        city: 'Cuenca',
        House: '102',
        saludar: () => {
            return `Hello, There`
        }
    }

  interface Student extends Person{
    course:string
  }  

  const student:Student={
    course:'Septimo B',
    ...person

  }


  const student2:Student={
    course:'8vo Software',
    name: 'Karen Nicole',
    lastName: 'Armijos',
    telefono: '00000000000',
    isActive:false,
    country: 'Ecuador',
    city: 'Quito',
    House: '201',
    saludar: () => {
        return `Hello, There`
    }
  }


    return (
        <>
            <div className="bg-green-500 text-white font-bold text-3xl ">
                <h1> OBJECTS LITERAL</h1>
                <p>
                    {JSON.stringify(person, null, 2)}

                </p>

               
            </div>
            <div className="bg-red-800 m-10 text-white text-center text-3xl rounded rounded-3xl p-10">
            <p>
                    {JSON.stringify(student, null,2)}
                </p>
            </div>

            <div className="bg-blue-800 m-10 text-white text-center text-3xl rounded rounded-3xl p-10">
            <p>
                    {JSON.stringify(student2, null,2)}
                </p>
            </div>

        </>

    )
}
