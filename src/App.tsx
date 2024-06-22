import React from 'react';
import { DevicesList } from './devices/devices-list';
import { Container, Navbar, ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => (
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Everping</Navbar.Brand>
      </Container>
    </Navbar>
    <Container className='mt-5'>
      <DevicesList />
    </Container>
  </ThemeProvider>
);

export default App;
