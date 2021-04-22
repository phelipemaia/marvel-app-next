import { Character } from '../../types/types';
import Link from 'next/link'

export default function CharacterElement(props) {
    return (
        <tr onClick={props.onSelect}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>
                <Link href={`/character/${props.id}`}>
                    <a>Link</a>
                </Link>
            </td>
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