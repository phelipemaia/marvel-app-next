import { JsxEmit } from 'typescript';
import CharacterElement from '../molecules/CharacterElement';
import { Character } from '../../types/types';

import { buildUrl } from '../../utils/url';
import { useEffect, useState } from 'react';

export default function CharacterList({ characters }) {
    const url: string = buildUrl('/characters');
    const [loadedCharacters, setLoadedCharacters] = useState([]);
    const [selectedCharacters, setSelectedCharacters] = useState({});
    if (characters) {
        useEffect(() => {
            setLoadedCharacters(characters);
        }, [characters.length])
    } else {
        useEffect(() => {
            fetch(url)
                .then((response: any) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return response.json();
                    }
                })
                .then((json: any) => {
                    if (json) {
                        setLoadedCharacters(json.data.results);
                    }
                })
                .catch((error) => { 
                    console.log('error ', error);
                });
        }, [characters.length]);
    }
    
    const onSelect = (evt, character) => {
        if (evt.currentTarget.classList.contains('active')) {
            evt.currentTarget.classList.remove('active');
            delete selectedCharacters[character.id];
        } else {
            evt.currentTarget.classList.add('active')
            selectedCharacters[character.id] = character;
            setSelectedCharacters({
                ...selectedCharacters
            })
        }
    };

    const submitCharacters = () => {
        for (const id in selectedCharacters) {
            const body = { id: selectedCharacters[id].id, name: selectedCharacters[id].name };
            fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((response: any) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return response.json();
                    }
                })
                .then((json: any) => {
                    console.log('return ', json)
                })
                .catch((error) => { 
                    console.log('error ', error);
                });
        }
    };

    const charactersElement = characters.map(character => <CharacterElement key={character.id} onSelect={(evt) => onSelect(evt, character)} name={character.name} id={character.id} />)    

    return (
        <>
            <button onClick={submitCharacters}>Abc</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {charactersElement}
                </tbody>
            </table>
        </>);
}