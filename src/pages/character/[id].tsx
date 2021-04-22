
import { useRouter } from 'next/router';
import MarvelLayout from '../../components/layouts/Marvel';

export default function Details() {
    const router = useRouter();
    const { id } = router.query;
    return <div>Char {id}</div>
}

Details.getLayout = page => <MarvelLayout>{page}</MarvelLayout>;