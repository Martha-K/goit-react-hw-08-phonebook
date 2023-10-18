import { Container, Title, Span } from './homeStyled';

const Home = () => {
    return (
      <Container>
        <Title>
          The phone book welcomes you{' '}
          <Span role="img" aria-label="Greeting icon">
            💁‍♀️
          </Span>
        </Title>
      </Container>
    );
}

export default Home;