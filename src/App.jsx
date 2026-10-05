import './App.css'
import Titulo from './componentes/Titulo'
import Aluno from './componentes/Aluno'

function App() {
  return (
    <div>
      <Titulo />

      <Aluno nome="Joao" turma="T-DESI" />
    </div>
  )
}

export default App