import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Links } from './SharedLayout.styled';
import imagess from '../images/logo3.png';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo to="/">
          <img src={imagess} alt="logo" width={300} />
        </Logo>
        <nav>
          <Links to="/">Головна</Links>
          <Links to="/about">Про компанію</Links>
          <Links to="/products">Превезення</Links>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
