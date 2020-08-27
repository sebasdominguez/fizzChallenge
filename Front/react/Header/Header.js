import React from 'react';
import { Link } from 'react-router-dom';
import IcomoonReact, { iconList } from 'icomoon-react';
import iconSet from '../../utils/img/Icos/selection.json';
import { Header, NavCont, LogoCont, Logo, TopSearchCont, Topnav, None, Links, Linked, SearchBar, Search, IconCart, Cart, CartIcon, TextCart, TextSearch, IconSearch, Navegador, Categorie } from './style';
import Janis from '../../utils/img/logo_fizzmod.svg';
import '../../utils/img/Icos/style.css'

export default ({categories}) => {
  return (
    <Header>
      <NavCont>
        <LogoCont>
          <Link to='/' style={{ textDecoration: `none` }}><Logo src={Janis} alt='logoJanis' /></Link>
        </LogoCont>
        <TopSearchCont>
          <Topnav>
            <None/>
            <Links>
              <Link to='/help' style={{ textDecoration: `none`, color: `#1DB779` }} >Ayuda</Link>
              <Link to='/purchased' style={{ textDecoration: `none`, color: `#1DB779` }} >Mis pedidos</Link>
              <Link to='/account' style={{ textDecoration: `none`, color: `#1DB779` }} >Mi cuenta</Link>
            </Links>
          </Topnav>
          <SearchBar>
            <Search>
              <IconSearch> {/*Solo usado en este componente, para probar una herramienta diferente*/}
                <IcomoonReact iconSet={iconSet} color='black' size={25} icon='icn_search' />
              </IconSearch>
              <TextSearch placeholder='Buscar un producto...'/>
            </Search>
            <Cart>
              <Link to='/cart'>
                <IconCart>
                  <IcomoonReact iconSet={iconSet} color='#FFFFFF' size={25} icon='icn_cart' />
                </IconCart>
              </Link>
              <TextCart>Mi carrito</TextCart>
            </Cart>
          </SearchBar>
        </TopSearchCont>
      </NavCont>
      <Navegador>
        { categories.map((cat, idx)=>{
            let route= cat.href.slice(1);  //elimina el # para que la ruta quede limpia para el Link de React
            return (
              <Categorie key={idx} >
                <Link to={{pathname: `/categories/${route}`}} style={{ textDecoration: `none`, color: `#ffffff` }} >{cat.title}</Link>
              </Categorie> 
            )
          })
        }
      </Navegador>
    </Header>
  );
};
