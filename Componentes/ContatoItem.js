import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContatoItem = (props) => {
  return (
      <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
          <View style={estilo.itemNaLista}>
            <Text>Nome: {props.nome} | Telefone: {props.telefone}</Text>
          </View>
      </TouchableOpacity>
  )
}

const estilo = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#EEE',
        borderColor: '#CCC',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8,
      }
});

export default ContatoItem;