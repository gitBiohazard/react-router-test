import React from 'react'
import styles from './Contato.module.css'
import media from '../img/contato.jpg'
import { Head } from './Head'


const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Página de contatos" />
      <img src={media} alt="Máquina de escrever" />
      <div className={styles.coluna}>
        <h1>Entre em Contato</h1>
        <ul className={styles.dados}>
          <li>
            luizfelipecav@outlook.com
          </li>
          <li>
            99999-9999
          </li>
          <li>
            Rua Ali perto, 999, Centro, São Paulo - SP.
          </li>
          <li>
            CEP: 00.000-000
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contato