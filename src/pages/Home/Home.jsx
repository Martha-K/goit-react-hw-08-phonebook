import { Container, Title } from './homeStyled';

const Home = () => {
    return (
      <Container>
        <Title>
          The phone book welcomes you{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Title>
      </Container>
    );
}

export default Home;