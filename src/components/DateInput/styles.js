import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 60px 0 30px;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0 30px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  margin-left: 15px;
  color: #fff;
`;

export const Picker = styled.View`
  padding: 15px 30px;
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.8);
`;
