import React, {useState, useEffect} from 'react';
import * as S from './App.styled';
import * as C from './src/components';
import FilmesServices from './src/Services/FilmesServices';

const App = () => {
  const filmesServices = FilmesServices;
  const [movies, setMovies] = useState([]);
  const [loadList, setLoadList] = useState(false);

  const listarFilmes = async () => {
    let data = await filmesServices.listar();
    if (data) {
      setMovies(data);
      setLoadList(true);
    }
  };
  useEffect(() => {
    listarFilmes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Page>
      <S.Text fontSize="20px">Filmes em Cartaz</S.Text>
      <C.ListMovies data={movies} loadList={loadList} />
    </S.Page>
  );
};

export default App;
