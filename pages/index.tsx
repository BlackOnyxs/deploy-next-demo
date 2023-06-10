import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
        <h1 className={'title'}>
           <Link href='/about'>Go to About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.tsx</code>
        </p>

    </MainLayout>
  )
}

