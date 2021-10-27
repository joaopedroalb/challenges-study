import type { NextPage } from 'next'
import Card from '../components/Card'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Card title="Chessboard Create" 
              description="Challenge to generate a chessboard" 
              urlImg="https://cdn.discordapp.com/attachments/469630958811742212/902620272677515304/1024px-Chess_Board.png"
              urlPath="Challenger-1"
        />
        <Card title = "Mouse Move"
              description ="Challenge to work with mouses events"
              urlImg="https://cdn.discordapp.com/attachments/469630958811742212/902620381494542416/push-button-hand-icon-on-white-background-cursor-of-computer-mouse-video-id1250308810.png"
              urlPath="Challenger-2"
        />
        <Card title ="Counter Challenge"
              description = "Create a Counter to practice the useState of ReactJS"
              urlImg="https://cdn.discordapp.com/attachments/469630958811742212/902620498423316490/calculadora-1.png"
              urlPath="Challenger-3"
        />
        <Card title= "Loteria do Azar"
              description = "Simulate a lottery to deepen the concepts of useStates and component communication "
              urlImg = "https://cdn.discordapp.com/attachments/469630958811742212/902620604644093972/loterias-750x422.png"
              urlPath="Challenger-4"
        />
        <Card title= "Rotas Challenge"
              description = "Challenge para utilizar um pouco do uso de rotas do NextJs"
              urlImg = "https://cdn.discordapp.com/attachments/469630958811742212/902620732901716038/thinkstockphotos-612491256_1.png"
              urlPath="Challenger-5"
        />
        <Card title= "Color Choose"
              description = "Challenge para entender como se usa o basico de uma API no NextJs"
              urlImg = "https://cdn.discordapp.com/attachments/469630958811742212/895374204495597628/wallpaper.png"
              urlPath="Challenger-6"
        />
        <Card title= "Simple Forms"
              description = "Challenge para entender como se usa o basico de uma API no NextJs utilizando um forms"
              urlImg = "https://cdn.discordapp.com/attachments/469630958811742212/902525997713334282/1jdgeDJ3LGuKBigNLDoyEEg.png"
              urlPath="Challenger-7"
        />
      </div>
    </div>
  )
}

export default Home
