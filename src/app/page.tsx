"use client";

import styles from './page.module.css'
import Formulario from './components/Formulario';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        

        
        <div>
        
        <Header/>
        <br />
        <Formulario />
               
        </div>
      </div>
      

    </main>
    
    
  )
}
