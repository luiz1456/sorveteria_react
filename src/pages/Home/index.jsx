import './style.css'

export default function Home() {
  return (
    <main>
      <section className="section-banner banner-home">
        <div className='container-title-banner'>
          <h1>sorvete artesanal</h1>
        </div>
      </section>
      <section className="section-sabores sections-info">
        <img src="assets/banner-sabores.jpg" alt="banner" />
        <div className="container-sabores container-info">
          <h2 className='subtitulo-info'>Nossos sabores</h2>
          <span>Novos e deliciosos!</span>
          <p>
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
            gelateria todos os nossos produtos são naturais, à base de
            frutas e sem nenhum conservante! Também temos opções sem lactose
            e sem açúcar. Venha conhecer e perceber que tem como o sorvete
            ser delicioso e saudável ao mesmo tempo!</p>
        </div>
      </section>
      <section className="section-events sections-info">
        <div className="container-events container-info">
          <h2 className='subtitulo-info'>nossos eventos</h2>
          <span>Delícias com sorvete!</span>
          <p>
            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
            prontinhos para te atender e oferecer os melhores eventos com os melhores
            sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
          </p>
        </div>
        <img src="assets/eventos-image.jpg" alt="events img" />
      </section>
      <section className="section-about sections-info">
        <img src="assets/sobre-image.jpg" alt="about banner" />
        <div className="container-about container-info">
          <h2 className='subtitulo-info'>sobre nós</h2>
          <span>Alegria em cada casquinha!</span>
          <p>
            Venha tomar o melhor sorvete da região aqui com a gente! Nós
            estamos há anos no mercado produzindo o que tem de melhor para o
            nosso cliente e você não pode ficar fora dessa. Venha nos fazer
            uma visita e aproveite o melhor atendimento e o melhor sorvete
            da cidade.
          </p>
        </div>
      </section>
    </main>
  )
}
