import './Footer.css';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='left'>
                <img src="imagens/ig.png" alt="logo do instagram" />
                <img src="imagens/fb.png" alt="logo do facebook" />
                <img src="imagens/tw.png" alt="logo do twitter" />
            </div>
            <div className='center'>
                
                <img src="imagens/logo.png" alt="logo do organo" />
            </div>

            <div className='text'>
                <p>Desenvolvido por Mailson Anacleto</p>
            </div>
        </div>
    )
}

export default Footer