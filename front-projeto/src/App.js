import './App.css';
import { Box, Paper } from '@mui/material';


import { CadastroEmpregado } from "./components/CadastroEmpregado"
import { ListaEmpregado } from './components/ListaEmpregado';
import { CadastroDepartamento } from './components/CadastroDepartamento';

function App() {
  return (
    <div className="App">
      <CadastroEmpregado />
      <ListaEmpregado />
      <CadastroDepartamento />
    </div>
  );
}

export default App;
