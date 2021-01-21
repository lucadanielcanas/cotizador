import React, { useState } from 'react';
import { Container, FormContainer } from './AppStyles';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Summary from './components/Summary/Summary';
import Result from './components/Result/Result';
import Spinner from './components/Spinner/Spinner';

function App() {
  
  const [ summary, setSummary ] = useState({
    quotation: 0,
    info: {
      mark: '',
      year: '',
      plan: ''
    }
  });
  const [ spinner, setSpinner ] = useState(false);

  const { info, quotation } = summary;

  return (
    <Container>
      <Header 
      title='Cotizador de seguros' />
      <FormContainer>
        <Form 
          setSummary={setSummary}
          setSpinner={setSpinner} />

        { spinner ? <Spinner /> : null }

        { spinner ? null : <Summary info={info} /> }
        
        { spinner ? null : <Result  quotation={quotation} /> }
        
      </FormContainer>
    </Container>
  );
}

export default App;
