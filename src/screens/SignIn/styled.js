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

export const Logo = styled.Image`
margin-bottom:15px;
width:100px;
height:180px;


`;
export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
     placeholderTextColor: 'rgba(0,0,0,0.40)'
})`
font-size:17px;
color: rgba(0,0,0,0.70);
margin-bottom:15px;
padding:10px;
border-radius:7px;
width:90%;
background: rgba(255,255,255,0.70)`;

export const AreRecovUp = styled.View`
align-items:center;
justify-content:center;
flex-direction:row;
width:70%;
height:45px;
margin-top:30px;
`;
export const CadText = styled.TouchableOpacity`
align-items:center;
justify-content:center;
`;
export const RecoveryText = styled.TouchableOpacity`
align-items:center;
justify-content:center;
margin-Left:40px;
`;

export const SingUpText = styled.Text`
font-size:14;
color:#fff;
`;

export const TextLogin = styled.Text`
font-size:20;

`;

export const BtnLogin = styled.TouchableOpacity`
width:90%;
height:45px;
background-color:#EBA054;
border-radius:12px;
align-items:center;
justify-content:center;
margin-top:30;
`;

