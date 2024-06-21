import React from 'react';
import { DevicesList } from './devices/devices-list';
import { Container, ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container>
        <DevicesList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
