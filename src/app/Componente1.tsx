import  React from 'react'
interface Props{
    nombre:string,
    apellido?:string,
}
export const Componente1=(props:any) =>{
    return(
        <div>
        <p>Hola {props.nombre}{props.apellido}</p>
        <p>Chao</p>
        </div>
    )
}