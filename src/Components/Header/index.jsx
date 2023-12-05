import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header>
            <div className="container-header limitar-largura">
                <img src="assets/logo.png" alt="logo" className='logo' />
                <nav>
                    <CustomLink to={'/'} className='link'>Home</CustomLink>
                    <CustomLink to={'/sabores'} className='link'>Sabores</CustomLink>
                    <CustomLink to={'/sobre'} className='link'>Sobre</CustomLink>
                </nav>
            </div>
        </header >
    )
}

function CustomLink({ to, children, className}) {
    const resolvedpath = useResolvedPath(to).pathname
    const isActive = useMatch({ path: resolvedpath })
    return (
        <Link to={to} className={className += isActive ? ' active' : ''}>{children}</Link>
        )
}