import type { NextPage } from 'next'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
      <Card title="Chess Challenge" 
            description="Challenge to create a chess board interface" 
            urlImg="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chess_Board.svg/1024px-Chess_Board.svg.png"
            urlPath="challenger-1"/>
      </div>
    </div>
  )
}

export default Home
