type ButtonProps={
    name: string
}

export default function Button({name}: ButtonProps){
    return(
        <button className="bg-orange-800 w-50 rounded-xs border-none px-3 py-2 ">{name}</button>
    )
}

