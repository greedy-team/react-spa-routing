import styled from "styled-components";
import { categoryList } from "../data/category.js";

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

const TabContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

const Tab = styled.button`
    background-color: ${({ $active }) => ($active ? '#007bff' : 'transparent')};
    color: ${({ $active }) => ($active ? '#fff' : 'inherit')};
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 20px;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #007bff;
        color: #fff;
    }
`;

const DarkModeButton = styled.button`
    padding: 0.1rem 0.3rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 11px;
`;

const Header = ({ currentCategory, onSelectedCategory, isDarkMode, onToggleDarkMode }) => {

    return (
        <HeaderContainer>
            <Title>News</Title>
            <TabContainer>
                {categoryList.map((category) => (
                    <Tab
                        key={category.id}
                        $active={currentCategory === category.name}
                        onClick={() => onSelectedCategory(category.name)}
                    >
                        {category.name}
                    </Tab>
                ))}
                <DarkModeButton onClick={onToggleDarkMode}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </DarkModeButton>
            </TabContainer>
        </HeaderContainer>
    )
}

export default Header;
