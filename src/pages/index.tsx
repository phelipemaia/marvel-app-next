import Head from 'next/head'
import Link from 'next/link'

import CharacterList from '../components/organisms/CharacterList';
import MarvelLayout from '../components/layouts/Marvel'
import { buildUrl } from '../utils/url';

export default function Home({ characters }) {
  return (
    <div>
      <Head>
        <title>Marvel</title>
      </Head>

      <main>
        <h1>
          Testaa
        </h1>
        <Link href='/payout'>
          <a>Payout</a>
        </Link>
        <CharacterList characters={characters} />
      </main>

      <footer>
      </footer>
    </div>
  )
}

Home.getLayout = page => <MarvelLayout>{page}</MarvelLayout>

export async function getServerSideProps({ params, res }) {
  try {
    const url: string = buildUrl('/characters');
    const result = await fetch(url);
    const json = await result.json();

    return {
      props: { characters: json.data.results },
    }
  } catch (error) {
    res.statusCode = 404;
    return {
      props: {},
    }
  }
}
