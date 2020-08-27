import React from 'react';
import { Link } from 'react-router-dom'
import { LinkStyled, LinkStyledColumns, LinksCont, LogosCont, FooterContainer, ColumnaFooter, TitleFooter, LinkFooter, Logos, LinkStyledFacebook } from './style';
import '../../utils/img/Icos/style.css'

export default () => {
  return (
  	<FooterContainer>
		<LinksCont>
  			<ColumnaFooter>
	  			<TitleFooter>Productos</TitleFooter>
	  				<LinkStyledColumns to={`/buyall`}> 
	  					Compre Junto 
	  				</LinkStyledColumns>
	  				<LinkStyledColumns to={`/kitlook`} > 
	  					Kit Look 
	  				</LinkStyledColumns>
	  				<LinkStyledColumns to={`/finish`} > 
	  					Completá tu compra 
	  				</LinkStyledColumns>
	  				<LinkStyledColumns to={`/look`} > 
	  					Shop the look 
	  				</LinkStyledColumns>
	  				<LinkStyledColumns to={`/outofstock`} > 
	  					Sin stock
	  				</LinkStyledColumns>
			</ColumnaFooter>
	  		<ColumnaFooter>
	  			<TitleFooter>Mi cuenta</TitleFooter>
	  				<LinkStyledColumns to={`/myorders`} > 
	  					Mis pedidos
	  				</LinkStyledColumns>
	  				<LinkStyledColumns to={`/wishlist`} > 
	  					Wishlist
	  				</LinkStyledColumns>
	  				<LinkStyledColumns to={`/frecuents`} > 
	  					Productos Frecuentes
	  				</LinkStyledColumns>
	  				<LinkStyledColumns to={`/mylists`} > 
	  					Mis listas
	  				</LinkStyledColumns>
	  				<LinkStyledColumns to={`/myrecets`} > 
	  					Mis recetas
	  				</LinkStyledColumns>
			</ColumnaFooter>
	  		<ColumnaFooter>
				<TitleFooter>Contactanos</TitleFooter>
	  				<LinkStyledColumns to={`/stores`} > 
	  					Nuestras sucursales
	  				</LinkStyledColumns>
	  				<LinkStyledColumns to={`/info`} > 
	  					Horarios y Teléfonos
	  				</LinkStyledColumns>
			</ColumnaFooter>
		</LinksCont>
		<LogosCont>
			<Logos>
				<LinkStyledFacebook to={{ pathname: `https://www.facebook.com/` }}><p className='icon-icn_facebook' /></LinkStyledFacebook>
				<LinkStyled to={{ pathname: `https://www.twitter.com/` }}><p className='icon-icn_twitter' /></LinkStyled>
				<LinkStyled to={{ pathname: `https://www.youtube.com/` }}><p className='icon-icn_youtube' /></LinkStyled>
			</Logos>
		</LogosCont>
  	</FooterContainer>
  	) 
}