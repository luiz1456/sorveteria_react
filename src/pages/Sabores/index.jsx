import './style.css'

export default function Sabores() {
  return (
    <main>
      <section className="section-banner banner-sabores">
        <div className='container-title-banner'>
          <h1>nossos sabores</h1>
        </div>
      </section>
      <section className="sabores">
        <h2>sabores de sorvete</h2>
        <div className="container-cards-sabores limitar-largura">
          <div className="card">
            <img src="assets/sabor-oreo.png" alt="sorvete sabor oreo" />
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo.Uma explosão de sabor.</p>
          </div>
          <div className="card">
            <img src="assets/sabor-pistache.png" alt="sorvete sabor pistache" />
            <h3>Sorvete Pistache</h3>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>
          <div className="card">
            <img src="assets/sabor-cookies-avela.png" alt="sorvete sabor cookie com avelã" />
            <h3>Sorvete Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>
          <div className="card">
            <img src="assets/sorbet-kiwi.png" alt="sorbet sabor kiwi" />
            <h3>Sorvete de Kiwi</h3>
            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
          </div>
          <div className="card">
            <img src="assets/sorbet-morango.png" alt="sorbet sabor morango" />
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>
          <div className="card">
            <img src="assets/sorbet-limao.png" alt="sorbet limão siciliano" />
            <h3>Sorvete de Limão Siciliano</h3>
            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
