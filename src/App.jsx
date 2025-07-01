import { useState } from 'react'
import Banner from './assets/Banner'
import Forms from './assets/Forms';
import Time from './assets/Time';
import Footer from './assets/Footer';

function App() {

  const times = [
    {
      nome : '',
      corPrimaria : '',
      corSecundaria : ''
    },
    {
      nome : 'Game Design',
      corPrimaria : '#FF8A29',
      corSecundaria : '#FFEEDF'
    },
    {
      nome : 'Programação',
      corPrimaria : '#82CFFA',
      corSecundaria : '#E8F8FF'
    },
    {
      nome : 'Arte',
      corPrimaria : '#DB6EBF',
      corSecundaria : '#FAE9F5'
    },
    {
      nome : 'Audio',
      corPrimaria : '#57C278',
      corSecundaria : '#D9F7E9'
    },
    {
      nome : 'Marketing',
      corPrimaria : '#FFBA05',
      corSecundaria : '#FFF5D9'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const onColaboradorAdd = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  } 

  return (
    <div>
      <Banner />
      <Forms times={times.map(time => time.nome)} onColaboradorRegister={colaborador => onColaboradorAdd(colaborador)}/>

      {times.map(time => < Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Footer />
    
    </div>
  );
}

export default App
