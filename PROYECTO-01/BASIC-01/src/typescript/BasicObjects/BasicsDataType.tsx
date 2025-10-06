
export default function BasicsDataType() {
    const telefono: string = "002500125";
    const numbB: number = 1100;
    const name: string = 'Paulo';
    const lastName: string = 'Guamantario';
    const isActive: boolean = true;
    const projects: string[] = [
        "projects01",
        "projects02",
        "projects03",
        "projects04",
        "projects05"

    ]


    return (
        <>
        <div className="border border-black border-2 bg-gradient-to-l from-green-400 to-green-300 font-semibold lowercase tracking-widest text-center p-5 m-3 rounded rounded-3xl grid grid-cols-4 gap-2">
            <p className="border border-black">My name is: {name} {lastName}</p>
            <p className="border border-black">I have : {numbB} years old</p>
            <p className="border border-black">Active Status:{isActive ? "YES" : "NO"}</p>
            <div className="border border-dashed col-span-2 w-full"><ul>{projects.map((project, index) => (
                <li key={index}>{project}</li>
            ))} </ul></div>
            
            <p className="border border-black text-justify text-justify">
                telefono:{telefono}
                </p></div>



        </>

    )
}
