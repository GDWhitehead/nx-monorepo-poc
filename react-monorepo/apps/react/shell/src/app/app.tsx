import * as React from 'react';
import {Card, createTheme} from "@mui/material";
import SettingsApp from "settings-app/Module"
import MUIThemeProvider from '@mui/material/styles/ThemeProvider';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export function App() {
  return (
    <MUIThemeProvider theme={lightTheme}>
      <p>This is the shell app</p>
      <Card>
        <SettingsApp />
      </Card>
    </MUIThemeProvider>
  );
}

export default App;
