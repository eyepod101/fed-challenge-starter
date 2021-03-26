import React, { useEffect, useState } from 'react';
import Card from './components/card/Card';
import { MockedData } from './mocks/mockedData';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        setPosts(MockedData);
    }, []);

    return (
        <div className="App">
            <header className="app-header"></header>
            <section className="cards">
                {Object.keys(posts).map((key) => (
                    <Card key={key} index={key} details={posts[key]} />
                ))}
            </section>
        </div>
    );
};

export default App;
