import Parser from 'rss-parser';
import {PermawebNewsFeed, PermawebNewsArticle} from '../types';

export default async function getPermawebNewsFeed(): Promise<
  PermawebNewsArticle[]
> {
  try {
    const parser = new Parser<PermawebNewsFeed>();
    const feed = await parser.parseURL('https://permaweb.news/feed');

    return feed.items;
  } catch {
    return [];
  }
}
