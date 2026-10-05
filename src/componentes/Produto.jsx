function Produto({ nome, descricao, preco }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p>Preço: R$ {preco}</p>
      <button>Comprar</button>
    </div>
  )
}

export default Produto