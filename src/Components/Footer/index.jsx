import './style.css'

export default function Footer() {
    return (
        <footer>
            <div className='limitar-largura'>
                <div className="contato">
                    <img src="assets/logo.png" alt="logo" className="logo" />
                    <div>
                        <h3>Endereço</h3>
                        <p>Av. Bernadino de Campos, 98</p>
                        <p>São Paulo, SP 12345-678</p>
                    </div>
                    <div>
                        <h3>Contato</h3>
                        <p>info@meusite.com</p>
                        <p>Tel: (11) 3456-7890</p>
                    </div>
                    <div>
                        <h3>horários</h3>
                        <p>Aberto todos os dias</p>
                        <p>10:00 - 22:00</p>
                    </div>
                </div>
                <div className="copyright">
                    <p>Gelateria. Orgulhosamente desenvolvido por Luiz Rodrigo</p>
                </div>
            </div>
        </footer>
    )
}
