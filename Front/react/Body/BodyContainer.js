import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BannerSlider from './BannerSlider';
import Products from './Products';
import Footer from './Footer';
import { BodyCont } from './style';
import {fetchBody} from '../../store/actions/Body';
import {setFilters} from '../../store/actions/Filters';

const mapStateToProps = (state) => {
  return {
    banners: state.bodyReducer.slider,  // Recupera del STORE los slides que la Api informo
    products: state.bodyReducer.products, // Recupera del STORE los productos que la Api informo
    filters: state.bodyReducer.filters, // Recupera del STORE los filtros que la Api informo
    renderByFilters: state.filtersReducer.selected,
  }
};

const MapDispatchToProps = (dispatch) => {
  return {
  	apiData: () => dispatch(fetchBody()),  // Action-Creator para solicitar a la API la informacion necesaria para el BODY
    byFilters: (obj) => dispatch(setFilters(obj)) // Action-Creator para enviar al STORE los filtros que aplica el usuario
  }
};

const HeaderContainer = ({apiData, banners, filters, products, byFilters, renderByFilters}) => {

  const [checkedItems, setCheckedItems] = useState({});  //Inicializa los filtros posibles en un estado local
  const [productsToRender, setProductsToRender] = useState([]);  //Productos con/sin filtros aplicados
  
  const removeByIndex = (list, index) => [...list.slice(0, index), ...list.slice(index + 1)]; // funcion para eliminar el filtro de su array al deseleccionarlo

  useEffect(() => {
    apiData();   // Al montarse el componente, hace el pedido a la API
  }, []);

  useEffect(() => {
    setProductsToRender(products) // Cuando el mapStateProp consigue los productos del STORE, los coloca en el estado local para enviarlos a Products
  }, [products]);

  useEffect(() => {
    byFilters(checkedItems)  // Envia al STORE DE REDUX los filtros aplicados por el usuario
  }, [checkedItems]);


  useEffect(() => {   // Hook para re-rendirzar los productos, segun el filtro aplicado
    let productsFiltered = new Set();  // Set para evitar repetirlos
    products.forEach((prod)=>{ // existen 3 opciones:
      if(Object.keys(renderByFilters).length === 1) { // si hay filtros de un solo FIELD
         prod.attributes.map((attr)=> {
           let field = attr.field;
           let value = attr.value;
           (renderByFilters[field] && renderByFilters[field].includes(value)) ? productsFiltered.add(prod) : null; // busca los prods coincidentes y los agrega el Set
         })
      } else if (Object.keys(renderByFilters).length === 0) { // si no hay ningun filtro
        productsFiltered = products;
      } else { 
          let trueCont = 0 
          prod.attributes.map((attr)=> {
            let field = attr.field;
            let value = attr.value;
            if (renderByFilters[field] && renderByFilters[field].includes(value)){
              trueCont ++
            }
           })
          trueCont > 1 ? productsFiltered.add(prod) : null //esta mal // si hay filtros de + 1 field 
        }
    })
    productsFiltered = Array.from(productsFiltered); // convierte el Set en un Array, para luego poder utilizar array methods
    setProductsToRender(productsFiltered);
 }, [renderByFilters]);


  const handleChangeCheckbox = (event, name, field) => { //funcion para reconocer los filtros pedidos
    if (!checkedItems.hasOwnProperty(field)) setCheckedItems({...checkedItems, [field] : [name] }) // Si el FIELD de filtro no existe, lo crea
    else {
      let index = checkedItems[field].indexOf(name);
      if (index === -1){ // si no estaba el filtro activado...
        setCheckedItems({...checkedItems, [field] : [...checkedItems[field], name] }); 
      } else {  // si el filtro ya estaba, entonces se esta queriendo deseleccionar...
        let newObj = removeByIndex(checkedItems[field],index);
        if (newObj.length === 0){ //en caso que esa deseleccion deje vacio su campo FIELD, entonces lo elimino por completo
          let newItems = Object.assign({}, checkedItems);
          delete newItems[field];
          setCheckedItems(newItems);
        } else {setCheckedItems({...checkedItems, [field] : newObj })}
      }
    }
  }

  const toggleHover = (e) => (e.target.style.color = '#1DB779')

  const endHover = (e) => (e.target.style.color = '#1E1E1E')

  return (
    <BodyCont >
      <BannerSlider banners={banners} />
      <Products toggleHover={toggleHover} endHover={endHover} checkedItems={checkedItems} handleChangeCheckbox={handleChangeCheckbox} filters={filters} products={productsToRender} renderByFilters={renderByFilters}/>
      <Footer />
    </BodyCont >
  )
};

export default connect(mapStateToProps,MapDispatchToProps)(HeaderContainer);

