import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const BlogPage: React.FC = () => {
  return (
    <Layout title="Blog">
      <p className="text-4xt">blog page</p>
    </Layout>
  )
}
export default BlogPage
