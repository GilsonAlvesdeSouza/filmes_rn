import styled from 'styled-components/native';

export const Page = styled.SafeAreaView`
  align-items: center;
`;

export const Text = styled.Text`
  font-weight: bold;
  color: #000;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: ${({fontSize}) => (fontSize ? fontSize : '10px')};
`;
