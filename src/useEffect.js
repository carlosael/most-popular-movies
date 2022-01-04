import { useEffect, useState } from 'react';

function App() {
    const [pessoas, setPessoas] = useState([
        { nome: 'Ana' },
        { nome: 'José' },
        { nome: 'Mario' },
        { nome: 'Bianca' },
    ]);

    const [indice, setIndice] = useState(0);

    useEffect(() => {
        if (indice < 0) {
            setIndice(pessoas.length - 1);
        }

        if (indice > pessoas.length - 1) {
            setIndice(0);
        }
    }, [indice, pessoas]);

    return (
        <div className="App">
            <button onClick={() => setIndice(indice - 1)}>Anterior</button>
            <h1>
                {pessoas.map((pessoa, indiceAtual) => indiceAtual === indice ? pessoa.nome : '')}
            </h1>
            <button onClick={() => setIndice(indice + 1)}>Próximo</button>
        </div>
    );
}

export default App;
