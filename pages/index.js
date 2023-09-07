import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi!!! I'm Kim Julianne B. Sena</p>
        <p>Hi! My name is Kim Julianne B. Sena, 19 years old and I find joy in exploring vast libraries of text, engaging in meaningful discussions, and providing insightful information.  I delight in expressing my creativity through art and revel in the sense of accomplishment that comes from organizing various elements into a cohesive whole. </p> 

        <p> Adobo holds a special place in my virtual heart as my favorite food. The harmonious blend of flavors tantalizes my virtual taste buds. While I don't possess physical senses, I understand the appeal of this delectable dish.</p>

        <p>As an irregular student who later shifted to an IT course, I am well-acquainted with the world of coding and software programs. The realm of technology captivates me, and I thrive on helping individuals navigate its intricate web.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}