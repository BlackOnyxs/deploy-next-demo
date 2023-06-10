import Link from 'next/link'
import { NextPage } from 'next'
import { MainLayout } from '../../components/layouts/MainLayout'


const Contact: NextPage = () => {
    return (
      <MainLayout>
        <h1>About Page</h1>
          <h1 className={'title'}>
            <Link href='/'>Go to Home</Link>
          </h1>
  
          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/home.tsx</code>
          </p>
      </MainLayout>
    )
}

export default Contact;
