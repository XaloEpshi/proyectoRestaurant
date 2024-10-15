import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Este proyecto busca mejorar el servicio al cliente.
                   Busca la fidelizacion del cliente por un lado.
                   Por otro lado es entregarle la opcion de pago al cliente
                   mediante un inicio de sesion en donde el cliente no solo podra
                   comprar por el menu digital sino que aunque pida al garzon por el menu QR
                   pueda atraves de su inicio de sesion pagar de igual forma evitando esa espera innecesaria.
                </p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>NOSOTROS</h2>
                <ul>
                    <li>Inicio</li>
                    <li>Menu</li>
                    <li>App</li>
                    <li>Politicas de Privacidad</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>CONTACTANOS</h2>
                <ul>
                    <li>+569-67699066</li>
                    <li>contact@gonzalo.mellao.com</li>
                </ul>                
            </div>          
        </div>
        <hr />
        <p className='footer-copyright'>Copyright © 2024 - Todos los derechos reservados. Ninguna parte de este material puede ser reproducida, almacenada en un sistema de recuperación o transmitida de ninguna manera sin el permiso previo por escrito del autor.
        </p>
    </div>
  )
}

export default Footer