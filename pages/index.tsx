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
              urlPath="challenger-1"
        />
        <Card title = "Mouse Challenge"
              description ="Challenge to work with mouses events"
              urlImg="https://media.istockphoto.com/videos/push-button-hand-icon-on-white-background-cursor-of-computer-mouse-video-id1250308810?s=640x640"
              urlPath="challenger-2"
        />
      </div>
    </div>
  )
}

export default Home
