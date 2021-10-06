import type { NextPage } from 'next'
import Card from '../components/Card'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Card title="Chess Challenge" 
              description="Challenge to create a chess board interface" 
              urlImg="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chess_Board.svg/1024px-Chess_Board.svg.png"
              urlPath="Challenger-1"
        />
        <Card title = "Mouse Challenge"
              description ="Challenge to work with mouses events"
              urlImg="https://media.istockphoto.com/videos/push-button-hand-icon-on-white-background-cursor-of-computer-mouse-video-id1250308810?s=640x640"
              urlPath="Challenger-2"
        />
        <Card title ="Counter Challenge"
              description = "Create a Counter to training the useState of react js"
              urlImg="https://www.historiadetudo.com/wp-content/uploads/2015/03/calculadora-1.jpg"
              urlPath="Challenger-3"
        />
        <Card title= "Loteria do Azar"
              description = "Simulate a lottery to deepen the concepts of useStates and component communication "
              urlImg = "https://fdr.com.br/wp-content/uploads/2020/07/loterias-750x422.png"
              urlPath="Challenger-4"
        />
        <Card title= "Rotas Challenge"
              description = "Challenge para utilizar um pouco do uso de rotas do NextJs"
              urlImg = "https://s2.glbimg.com/V-XqeFCP1G9uD39J7r8wM3jrG5Q=/620x430/e.glbimg.com/og/ed/f/original/2017/03/14/thinkstockphotos-612491256_1.jpg"
              urlPath="Challenger-5"
        />
        <Card title= "Color Choose"
              description = "Challenge para entender como se usa o basico de uma API no NextJs"
              urlImg = "https://cdn.discordapp.com/attachments/469630958811742212/895374204495597628/wallpaper.png"
              urlPath="Challenger-6"
        />
      </div>
    </div>
  )
}

export default Home
