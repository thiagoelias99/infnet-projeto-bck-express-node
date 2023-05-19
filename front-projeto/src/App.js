import './App.css';
import { Box, Paper } from '@mui/material';


import { CadastroEmpregado } from "./components/CadastroEmpregado"
import { ListaEmpregado } from './components/ListaEmpregado';

function App() {
  return (
    <div className="App">
      <Box
        component={Paper}
        height={"90vh"}
        display='flex'
        flexDirection="column"
        alignItems='center'
        gap={1}
        padding={1}
        margin={1}
      >
        <h1>Cadastro de Empregados</h1>
        <CadastroEmpregado />
        <ListaEmpregado />
      </Box>

    </div>
  );
}

export default App;
