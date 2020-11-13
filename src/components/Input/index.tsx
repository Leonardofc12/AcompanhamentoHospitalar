import React, { useRef, useEffect } from 'react';
import { Container, TextInput, Icon } from './styles';
import { TextInputProps } from 'react-native';
import { useField, FormHandles } from '@unform/core';


interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest}) => {
   const inputRef = useRef(null);
   const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
  <Container>
    <Icon name={icon} size={20} color="#666360" />
    <TextInput
    defaultValue={defaultValue}
    keyboardAppearance="light"
    ref={inputRef}
    onChangeText={value => {
      if (inputRef.current) {
        inputRef.current.value = value;
      }
    }}
    placeholderTextColor="#666360" {...rest }/>
  </Container>
  )
}

export default Input;