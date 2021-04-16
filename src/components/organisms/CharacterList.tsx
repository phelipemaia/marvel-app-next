import { JsxEmit } from 'typescript';
import CharacterElement from '../molecules/CharacterElement';

import { buildUrl } from '../../utils/url';

export default function CharacterList() {
    const url: string = buildUrl('/characters');
    console.log(url)
    fetch(url)
        .then((response: any) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log(response.status)
                return response.json();
            }
        })
        .then((data: any) => {
            if (data) {
                console.log(data);
            }
        })
        .catch((error) => { 
            console.log('error');
        });

    return (<CharacterElement />)
}