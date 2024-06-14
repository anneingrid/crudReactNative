import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput } from 'react-native';
import { Link } from "expo-router";
import { useAppContext } from '@/components/provider';
import { AtualizarModal } from '@/components/modalAtualizar';

export default function Home() {
    const { lista, contador, inserirNaLista, atualizarNaLista, deletarDaLista } = useAppContext();
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState('');

    const adicionarItem = () => {
        if (titulo && valor) {
            inserirNaLista({ id: lista.length, titulo, valor: parseFloat(valor) });
            setTitulo('');
            setValor('');
        }
    };
    const deletarItem = (index) => {
        deletarDaLista(index);
    };




    const renderItem = ({ item, index }) => (
        
        <View>
            <Link href={`${index}`}>
                <View style={styles.itemContainer}>
                    <Text>{item.titulo}: {item.valor}</Text>

                </View>
            </Link>
            <Button title="Deletar" onPress={() => deletarItem(index)} />
        </View>

    );

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>Soma dos Valores: {contador}</Text>
            <TextInput
                style={styles.input}
                placeholder="Título"
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor"
                value={valor}
                onChangeText={setValor}
                inputMode="numeric"
            />
            <Button title="Adicionar Item" onPress={adicionarItem} />
            <FlatList
                data={lista}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    counter: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
});