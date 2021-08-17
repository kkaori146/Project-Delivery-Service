import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { 
    Container, 
    CategoryArea, 
    CategoryList 
} from './styled';

import Header from '../../components/Header';

import api from '../../api';
import CategoryItem from '../../components/CategoryItem';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState('');

    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(()=>{
        const getCategories = async () => {
            const cat = await api.getCategories();
            if(cat.error == '') {
                setCategories(cat.result);
            }
        };
        getCategories();
    }, []);

    return (
        <Container>
            <Header serach={headerSearch} onSearch={setHeaderSearch} />
                {categories.length >0 &&
            
            <CategoryArea>
                Selecione uma Categoria
                <CategoryList>
                    <CategoryItem 
                    data={{
                        id: 0, 
                        title:'Todas as Categorias', 
                        image:'/assets/food-and-restaurant.png'
                    }}
                    activeCategory={activeCategory}
                    />
                    {categories.map((item, index)=>(
                        <CategoryItem 
                        key={index} 
                        data = {item} 
                        activeCategory={activeCategory}
                        />
                    ))}
                </CategoryList>
            </CategoryArea>
            
            }
        </Container>
    );
}