import React from 'react';
import * as S from './styled';
import ItemMovie from '../ItemMovie';

const ListMovies = ({data, loadList}) => {
  const handleList = () => {
    return (
      <S.Container>
        <S.FlatList
          data={data}
          renderItem={({item}) => (
            <ItemMovie title={item.titulo} uri={item.avatar} />
          )}
          numColumns="2"
        />
      </S.Container>
    );
  };

  return <>{loadList ? handleList() : <S.Text>carregando</S.Text>}</>;
};

export default ListMovies;
