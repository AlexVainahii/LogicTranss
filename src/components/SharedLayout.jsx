import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Links,
  Fone,
  Contacts,
} from './SharedLayout.styled';
import imagess from '../images/logo3.png';
export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Logo to="/">
            <img src={imagess} alt="logo" width={300} />
          </Logo>
          <nav>
            <Links to="/">Головна</Links>
            <Links to="/about">Про компанію</Links>
            <Links to="/products">Превезення</Links>
          </nav>
        </Container>
      </Header>
      <Outlet />
      <footer>
        <Container>
          <div>&copy; 2023 Логістична компанія "LOGICTRANS"</div>
          <Contacts>
            <div>Наші контакти</div>
            <ul>
              <li>
                <a href="tel:+380123456789">+380123456789</a>
              </li>
              <li>
                <a href="email:info@logictrans.com">info@logictrans.com</a>
              </li>
              <li>вул. Логістична, 1, м. Київ, Україна</li>
            </ul>
          </Contacts>
        </Container>
      </footer>
    </>
  );
};
