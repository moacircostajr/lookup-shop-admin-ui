import React from 'react';
import './App.css';

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './app/pages/Home';
import Login from './app/pages/Login';
import Principal from './app/pages/Principal';
import Usuarios from './app/pages/Usuarios';
import FormularioUsuario from './app/components/FormularioUsuario';
import Empresas from './app/pages/Empresas';
import FormularioEmpresa from './app/components/FormularioEmpresa';
import MenuPrincipal2 from './app/components/MenuPrincipalResponsivo';



function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'light' : 'dark',
          primary: {
            // Purple and green play nicely together.
            // main: purple[500],
            main: red[900],
          },
          /*
          secondary: {
            // This is green.A700 as hex.
            main: '#ECECEC',
          },
          inherit: {
            // This is green.A700 as hex.
            main: '#FFF',
          },
          */
        },
      }),
    [prefersDarkMode],
  )


  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route path="/usuario/:uuid">
              <MenuPrincipal2>
                <FormularioUsuario />
              </MenuPrincipal2>
            </Route>
            <Route path="/usuario">
              <MenuPrincipal2>
                <FormularioUsuario />
              </MenuPrincipal2>
            </Route>
            <Route path="/usuarios">
              <MenuPrincipal2>
                <Usuarios />
              </MenuPrincipal2>
            </Route>
            <Route path="/empresas">
              <MenuPrincipal2>
                <Empresas />
              </MenuPrincipal2>
            </Route>
            <Route path="/empresa/:uuid">
              <MenuPrincipal2>
                <FormularioEmpresa />
              </MenuPrincipal2>
            </Route>
            <Route path="/empresa">
              <MenuPrincipal2>
                <FormularioEmpresa />
              </MenuPrincipal2>
            </Route>
            <Route path="/principal">
              <MenuPrincipal2>
                <Principal />
              </MenuPrincipal2>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
