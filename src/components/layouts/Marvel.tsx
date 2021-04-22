import Link from 'next/link';

export default function MarvelLayout({ children }) {
    return (
        <div>
            <div>
               <Link href='/'>
                    <a>Home</a>
               </Link>
            </div>
            <div>
                {children}
            </div>
        </div>);
}