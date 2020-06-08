import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hello, I'm Gustavo. I'm a Ph.D. student at Federal University of Minas Gerais (UFMG) - Brazil.
                    You can contact me at <a href="mailto:gosiqueira@dcc.ufmg.br">DCC Webmail</a>
                </p>
                <p>
                    (This is a sample website - you'll be building a site like this on {' '}
                    <a href="https://nextjs.org/learn">this Next.js tutorial</a>)
                </p>
            </section>
        </Layout>
    )
}
