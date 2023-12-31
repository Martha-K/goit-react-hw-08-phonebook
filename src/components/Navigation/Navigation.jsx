import { useAuth } from 'hooks';
import {LinkNav} from './navigStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkNav to="/">
        Home
      </LinkNav>
      {isLoggedIn && (
        <LinkNav to="/contacts">
          Contacts
        </LinkNav>
      )}
    </nav>
  );
};
