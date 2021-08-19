import styled from 'styled-components';

export const LinkArea = styled.a`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 60px;
   height:60px;
   border-radius: 10px;
   background-color: ${props=>props.active ? '#0B4D0B' : 'transparent'};
   margin-bottom: 10px;

   @media screen and (max-width: 600px) {
      width: 45px;
      height: 45px;
      border-radius: 5px;
   }
`;

export const LinkIcon = styled.img`
width: 34px;
height: auto;

@media screen and (max-width: 600px) {
   width: 23px;
   height: 23px;
}
`;