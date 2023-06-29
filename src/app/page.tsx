import Image from 'next/image'
import { Componente1 } from './Componente1'
import { Formulario } from './Formulario'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <p>Hola Mundo</p>
    <p>Chao Mundo</p>
    <Componente1 nombre="Jose" apellido='Parada'></Componente1>
    <Componente1 nombre="Gabriel"/>
    <Formulario/>
    </>
  )
}
