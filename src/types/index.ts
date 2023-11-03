export interface PermawebNewsFeed {
  items: PermawebNewsArticle[];
}

export interface PermawebNewsArticle {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  'content:encoded': string;
  'content:encodedSnippet': string;
  'dc:creator': string;
  comments: string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories: string[];
  isoDate: string;
}
