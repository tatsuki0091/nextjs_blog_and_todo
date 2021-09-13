import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const CommentPage: React.FC = () => {
  return (
    <Layout title="Comment">
      <p className="text-4xt">comment page</p>
    </Layout>
  )
}
export default CommentPage
