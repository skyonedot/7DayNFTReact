

import styled from 'styled-components'
import Navigation from './Components/Navigation';
import Body from './Components/Body';
import Footer from './Components/Footer';

const Div = styled.div`

`

function App() {
  return (
    <Div>
      <Navigation />
      <Body/>
      <Footer/>
    </Div>
  );
}

export default App;
