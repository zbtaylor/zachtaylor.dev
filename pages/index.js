import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Emoji from "../components/emoji";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { getSortedProjectsData } from "../lib/projects";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Emoji hexcode="&#128221;" />
        <h2 className="heading">Blog</h2>
        <ul className="list">
          {allPostsData.map(({ id, date, title }) => (
            <li className="list-item" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="light-text">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Emoji hexcode="&#127959;&#65039;" />
        <h2 className="heading">Projects</h2>
        <ul className="list">
          {allProjectsData.map(
            ({ id, date, title, repo, link, description }) => (
              <li className="list-item" key={id}>
                <Link href={`${link ? link : repo}`}>{title}</Link>
                <small className="light-text">
                  <p>{description}</p>
                </small>
                <Link href={`${repo}`}>
                  <a className="button button-small pull-right">Repo</a>
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}
