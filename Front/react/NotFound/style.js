import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const Img = styled.img`
width: 100%;
height: auto;
margin-top: 130px;
@media ${device.medium} {
margin-top: 250px;
}
`;
