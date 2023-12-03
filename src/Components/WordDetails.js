import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WordDetails = ({ historyWord }) => {
    const [details, setDetails] = useState([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (historyWord) {
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${historyWord}`)
                .then(response => {
                    setDetails(response.data)
                })
                .catch(err => setError(err.response.data.message))
        }else{
            navigate("/history");
        }
    }, []);

    return (
        <div>
            {
                error && < p > {error}</p>
            }
            {
                !error && details.length > 0 && details.map((item, index) => (
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
        </div>
    );
};

export default WordDetails;
