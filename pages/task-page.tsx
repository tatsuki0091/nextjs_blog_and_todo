import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const TaskPage: React.FC = () => {
  return (
    <Layout title="Task">
      <p className="text-4xt">todos page</p>
    </Layout>
  )
}
export default TaskPage
