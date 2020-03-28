import Head from 'next/head'
import * as _ from 'lodash';
import humps from 'humps';
import moment from 'moment';
import { useAmp } from 'next/amp'
import Layout from '~/components/amp/Layout'

import fetch from 'isomorphic-unfetch';
import React from 'react';

export const config = { amp: true };

const availableTags = {
  'Makeup': { url: 'Makeup', title: 'Makeup' },
  'Skin Care': { url: 'Skin-Care', title: 'Skincare' },
  'Shopping Guides': { url: 'Shopping-Guides', title: 'Guides' },
  'how-to': { url: 'how-to', title: 'How-To\'s' },
  'Body': { url: 'Body', title: 'Bath, Body & Hair' },
  'Susies Lab': { url: 'susies-lab', title: 'Behind-The-Scenes of 100% PURE' },
};

const getSocialHtml = (article) => {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https://www.100percentpure.com/${ article.url }`;
  const twitterUrl = `https://twitter.com/home?status=Check out this blog post from 100%25 PURE&reg;: https://www.100percentpure.com/${ article.url }`;
  const pinterestUrl = `https://www.pinterest.com/pin/create/button?url=https://www.100percentpure.com/${ article.url }`;
  const emailUrl = `mailto:mailto:customerservice@puritycosmetics.com?subject=I wanted you to see this site&amp;body=Check out this site https://www.100percentpure.com/blogs/feed/${article.handle}.`;
  return '<section class="grid text-center p-v-sm text-md-lg">' +
            `<a class="icon-fallback-text no-borders inline m-h-sm" href="${facebookUrl}" target="_blank">` +
              '<span class="icon icon-facebook"></span>' +
              '<span class="fallback-text">Facebook</span>' +
            '</a>' +
            `<a class="icon-fallback-text no-borders inline m-h-sm" href="${twitterUrl}" target="_blank">` +
              '<span class="icon icon-twitter"></span>' +
              '<span class="fallback-text">Twitter</span>' +
            '</a>' +
            `<a class="icon-fallback-text no-borders inline m-h-sm pointer" href="${pinterestUrl}" target="_blank" data-pin-custom="true">` +
              '<span class="icon icon-pinterest"></span>' +
              '<span class="fallback-text">Pinterest</span>' +
            '</a>' +
            `<a class="icon-fallback-text no-borders inline m-h-sm pointer" href="${emailUrl}" target="_blank">` +
              '<span class="icon icon-mail"></span>' +
              '<span class="fallback-text">E-mail</span>' +
            '</a>' +
          '</section>';
};

const convertHtml = (article) => {
  const tags = Object.keys(availableTags).filter(key => article.tags.includes(key)).map(key => availableTags[key]);
  const author = article.author.replace('®', '<sup>®</sup>');
  const html = article.bodyHtml;
  const additionsHtml = '<div class="center-text l-s-1x main-font text-base l-h-2x">' +
    tags.map(tag => `<a href="/blogs/feed/tagged/${tag.url}">${tag.title}</a> <span class="closer-line inline m-r-xs">//</span> `).join('') +
    moment(article.createdAt).format('MMM D, YYYY') + ` <span class="closer-line inline m-r-xs">//</span> ${author} ` +
    '</div>' + getSocialHtml(article);
  return html
    .replace(/<div class="additions"><\/div>/, `<div class="additions">${additionsHtml}</div>`)
    .replace(/<img(.*?)\/?>/g, '<div class="fixed-container"><amp-img class="contain" layout="fill" $1></amp-img></div>')
    .replace(/<iframe.*?width="(.*?)".*?height="(.*?)".*?src="https:\/\/www\.youtube\.com\/embed\/(.*?)\/?".*?><\/iframe>/g, '<amp-youtube class="m-v" data-videoid="$3" width="$1" height="$2" layout="responsive"></amp-youtube>');
};

const Index = props => {
  const isAmp = useAmp();
  const article = props.article;
  const body = convertHtml(article);

  return (
    <Layout navigations={props.navigations}>
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
        <div className="blog-body supports-fontface">
          <div dangerouslySetInnerHTML={{__html: body}}/>
        </div>
        <ul className="inline-list">
          <li>
            <span>Tags: </span>
            {article.tags.split(',').map(tag => {
              const tagUrlName = tag;
              return (
                <><a href={`/blogs/feed/tagged/${tagUrlName}`}>{tag.trim()}</a>, </>
              );
            })}
          </li>
        </ul>
        <div id="related-article" className=""></div>
      </article>
    </Layout>
  )
};

const getNavigations = async () => {
  const res = await fetch('http://localhost:3000/api/navigations');
  const data = await res.json();
  return humps.camelizeKeys(data);
};

const getArticle = async (blogHandle, articleHandle) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${blogHandle}/${articleHandle}`);
  const data = await res.json();
  return humps.camelizeKeys(data);
};

Index.getInitialProps = async function({ query: { blogHandle, articleHandle } }) {
  const navigations = await getNavigations();
  const article = await getArticle(blogHandle, articleHandle);

  return {
    canonicalUrl: `https://www.100percentpure.com/blogs/${blogHandle}/${articleHandle}`,
    article,
    navigations
  };
};

export default Index;
