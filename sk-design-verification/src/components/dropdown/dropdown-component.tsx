import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styled from 'styled-components';
import ArrowSrc from '../../assets/img/arrow.png';

const Dropdown = styled.div<{ invalid: boolean }>`
    position: relative;
    ${(p) => p.invalid ? `
    &:after {
        position: absolute;
        margin-top: 0px;
        margin-left: 15px;
        content: 'Обязательное поле';
        font-size: 12px;
        color: #EB5E55;
    }` : ''}
`;

const DropdownButton = styled.button<{ invalid: boolean }>`
    position: relative;
    display: block;
    padding-left: 15px;
    width: 100%;
    height: 38px;
    text-align: left;
    background-color: #FFFFFF;
    color: ${(p) => p.invalid ? "#EB5E55" : "#353238"};
    cursor: pointer;
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    border-color: ${(p) => p.invalid ? "#EB5E55" : "#E3E3E3"};
    height: 50px;
    background: url(${ArrowSrc}) no-repeat right;
    background-position-x: calc(100% - 15px);
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;

    ${(p) => p.invalid ? '' : `
    &:focus {
        outline: none;
        border-color: #0086A8;
    }`}
`;

const DropdownList = styled.ul<{ visible: boolean }>`
    display: ${p => p.visible ? "block" : "none"};
    position: absolute;
    left: 0;
    top: 52px;
    margin: 0;
    padding: 0;
    list-style-type: none;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(176, 198, 225, 0.6);
    overflow: hidden;
    border-radius: 8px;
    z-index: 1;
    font-size: 15px;
`;

const DropdownListItem = styled.li`
    margin: 0;
    padding: 5px;
    width: 171px;
    border: 2px solid #E3E3E3;
    border-bottom: 0px;
    cursor: pointer;
    text-align: center;
    font-size: 15px;

    &:first-child {
        border-radius: 6px 6px 0 0;

    &:last-child {
        border-radius: 0 0 6px 6px;
        border-bottom: 1px solid #E3E3E3;

    &:hover {
        background: rgba(176, 198, 225, 0.26);
`;

const DropdownInputHidden = styled.input`
    display: none;
`;

type Item = {
    id: string;
    name: string;
};

type DropdownComponentProps = {
    title: string;
    required?: boolean;
    items: Item[];
    onChange?: (value: string) => void;
};

const DropdownComponent = forwardRef<{ validate: () => boolean }, DropdownComponentProps>(({ title, required, items, onChange }: DropdownComponentProps, ref) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const selectedInputRef = useRef<HTMLInputElement>(null);
    const [invalid, setInvalid] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    const validate = () => {
        if (required && (!selectedInputRef.current || selectedInputRef.current.value.length < 1)) {
            return false;
        } else {
            return true;
        }
    }

    useImperativeHandle(ref, () => ({
        validate() {
            return validate();
        }
    }));

    const handleSelectItem = (item: Item) => {
        if (selectedInputRef.current) {
            selectedInputRef.current.value = item.id;
            if (validate()) {
                setInvalid(false);
            } else {
                setInvalid(true);
            }
            setIsOpened(false);
            if (onChange) {
                onChange(item.id);
            }
        }
    };

    useEffect(() => {
        const handleClickOutside = (evt: MouseEvent) => {
            if (dropdownRef.current && evt.target && !dropdownRef.current.contains(evt.target as any)) {
                setIsOpened(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (evt: KeyboardEvent) => {
            if (evt.key === 'Tab' || evt.key === 'Escape') {
                setIsOpened(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown, true);
        return () => {
            document.removeEventListener('keydown', handleKeyDown, true);
        };
    }, []);

    const getTitle = () => {
        const selectedItem = items.find((item) => item.id === selectedInputRef.current?.value);
        if (selectedItem) {
            return selectedItem.name;
        }

        return `${title}${required === true ? " *" : ""}`;
    }

    return (
        <Dropdown ref={dropdownRef} invalid={invalid}>
            <DropdownButton invalid={invalid} type='button' onClick={() => setIsOpened(!isOpened)}>{getTitle()}</DropdownButton>
            <DropdownList visible={isOpened}>
                {items.map((item) => <DropdownListItem key={item.id} onClick={() => {
                    handleSelectItem(item);
                }}>{item.name}</DropdownListItem>)}
            </DropdownList>
            <DropdownInputHidden ref={selectedInputRef} />
        </Dropdown>
    );
});

export default DropdownComponent;