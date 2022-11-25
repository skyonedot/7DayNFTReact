

import styled from 'styled-components'
import Navigation from './Components/Navigation';
import Body from './Components/Body';
import Footer from './Components/Footer';

const Div = styled.div`
  // background-color: white;
  // height: 100vh;
  // weight: 100vw;
  // border: 1px solid white;
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
