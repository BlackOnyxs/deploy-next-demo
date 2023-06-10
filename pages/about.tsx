import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function About() {
    return (
      <>
        <h1>About Page</h1>
          <h1 className={'title'}>
            <Link href='/'>Go to Home</Link>
          </h1>
  
          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/home.tsx</code>
          </p>
      </>
    )
}

About.getLayout = function getLayout( page:JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  );
}