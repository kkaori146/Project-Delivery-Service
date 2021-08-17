import React from 'react';
import {Container, CategoryImage} from './styled';

export default ({data, activeCategory, setActiveCategory}) => {
    const handleCategoryClick = () => {
        setActiveCategory(data.id);
    }
    return (
        <Container 
        active={activeCategory} 
        id={data.id} >
            <CategoryImage src={data.image} 
            onClick={handleCategoryClick}
            />

        </Container>

    );
}