import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <p className="text-4xt">Welcome to Nextjs</p>
    </Layout>
  )
}
export default Home
