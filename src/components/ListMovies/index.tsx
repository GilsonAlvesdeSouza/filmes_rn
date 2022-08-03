import React from 'react';
import {ListRenderItem} from 'react-native';
import * as S from './styled';
import ItemMovie from '../ItemMovie';
import {Movie} from '../types';

type ListMovies = {
  data: Array<Movie>;
  loadList: boolean;
};

const ListMovies = ({data, loadList}: ListMovies) => {
  const renderItem: ListRenderItem<Movie> = ({item}) => (
    <ItemMovie data={item} />
  );

  const handleList = () => {
    return (
      <S.Container>
        <S.MoviesList<React.ElementType>
          data={data}
          renderItem={renderItem}
          numColumns="2"
        />
      </S.Container>
    );
  };

  return <>{loadList ? handleList() : <S.Text>carregando</S.Text>}</>;
};

export default ListMovies;
