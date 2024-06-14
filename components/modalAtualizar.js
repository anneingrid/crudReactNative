import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UpdateModal = ({ visible, item, onUpdate, onClose }) => {
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState('');

    useEffect(() => {
        if (item) {
            setTitulo(item.titulo);
            setValor(item.valor.toString());
        }
    }, [item]);

    const handleUpdate = () => {
        onUpdate({ ...item, titulo, valor: parseFloat(valor) });
        onClose();
    };

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Atualizar Item</Text>
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
                        keyboardType="numeric"
                    />
                    <Button title="Atualizar" onPress={handleUpdate} />
                    <Button title="Cancelar" onPress={onClose} color="red" />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        width: '100%',
    },
});

export default UpdateModal;