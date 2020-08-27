import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const Header = styled.div`
display: flex;
flex-direction: column;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 10000;
`

export const NavCont = styled.div`
width: 100%;
height: 90px;
background-color: #FFFFFF;
display: flex;
flex-direction: row;
@media ${device.medium} {
  flex-direction: column;
  height: auto;
}
`

export const LogoCont = styled.div`
width: 230px;
height: 90px;
padding-left: 41px;
padding-right: 38px;
padding-top: 22px;
padding-bottom: 28px;
background-color: #F5F5F5;
align-items: center;
justify-content: center;
@media ${device.medium} {
  width: 100%;
  display: flex;
  flex-direction: row;
}
@media ${device.small} {
  height: 60px;
}
`

export const Logo = styled.img`
width: 151px;
height: 40px;
`

export const TopSearchCont = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 90px;
`

export const Topnav = styled.div`
display: flex;
flex-direction: row;
`

export const None = styled.div`
width: 76%;
@media ${device.medium} {
display:none;
}
`

export const Links = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 24%;
height: 34px;
@media ${device.medium} {
width: 100%;
}
`

export const Linked = styled.div`
font-family: "Open Sans";
text-align: center;
color: #1DB779;
margin-top: 8px;
margin-bottom: 8px;
`

export const SearchBar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-contents: flex-start;
height: 56px;
`

export const Search = styled.div`
display: flex;
flex-direction: row;
width: 76%;
border-top: 1px solid #D1D3D4;
height: 56px;
`

export const IconSearch = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-left: 20px;
`

export const TextSearch = styled.input`
margin-left: 18px;
width: 100%;
color: #1E1E1E;
font-family: 'Open Sans', sans-serif;
font-size: 20px;
letter-spacing: 0.5px;
border: 0px;
outline: none;
&::-webkit-input-placeholder {
  color: black;
}
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media ${device.small} {
font-size: 15px;
}
`

export const Cart = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 24%;
height: 56px; 
cursor: pointer;
background-color: #1E1E1E;
`

export const IconCart = styled.div`
margin-left: 4%;
@media ${device.medium} {
margin-left: 0%;
}
`

export const TextCart = styled.div`
text-transform: uppercase;
margin-left: 7%;
color: #FFFFFF;
font-family: "Open Sans";
font-size: 15px;
font-weight: bold;
@media ${device.medium} {
display:none;
}
`

export const Navegador = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 56px;
background-color: #1DB779;
font-family: "Open Sans";
font-size: 15px;
font-weight: bold;
@media ${device.medium} {
flex-flow: wrap;
font-size: 13px;
}
`

export const Categorie = styled.div`
color: #ffffff;
cursor: pointer;
`