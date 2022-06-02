import styled from "styled-components/native";

export const Background = styled.View`
flex:1;
background-color:#000 rgba(0,0,0,0.75);
`;

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items:center;
justify-content:center;
`;

export const UserImg = styled.Image`
margin-bottom:40px;
margin-top:40px;
width:120px;
height:120px;
border-radius:60px;
background-color:#eee;


`;
export const AreaInput = styled.View`
align-items:center;
justify-content:center;
width:90%;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(0,0,0,0.70)'
})`
font-size:17px;
color:#fff;
margin-bottom:15px;
padding:10px;
border-radius:7px;
width:90%;
background: rgba(255,255,255,0.70)`;

export const AreaInputCar = styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
width:80%;
`;
export const InputCar = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(0,0,0,0.70)'
})`
font-size:17px;
color:#fff;
margin-bottom:15px;
padding:10px;
border-radius:7px;
width:47%;
background: rgba(255,255,255,0.70)`;

export const AreRecovUp = styled.View`
align-items:center;
justify-content:center;
flex-direction:row;
width:70%;
height:45px;
margin-top:30px;
`;
export const RecoveryText = styled.TouchableOpacity`

align-items:center;
justify-content:center;

`;

export const TermoText = styled.Text`
font-size:13;
color:#000;
`;
export const BtnLogin = styled.TouchableOpacity`
width:80%;
height:45px;
background-color:#EBA054;
border-radius:12px;
align-items:center;
justify-content:center;
margin-top:15px;
`;
export const TextLogin = styled.Text`
font-size:20;
`;
