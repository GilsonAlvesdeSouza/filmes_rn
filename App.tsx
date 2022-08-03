import React, {useState, useEffect} from 'react';
import * as S from './App.styled';
import * as C from './src/components';
import {Movie} from './src/components/types';
import FilmesServices from './src/Services/FilmesServices';

const App = () => {
  const filmesServices = FilmesServices;
  const [movies, setMovies] = useState(Array<Movie>);
  const [loadList, setLoadList] = useState(false);

  useEffect(() => {
    const listarFilmes = async () => {
      let data = await filmesServices.listar();
      if (data) {
        setMovies(data);
        setLoadList(true);
      }
    };
    listarFilmes();
  }, [filmesServices]);

  return (
    <S.Page>
      <S.Text fontSize="20px">Filmes em Cartaz</S.Text>
      <C.ListMovies data={movies} loadList={loadList} />
    </S.Page>
  );
};

export default App;
