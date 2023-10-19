import Header from '../components/Header';
import Formulario from '../components/Formulario';

export default function registroCrimen() {
    return (
      <>
        <Header />
        <Formulario />
      </>
    );
  }
  
export async function getServerSideProps() {
return {
    props: {},
};
}