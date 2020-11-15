import styled from 'styled-components/native';

export const Container = styled.View`
background: #fff,
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
`;

export const ContentRestaurant = styled.View`
  flex-direction: row;
  padding: 16px;
  border: 3px; 
  border-color: #C0C0C0;
  margin-bottom: 14px;
  border-radius: 10px;
  background-color: #006aff;
`;

export const ViewHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4px 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;


export const ViewContent= styled.View`
  margin-left: 10px;
`;

export const TextHeader  = styled.Text`
  font-size: 18px;
  color: #fff;
`;


export const FilterView = styled.View` 
  width: 100%;
  height: 50px;
  padding: 0px 14px;
  background: #E6E6E6;
  border-radius: 10px;
  margin-bottom: 10px;
  /* border-color: #ff6347;
  border-width: 1px; */

  flex-direction: row;
  align-items: center;
`;

export const FilterText = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  color: #312e38;
  font-size: 16px;
`;
   