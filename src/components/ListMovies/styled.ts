import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Movie as data} from '../types';

export const Text = styled.Text`
  color: #000;
  font-size: 20px;
  margin-top: 20px;
`;

export const MoviesList = styled(FlatList as new () => FlatList<data>)`
  border-radius: 8px;
  font-size: 17px;
`;

export const Container = styled.View`
  height: 660px;
  background-color: #eee;
  align-items: center;
  border-radius: 8px;
  padding: 5px;
`;
