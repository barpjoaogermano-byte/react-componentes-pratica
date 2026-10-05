import './App.css'
import Titulo from './componentes/Titulo'
import Aluno from './componentes/Aluno'
import Nota from './componentes/Nota'
import Produto from './componentes/Produto'

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

      <Produto nome="Teclado Mecânico" descricao="Teclado com iluminação RGB" preco={250} />
      <Produto nome="Mouse" descricao="Mouse sem fio" preco={120} />
    <Produto nome="Headset" descricao="Headset gamer com microfone" preco={180} />
    <Produto nome="Mousepad" descricao="Mousepad grande para jogos" preco={80} />
    </div>
  )
}

export default App