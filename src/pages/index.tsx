import Head from 'next/head'
import styles from './styles/Home.module.css'

import CharacterList from '../components/organisms/CharacterList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marvel</title>
      </Head>

      <main>
        <h1>
          Testaa
        </h1>
        <CharacterList />
      </main>

      <footer>
      </footer>
    </div>
  )
}
