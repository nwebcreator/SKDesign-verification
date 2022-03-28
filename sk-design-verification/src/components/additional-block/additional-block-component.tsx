import { useState } from 'react';
import styled from 'styled-components';
import ArrowSrc from '../../assets/img/arrow.png';

const AdditionalBlock = styled.div`
    padding-top: 20px;
`;

const AdditionalTitle = styled.button`
    font-family: 'Open Sans', sans-serif;
    background: none;
    border: none;
    font-size: 16px;
    text-align: left;
    cursor: pointer;
`;

const AdditionalContent = styled.div<{ visible: boolean }>`
    display: ${p => p.visible ? "flex" : "none"};
    flex-direction: column;
    row-gap: 20px;
    padding-top: 20px;
`;

const Arrow = styled.img<{ isActive?: boolean }>`
    margin-left: 5px;
    ${p => p.isActive ? "transform:rotate(180deg)" : ""}
`;

type AdditionalBlockComponentProps = {}

const AdditionalBlockComponent = ({ children }: React.PropsWithChildren<AdditionalBlockComponentProps>) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <AdditionalBlock>
            <AdditionalTitle type='button' onClick={() => setIsOpened(!isOpened)}>
                <span>{isOpened ? "Скрыть дополнительные поля" : "Показать дополнительные поля"}</span>
                <Arrow src={ArrowSrc} isActive={isOpened}></Arrow>
            </AdditionalTitle>
            <AdditionalContent visible={isOpened}>
                {children}
            </AdditionalContent>
        </AdditionalBlock>
    );
};

export default AdditionalBlockComponent;