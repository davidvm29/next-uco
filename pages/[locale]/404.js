import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

const Homepage = () => {
  const { t } = useTranslation(['404', 'common', 'footer'])

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <Link href='/'>
            <button
              type='button'
            >
              {t('common:back-to-home')}
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['404', 'common', 'footer'])
export { getStaticPaths, getStaticProps }
