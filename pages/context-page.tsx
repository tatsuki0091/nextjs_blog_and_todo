import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const ContextPage: React.FC = () => {
  return (
    <Layout title="Context">
      <p className="text-4xt">context page</p>
    </Layout>
  )
}
export default ContextPage
