import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../../components/amp/Layout'
import Byline from '../../components/amp/Byline'

import fetch from 'isomorphic-unfetch';

export const config = {
  amp: true,
};

const Index = props => {
  const isAmp = useAmp();

  return (
    <Layout>
      <Head>
        <title>The Cat</title>
      </Head>

      <style jsx>{`
        h1 {
          margin-bottom: 5px;
        }
        p {
          font-size: 18px;
          line-height: 30px;
          margin-top: 30px;
        }
        .caption {
          color: #ccc;
          margin-top: 0;
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </Layout>
  )
};

Index.getInitialProps = async function() {
  return {}
};

export default Index;
