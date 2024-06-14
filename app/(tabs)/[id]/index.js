import { useState, useEffect } from 'react';

import { ActivityIndicator, ScrollView, Text, View, Button } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { useAppContext } from '@/components/provider';
import  AtualizarModal  from '@/components/modalAtualizar';

export default function Tela3() {
    const { id } = useLocalSearchParams();
    const { lista, atualizarNaLista} = useAppContext();
    const [dados, setDados] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const getData = async () => {

            setDados(lista[id])

        }
        getData();
    }, [id]);

    const atualizarItem = (itemAtualizado) => {
        atualizarNaLista(itemAtualizado.id, itemAtualizado);
        setDados(itemAtualizado)
    };

   
    const abrirModal = (index) => {
        setModalVisible(true);
    };
    if (!dados) {
        return <ActivityIndicator></ActivityIndicator>
    }
    return (
        <View>
            <Text>
                Id:
                {dados.id}
            </Text>
            <Text>
                Titulo:
                {dados.titulo}
            </Text>
            <Text>
                Valor:
                {dados.valor}
            </Text>
            <Button title="Atualizar" onPress={() => abrirModal(dados.id)} />
            <Link href=''>
                Voltar
            </Link>
           
            <AtualizarModal
                visible={modalVisible}
                item={dados}
                onUpdate={atualizarItem}
                onClose={() => setModalVisible(false)}
            />
        </View>
    )
}