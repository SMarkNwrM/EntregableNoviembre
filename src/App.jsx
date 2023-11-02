import { useState } from 'react'
import Card from './components/Card';
import Form from './components/form';

function App() {
  const [informacion, setInformacion] = useState({}); {/**useState setea un objeto*/}
  const [isMensajeError, setMensajeError] = useState(); {/**useState setea un objeto*/}

  const onSubmit = (data) => {
    if (data.nombre.length >= 3 
      && data.planta.length >= 6){
        console.log("data si: ", data);
        setInformacion(data);
        setMensajeError("false")
      }else{
        setMensajeError("true")
        console.log("data no: ", data);

    }
  }
  
  return (
    <div className="App">
      <Form 
        onSubmit={onSubmit} 
        titulo="PLantas"
        isMensajeError={isMensajeError}
        informacion={informacion}
      />
      <br />
      <Card
        isMensajeError={isMensajeError}
        informacion={informacion}
        />
      <br />
      <h4>Sebastian Murillo Garcia</h4>
    </div>
  );
}

export default App;
