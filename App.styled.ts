import styled from 'styled-components/native';

type Props = {
  fontSize: string;
};

export const Page = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  max-height: 100%;
`;

export const Text = styled.Text`
  margin: 20px;
  font-weight: bold;
  color: #000;
  font-size: ${({fontSize}: Props) => (fontSize ? fontSize : '10px')};
`;
