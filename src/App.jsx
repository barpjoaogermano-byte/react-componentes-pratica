import './App.css'
import Titulo from './componentes/Titulo'
import Aluno from './componentes/Aluno'
import Nota from './componentes/Nota'

function App() {
  return (
    <div>
      <Titulo />

      <Aluno nome="Joao" turma="T-DESI" />
      <Aluno nome="Pedro" turma="T-DESI" />
      <Aluno nome="Ana" turma="T-DESI" />

      <Nota disciplina="React" nota="8.5" />
      <Nota disciplina="JavaScript" nota="7.0" />
      <Nota disciplina="HTML e CSS" nota="9.5" />
    </div>
  )
}

export default App