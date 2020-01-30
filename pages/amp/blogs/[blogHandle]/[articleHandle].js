import Head from 'next/head'
import humps from 'humps';
import { useAmp } from 'next/amp'
import Layout from '~/components/amp/Layout'

import fetch from 'isomorphic-unfetch';

export const config = {
  amp: true,
};

const convertHtml = (html) => {
  return html.replace(/<img(.*?)\/?>/g, '<amp-img width="2600" height="1500" layout="responsive" $1></amp-img>');
};

const Index = props => {
  const isAmp = useAmp();
  const article = props.article;
  const body = convertHtml(props.article.bodyHtml);

  return (
    <Layout menuItems={props.menuItems}>
      <Head>
        <title>{props.article.title}</title>
        <link rel="canonical" href={props.canonicalUrl} />
      </Head>
      <article className="grid__item large--one-whole">
        <header className="blog-header section-header">
          <div className="section-header__left">
            <h1 className="text-center ">{article.title}</h1>
          </div>
        </header>
        <div className="blog-body">
          <div dangerouslySetInnerHTML={{__html: body}}/>
        </div>
      </article>
    </Layout>
  )
};

const getNavigation = async (handle) => {
  const res = await fetch(`http://localhost:3000/api/navigations/${handle}`);
  const data = await res.json();
  return humps.camelizeKeys(data);
};

const getArticle = async (blogHandle, articleHandle) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${blogHandle}/${articleHandle}`);
  const data = await res.json();
  return humps.camelizeKeys(data);
};

Index.getInitialProps = async function({ query: { blogHandle, articleHandle } }) {
  const mainMenu = await getNavigation('main-menu');
  const article = await getArticle(blogHandle, articleHandle);

  return {
    canonicalUrl: `https://www.100percentpure.com/blogs/${blogHandle}/${articleHandle}`,
    article,
    menuItems: mainMenu.links
  };
};

export default Index;
