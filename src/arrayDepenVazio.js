import { useEffect, useState } from 'react';

function App() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/search/repositories')
            .then(resposta => resposta.json())
            .then(data => setRepos(data))

    }, [])


    return (
        <div className="App">
            {repos.map(repo => (
                <div className="repo" key={repo.name}>
                    <h1>{repo.name}</h1>
                    <p>{repo.description}</p>
                    <a href={repo.url}>{repo.url}</a>
                </div>
            ))}

        </div>
    );
}

export default App;
