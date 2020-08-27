import React, { PropTypes } from 'react';
import { ProdContainer, Hr, Title, ContFiltro, Filtros, TitleContainer, Productos, FiltProdContainer, Filtro, TitleFiltro, CheckCont, Checked } from './style';
import Product from './Product';
import '../../utils/img/Icos/style.css'

export default ({handleChangeCheckbox, checkedItems, filters, products, renderByFilters, toggleHover, endHover}) => {

  return (
    <ProdContainer>
    	<TitleContainer>
	    	<Hr/>
	    		<Title>Productos</Title>
	    	<Hr/>
    	</TitleContainer>
	    <FiltProdContainer>
	    	<Filtros>
	    	  {	
	            filters.map((filter, idx) => ( // itera sobre todo el array de filtros existentes que la Api informa
	       		  <ContFiltro key={filter.field}>
	               <TitleFiltro>{filter.title}</TitleFiltro>
	               {filter.values.map((item, idx) => (  // por cada "key" values iterará 
		              <label key={idx}>
		              	  {/* Por cada filtro que se seleccione, al clickearlo dispara su acción que seteará los estados locales y Redux */}
			              <CheckCont field={filter.field} name={item} onClick={()=>handleChangeCheckbox(event, item, filter.field)}>
			              	{Object.keys(checkedItems).length === 0 ?  //en caso que aun no hayan filtros pre-seleccionados...
			              	 	<p className={`icon-icn_checkbox_off`}/>  // cada checkbox por filtro sera "vacío" (off)
			              	    :
			              	 	Object.values(checkedItems).map((elem)=>(elem)) // a partir de la primera eleccion, revisa si ese filtro está en el estado local como el "elegido"
			              	 	.map((el)=>(el)).flat(Infinity).includes(item) ?
								  	<Checked className={`icon-icn_checkbox_on`}/>  // de ser el elegido, el checkbox entonces se tilda (on)
								  	:
								  	<div className={`icon-icn_checkbox_off`}/> //sino es el elegido... checkbox vacío
							}
			              	<Filtro onMouseEnter={toggleHover} onMouseLeave={endHover}>{item}</Filtro>
			              </CheckCont>
		              </label>
	               ))}
	              </ContFiltro>
		    	))
	          }
	    	</Filtros>
	    	<Productos>
	    	  {
	    	  	products && products.map((prod)=>{  //itera sobre los productos recibidos de la API
	    	  	const route= prod.href.slice(1);
	    	  	const imagen = require('../../utils/img/Products/'+prod.image)  //guarda su imagen correspondiente
	    	  	return (
	    	  	  <Product 
	    	  	  key={prod.id}
	    	  	  route={route}
	    	  	  imagen={imagen}
	    	  	  listPrice={prod.price.listPrice}
	    	  	  sellingPrice={prod.price.sellingPrice}
	    	  	  title={prod.title}
	    	  	  toggleHover={toggleHover}
	    	  	  endHover={endHover}
	    	  	  />
	    	  	)
	    	  	})
	    	  }
	    	</Productos>
	    </FiltProdContainer>
    </ProdContainer>
  );
};
