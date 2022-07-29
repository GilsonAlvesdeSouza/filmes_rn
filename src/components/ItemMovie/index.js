import React from 'react';
import * as S from './styled';

const ItemMovie = ({title, uri}) => {
  return (
    <S.Card>
      <S.Img source={{uri: uri}} />
      <S.Text>{title}</S.Text>
    </S.Card>
  );
};

export default ItemMovie;
