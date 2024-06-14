import { useState, useEffect, createContext, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [lista, setLista] = useState([]);
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const somaValores = lista.reduce((acc, item) => acc + parseFloat(item.valor), 0);
        setContador(somaValores);
    }, [lista]);

    const inserirNaLista = (dado) => {
        setLista(prevLista => [...prevLista, dado]);
    };

    const atualizarNaLista = (index, novoDado) => {
        setLista(prevLista => {
            const novaLista = [...prevLista];
            novaLista[index] = novoDado;
            return novaLista;
        });
    };

    const deletarDaLista = (index) => {
        setLista(prevLista => prevLista.filter((_, i) => i !== index));
    };

    const obterLista = () => {
        return lista;
    };
    const itemPorId = (id) => {
        return lista.find(item => item.id === id);
    };
    
    return (
        <AppContext.Provider value={{ lista, contador, inserirNaLista, atualizarNaLista, deletarDaLista, obterLista, itemPorId }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);
