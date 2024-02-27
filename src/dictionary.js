import React, { useEffect } from 'react'
import { useState } from 'react';
import './dictionary.css';

function Dictionary() {

    const [dictionary, setDictionary] = useState([
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ]);

    const [searchWord, setSearchWord] = useState("");
    const [definition, setDefinition] = useState("");

    const handleChange = () => {
             const lowercaseSearchWord = searchWord.toLowerCase();
             const foundWord = dictionary.find(entry => entry.word.toLowerCase() === lowercaseSearchWord);
             if(foundWord) {
                setDefinition(foundWord.meaning);
             } else {
                setDefinition("Word not found in the dictionary.")
             }
    }
    
    return (
    <div className='container'>
        <h1>Dictionary App</h1>
        <div className='search-bar'>
            <input type="text" value={searchWord} placeholder='Search for a word' onChange={(e) => setSearchWord(e.target.value)} />
            <button onClick={handleChange}>Search</button>
        </div>
        <h4>Definition:</h4>
        <p>{definition}</p>
    </div>
  )
  }


export default Dictionary