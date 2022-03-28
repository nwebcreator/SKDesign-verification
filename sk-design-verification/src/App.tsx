import styled from 'styled-components';
import DescriptionComponent from './components/description/description-component';
import FormComponent from './components/form/form-component';

const Container = styled.div`
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    margin-top: 223px;
    padding: 0px 10px;
    @media (max-width: 768px) {
      display: flex;
      margin-top: 30px;
      margin-left: 10px;
      flex-wrap: wrap;
    }
`;

function App() {
  return (
    <Container>
        <DescriptionComponent/>
        <FormComponent/>
    </Container>
  );
}

export default App;
