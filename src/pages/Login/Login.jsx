import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import {Div} from './loginStyled'

export default function Login() {
  return (
    <Div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Div>
  );
}
