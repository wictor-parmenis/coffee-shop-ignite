import React, { HTMLInputTypeAttribute } from 'react';
import { InputContainer } from './styles';

type IInput = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInput> = ({ ...rest }) => <InputContainer {...rest} />;

export default Input;
