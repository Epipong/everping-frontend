import React from 'react';
import { DevicesList } from './devices/devices-list';
import { ThemeProvider } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <DevicesList />
    </ThemeProvider>
  );
};

export default App;
