import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { ProductContainer , LinkStyledSlides, ProductImagen, ProductDto, ProductName, ProductPrice, ProductPriceDto } from './style'

export default ({route, imagen, listPrice, toggleHover, endHover, sellingPrice, title}) => {

	const setOpacity = (e) => (e.target.style.opacity = '0.5') // hover para las imagenes

  	const endOpacity = (e) => (e.target.style.opacity = '1') // quita el hover

	let dto = 0;

	listPrice != sellingPrice ? dto = Math.round(((sellingPrice/listPrice)-1)*100) : null;

  return (
  		<ProductContainer> 
  		  <LinkStyledSlides to={{pathname: `/${route}`}} >
	  		{ dto != 0 ? <ProductDto>{dto}%</ProductDto> : null }
		  	<ProductImagen src={imagen.default} onMouseEnter={setOpacity} onMouseLeave={endOpacity} /> 
		  	<ProductName onMouseEnter={toggleHover} onMouseLeave={endHover}>{title}</ProductName>
	  		<ProductPrice price={listPrice} dtoPrice={sellingPrice}>$ {listPrice}</ProductPrice> 
	  		<ProductPriceDto>$ {sellingPrice}</ProductPriceDto> 
	  	  </LinkStyledSlides>
	  	</ProductContainer> 
  	)

}