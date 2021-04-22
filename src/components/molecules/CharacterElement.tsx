import { Character } from '../../types/types';

export default function CharacterElement(props) {
    return (
        <tr onClick={props.onSelect}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <style jsx>{`
                td {
                    padding: 5px;
                }

                tr:nth-child(even) {
                    background: #CCC;
                }

                tr:hover, tr.active {
                    background-color: #DFF0D8;
                    cursor: pointer;
                }
            `}</style>
        </tr>);
};