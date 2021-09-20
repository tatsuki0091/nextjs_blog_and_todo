import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { POST } from '../types/Types'
import { getAllPostsData } from '../lib/fetch'
import Post from '../components/Post'

interface STATICPROPS {
  posts: POST[]
}

const BlogPage: React.FC<STATICPROPS> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <p className="text-4xt mb-10">blog page</p>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
