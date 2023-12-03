import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRequest, searchWord } from '../redux/action/searchAction';

const Home = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state);

    const handleSearch = () => {
        if (input) {
            dispatch(postRequest(input));
            dispatch(searchWord(input));
            setInput("");
        } else {
            alert("Give Word");
        }
    };

    return (
        <div>
            <div>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            {
                error && < p > {error}</p>
            }
            {
                !error && data.length > 0 && data.map((item, index) => (
                    <div key={item.id}>
                        <h1>{item.word}</h1>
                        <p>{item.phonetic}</p>
                        {
                            item.phonetics.map((audio) => (
                                <div>
                                    <audio controls src={audio.audio}></audio>
                                    <p>{audio.text}</p>
                                </div>
                            ))
                        }
                        {
                            item.meanings.map((type) => (
                                <div>
                                    <h2>{type.partOfSpeech}</h2>
                                    {
                                        type.definitions.map((def) => (
                                            <p>{def.definition}</p>
                                        ))
                                    }
                                </div>
                            ))
                        }

                    </div>
                ))
            }

        </div >
    );
};

export default Home;