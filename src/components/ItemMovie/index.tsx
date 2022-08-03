import React from 'react';
import {Movie} from '../types';
import * as S from './styled';

const ItemMovie = ({data}: {data: Movie}) => {
  return (
    <S.Card>
      <S.Img source={{uri: data.avatar}} />
      <S.Text>{data.titulo}</S.Text>
    </S.Card>
  );
};

export default ItemMovie;
