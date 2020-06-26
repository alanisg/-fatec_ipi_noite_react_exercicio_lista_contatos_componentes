import React,{useState} from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';


const ContatoInput = (props) => {
    const[telefone,setTelefone] = useState('');
    const[nome,setNome] = useState('');

    const capturarTelefone = (telefone)=>{
        setTelefone(telefone);
    }

    const capturarNome = (nome)=>{
        setNome(nome); 
    }

  return (
        <View >
            <TextInput style={estilo.estiloTextInput}
                placeholder='Nome'
                value={nome}
                onChangeText={capturarNome}
            />
            <TextInput style={estilo.estiloTextInput}
                placeholder='Telefone'
                value = {telefone}
                onChangeText={capturarTelefone}
            />
            <Button
                title='Adicionar'
                onPress={()=>props.onAdicionarContato(nome,telefone)}
            />
        </View>
        )
}

const estilo = StyleSheet.create({
    estiloTextInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 4,
        padding: 4
      },
      lembreteView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
});

export default ContatoInput;