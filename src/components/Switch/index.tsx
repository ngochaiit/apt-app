import React from 'react';
import styled from 'styled-components'

interface SwitchProps {
  checked: boolean;
  disabled?: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  offText: string,
  onText: string,
}

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 68px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: green;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;



const SwitchComponent: React.FC<SwitchProps> = ({ checked,disabled, onChange, onText, offText }) => {

  return (
    <Label>
      <Input type='checkbox' checked={ checked } onChange={onChange} disabled={disabled}/>
      <Switch />
      <span>{checked? onText : offText}</span>
    </Label>
  );
   
};

export default SwitchComponent;