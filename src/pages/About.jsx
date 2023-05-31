import { Nav, Tab } from 'components/About.styled';
import { Link, Outlet } from 'react-router-dom';

export const About = () => {
  return (
    <main style={{ minHeight: '625px' }}>
      <div>
        <Nav>
          <ul>
            <Tab>
              <Link to="/about">Про нас</Link>
            </Tab>
            <Tab>
              <Link to="team">Дізнайтеся про нашу команду</Link>
            </Tab>
            <Tab>
              <Link to="reviews">Ознайомтесь з відгуками</Link>
            </Tab>
          </ul>
        </Nav>

        <Outlet />
      </div>
    </main>
  );
};
