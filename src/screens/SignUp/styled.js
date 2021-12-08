import styled from "styled-components/native";

export const Background = styled.View`
flex:1;
background-color:#eee;
`;

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items:center;
justify-content:center;
`;

export const Logo = styled.Image`
margin-bottom:15px;
width:100px;
height:180px;


`;
export const AreaInput = styled.View`
align-items:center;
justify-content:center;
width:90%;
`;

export const Input = styled.TextInput.attrs({
     placeholderTextColor: 'rgba(0,0,0,0.5)'
})`
font-size:17px;
color:#fff;
margin-bottom:15px;
padding:10px;
border-radius:7px;
width:90%;
background: rgba(0,0,0,0.20)`;

export const AreaInputCar = styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
width:80%;
`;
export const InputCar = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(0,0,0,0.5)'
})`
font-size:17px;
color:#fff;
margin-bottom:15px;
padding:10px;
border-radius:7px;
width:47%;
background: rgba(0,0,0,0.20)`;

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
background-color:#fff;
border-radius:12px;
align-items:center;
justify-content:center;
margin-top:30;
`;
export const TextLogin = styled.Text`
font-size:20;
`;
