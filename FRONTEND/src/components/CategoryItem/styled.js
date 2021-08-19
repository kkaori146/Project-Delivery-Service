import styled from 'styled-components';


export const Container = styled.div`
    width: 80px;
    height: 80px;
    background-color: ${props=>props.active == props.id ? '#FFF' : '#AAE09A'} ;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-right: 10px;
    cursor:pointer;
    transition: all ease 0.3s;

    @media (max-width: 600px) {
        margin-bottom: 10px;
        width: 120px;
        height: 50px;
        border-radius: 4px;
        margin-right: 7px;
    }
`;

export const CategoryImage= styled.img`
    width: 40px;
    height: 40px;

    @media (max-width: 600px) {
        width: 25px;
        height: 25px;
    }
`;