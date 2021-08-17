import React, {useState} from 'react';
import {Container, Logo, SearchInput} from './styled';

export default () => {

    const [inputActive, setInputActive] = useState(false);

    const handleInputFocus = () => {
        setInputActive(true);
    }
    const handleInputBlur = () => {
        setInputActive(false);
    }

    return (
        <Container>
            <Logo src="/assets/logo.png" />

            <SearchInput 
                type="text" 
                placeholder="Procurar por..."
                active={inputActive}
                onFocus={handleInputFocus} //Qdo se coloca o cursor executa esta função
                onBlur={handleInputBlur} // Qdo tira o cursor executa esta função
            />
        </Container>

    );
}