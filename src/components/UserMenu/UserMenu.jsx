import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';
import { useAuth } from 'hooks';
import { Div, Title } from './userStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <Title>Welcome, {user.name}</Title>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Div>
  );
};
