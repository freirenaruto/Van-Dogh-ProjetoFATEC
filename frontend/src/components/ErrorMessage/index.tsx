import React from 'react';

import * as S from './styles';

import { MdErrorOutline } from 'react-icons/md';

interface IMessage {
  message?: string;
}

const ErrorMessage: React.FC<IMessage> = ({ message = 'Erro' }) => {
  return (
    <S.Container>
      <MdErrorOutline size={80} />
      <p>Error</p>
      <span>{message}</span>
    </S.Container>
  );
};

export default ErrorMessage;
