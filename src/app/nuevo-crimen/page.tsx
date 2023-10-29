'use client';

import Header from '../components/Header';
import Formulario from '../components/Formulario';
import styles from '../styles/page.module.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function registroCrimen() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <Header />
          <br />
          <Formulario />
        </div>
      </div>
    </main>
  );
}
