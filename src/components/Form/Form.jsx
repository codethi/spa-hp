import "./Form.css";

export function Form() {
  return (
    <section className="form-space">
      <form action="">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Nome do personagem"
          name="name"
        />

        <label htmlFor="house">Casa</label>
        <input
          type="text"
          id="house"
          placeholder="Casa do personagem"
          name="house"
        />

        <label htmlFor="actor">Artista</label>
        <input
          type="text"
          id="actor"
          placeholder="Artista do personagem"
          name="actor"
        />

        <label htmlFor="image">Link da Imagem</label>
        <input
          type="text"
          id="image"
          placeholder="Link da Imagem do personagem"
          name="image"
        />

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
}
