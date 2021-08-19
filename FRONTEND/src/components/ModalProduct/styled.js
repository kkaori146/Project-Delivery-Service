import styled from 'styled-components';

export const Container = styled.div`
    width: 650px;
    padding: 20px;
`;

export const ProductArea = styled.div`
    height: 200px;
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 0%;
        height: 100%;
    }
`;

export const ProductButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width:768px){
    position:absolute;
    bottom:10px;
    left: 50%;
    transform: translateX(-50%);
    display:flex;
    justify-content:space-between; 
    margin:0px; 
`;

export const ProductPhoto = styled.img`
    width: 310px;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 10px 10px 0 0;
    }
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;

    @media screen and (max-width: 768px) {
        margin: 0;
        max-width: 100%;
    }
`;

export const ProductDetails = styled.div`
@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 10px;
    border-bottom: 1px solid ##0B4D0B57;
    padding: 5px;
    max-width: 100%
}
`;

export const ProductQuantityArea = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;

    }
`;

export const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductIngredients = styled.div`
    font-size: 14px;

`;

export const ProductButton = styled.button`
    border: 0;
    background-color: #073C07;
    box-shadow: 4px 5px 0px #999;
    color: #FFF;
    font-size: ${props=>props.small ? '13px' : '22px'};
    font-weight: bold;
    padding: ${props=>props.small ? '5px 10px' : '10px 20px'};
    margin-left: 10px;
    border-weight: 4px;
    cursor: pointer;
    }
`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    background-color: #073C07;
    border-radius: 5px;
    }
`;

export const ProductQtImage = styled.img`
    heigth:auto;
    width: 24px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

export const ProductQtText = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #FFF;
   
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
`;