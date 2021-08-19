import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;

    @media (max-width: 600px) {
    margin:-14px;
    
    `;

    export const Titulo = styled.h1``;

    export const CategoryArea = styled.div`
    color: #FFF;
    margin-top: 20px; 

    @media(max-width: 600px) {
        padding: 0px;
        margin: 10px 0 0 20px;
    }
 `;

export const CategoryList = styled.div`
    display: flex;
    margin-top: 10px;

    @media(max-width: 600px) {
        flex-wrap:wrap;
    
    }
`;

export const ProductArea = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    }

    @media(max-width: 600px) {
        margin-top: 1px;
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

    @media(max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
        margin-left: 1px;
        margin-right: 7px;
    }
`;

export const ProductPaginationArea = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const ProductPaginationItem = styled.div`
    background-color: ${props=>props.active==props.current ? '#CCC' : '#FFF'};
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    margin-right: 10px;
`;