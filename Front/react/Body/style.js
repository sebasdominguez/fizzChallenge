import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';
import { Link } from 'react-router-dom';

export const LinkStyledFacebook = styled(Link)`
color: white;
font-size: 24px;
text-decoration: none;
margin-right: 23px;
`

export const LinkStyled = styled(Link)`
color: white;
font-size: 20px;
text-decoration: none;
margin-right: 23px;
`

export const LinkStyledSlides = styled(Link)`
text-decoration: none;
`

export const LinkStyledColumns = styled(Link)`
text-decoration: none;
color: #FFFFFF;
font-family: "Open Sans";
font-size: 12px;
margin-bottom: 14px;
@media ${device.medium} {
  font-size: 10px;
  margin-bottom: 8px;
} 
`

export const BodyCont = styled.div`
width: 100%;
background-color: #FFFFFF;
display: flex;
flex-direction: column;
`

export const Banner = styled.img`
cursor: pointer;
margin-top: 146px;
@media ${device.medium} {
  width: 193%;
  margin-left: -48%;
}
`

export const ProdContainer = styled.div`
min-height: 800px;
display: flex;
flex-direction: column;
margin-top: 10px;
`

export const TitleContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content:center;
`

export const Hr = styled.div`
border-bottom: 1px solid #000;
width:40%;
margin-left: 19px;
margin-right: 19px;
margin-bottom: 1.7%;
@media ${device.medium} {
  width:30%;
  margin-bottom: 3%;
}
`

export const Title = styled.div`
width: 16%;
display: inline-block;
text-align: center;
color: #1E1E1E;
font-family: "Open Sans";
font-size: 36px;
font-weight: bold;
@media ${device.medium} {
  width:37%;
  font-size: 16px;
}
`

export const FiltProdContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 30px;
`

export const Filtros = styled.div`
display:flex;
flex-direction: column;
width: 20%;
margin-left: 2%;
margin-right: 4%;
cursor: pointer;
@media ${device.medium} {
  margin-right: 2%;
  width: 30%;
}
`

export const ContFiltro = styled.div`
display:flex;
flex-direction: column;
margin-bottom: 20px;
`

export const Filtro = styled.div`
display:flex;
flex-direction: column;
padding-left: 10px;
color: #1E1E1E;
font-family: "Open Sans";
font-size: 15px;
font-weight: 300;
cursor: pointer;
@media ${device.medium} {
  font-size: 10px;
}
`

export const TitleFiltro = styled.div`
color: #1E1E1E;
font-family: "Open Sans";
font-size: 18px;
font-weight: 300;
border-bottom: 2px solid #F5F5F5;
margin-bottom: 18px;
width: 210px;
@media ${device.medium} {
  font-size: 16px;
  width: 100%;
}
`

export const CheckCont = styled.div`
display:flex;
flex-direction: row;
align-items: center;
padding-bottom: 14px;
`

export const Checked = styled.div`
color: #1DB779;
`

export const Productos = styled.div`
width: 74%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
`

export const ProductContainer = styled.div`
display: flex;
flex-direction: column;
width: 21%;
margin-bottom: 55px;
margin-right: 2%;
text-align: center;
@media ${device.medium} {
  width: 35%;
  margin-right: 4%;
}
`

export const ProductImagen = styled.img`
cursor: pointer;
margin-top: 15px;
color: #1E1E1E;
font-size: 16px;
@media ${device.medium} {
  width: 120%;
  font-size: 13px;
}
`

export const ProductDto = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
font-size: 15px;
height: 46px;
width: 46px;
font-family: "Open Sans";
font-weight: bold;
color: #FFFFFF;
text-align: center;
background-color: #00C4C1;
border-radius: 50px;
padding: 2px;
margin-left: -2%;
margin-top: 20px;
margin-bottom: -40px;
z-index:10;
@media ${device.medium} {
  height: 23px;
  width: 23px;
  font-size:13px;
} 
`

export const ProductName = styled.div`
color: #1E1E1E;
font-size: 16px;
@media ${device.medium} {
  font-size: 13px;
}
`

export const ProductPriceDto = styled.div`
color: #1DB779;
font-size: 18px;
font-weight: bold;
@media ${device.medium} {
  font-size: 15px;
}
`

export const ProductPrice = styled.div`
color: #9B9B9B;
font-size: 13px;
text-decoration:line-through;
 ${props => props.price == props.dtoPrice ? 'color: transparent;': null }
@media ${device.medium} {
  font-size: 10px;
}
`

export const FooterContainer = styled.div`
background-color: #1E1E1E;
padding-left: 15%;
padding-right: 15%;
padding-bottom: 100px;
display: flex;
flex-direction: row;
justify-content: space-around;
@media ${device.medium} {
  flex-direction: column;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  padding-bottom: 50px;
} 
`

export const LinksCont = styled.div`
display: flex;
flex-direction row;
justify-content: start;
width:35%;
@media ${device.medium} {
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
} 
`

export const ColumnaFooter = styled.div`
display: flex;
flex-direction: column;
margin-top: 70px;
margin-right: 10%;
@media ${device.medium} {
  margin-top: 40px;
  margin-right: 2%;
  margin-left: 2%;
  width: 28%;
} 
`

export const TitleFooter = styled.div`
border-bottom: 1px solid #FFFFFF;
width: 125px;
color: #FFFFFF;
font-family: "Open Sans";
font-size: 16px;
font-weight: bold;
text-transform: uppercase;
margin-bottom: 16px;
padding-bottom: 10px;
@media ${device.medium} {
  width: 100px;
  font-size: 12px;
} 
`

export const LogosCont = styled.div`
display: flex;
width:35%;
flex-direction: row-reverse;
@media ${device.medium} {
  flex-direction: row;
  justify-content: center;
}
`

export const Logos = styled.div`
display: flex;
flex-direction: row;
margin-top: 70px;
`