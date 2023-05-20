import './App.css';

import { CadastroEmpregado } from "./components/CadastroEmpregado"
import { ListaEmpregado } from './components/ListaEmpregado';
import { ListaDepartamento } from './components/ListaDepartamento';
import { CadastroDepartamento } from './components/CadastroDepartamento';

function App() {
  return (
    <div className="App">
      <CadastroDepartamento />
      <ListaDepartamento />
      <CadastroEmpregado />
      <ListaEmpregado />
    </div>
  );
}

export default App;
