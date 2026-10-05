import './App.css'

import Titulo from './componentes/Titulo'
import Aluno from './componentes/Aluno'
import Nota from './componentes/Nota'
import Produto from './componentes/Produto'

function App() {
  return (
    <div className="container">
      <Titulo />

      <section>
        <h2 className="titulo-secao">Alunos</h2>

        <div className="lista">
          <Aluno nome="Joao" turma="T-DESI" />
          <Aluno nome="Pedro" turma="T-DESI" />
          <Aluno nome="Ana" turma="T-DESI" />
        </div>
      </section>

      <section>
        <h2 className="titulo-secao">Notas</h2>

        <div className="lista">
          <Nota disciplina="React" nota={8.5} />
          <Nota disciplina="JavaScript" nota={7.0} />
          <Nota disciplina="HTML e CSS" nota={9.5} />
        </div>
      </section>

      <section>
        <h2 className="titulo-secao">Produtos</h2>

        <div className="produtos">
          <Produto
            nome="Teclado Mecânico"
            descricao="Teclado com iluminação RGB"
            preco={250}
            disponivel={true}
          />

          <Produto
            nome="Mouse"
            descricao="Mouse sem fio"
            preco={120}
            disponivel={true}
          />

          <Produto
            nome="Headset"
            descricao="Headset gamer com microfone"
            preco={180}
            disponivel={false}
          />

          <Produto
            nome="Mousepad"
            descricao="Mousepad grande para jogos"
            preco={80}
            disponivel={true}
          />
        </div>
      </section>
    </div>
  )
}

export default App