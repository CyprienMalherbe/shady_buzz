<script>
import buzzersImg from '@/assets/buzzers.jpg'
import speakersImg from '@/assets/speakers.jpg'
import projecteurImg from '@/assets/projecteur.jpg'
import whiteBoardImg from '@/assets/whiteboard.jpg'
import brainImg from '@/assets/brain.jpg'

export default {
  name: 'Costs',
  data () {
    return {
      cards: [
        { title: "Quiz intéractifs", text: "Blind tests, Culture G., Quiz à thème...", image: buzzersImg },
        { title: "Jeux avec ardoise et tableau", text: "'Au plus proche', 'Famille en carton'...", image: whiteBoardImg },
        { title: 'Jeux visuels', text: "'Devine qui c'est', 'ShakiRammstein'...", image: projecteurImg },
        { title: 'Jeux sonores', text:"Blind tests, 'Sons communs'...", image: speakersImg },
        { title: 'Ma créativité, ma sociabilité et mon inventivité 😊', text:"Et mon humour aussi 😊", image: brainImg },
      ],
    }
  },
}
</script>

<template>
  <div class="container">
    <h1 class="title">Mes prestations</h1>
<p class="subtitle">
  Je me déplace dans l’Eure et ses environs (selon la distance à parcourir).
  Si vous vous demandez si une intervention est possible chez vous, n’hésitez pas à
  <router-link to="/contact" class="contact-link">me contacter</router-link>
  afin que nous en discutions 😊.
</p>

<p class="subtitle">
  J’anime des jeux aussi bien à domicile que dans des salles privatisées
  (anniversaires, EVG / EVJF, mariages, à domicile, bars…), mais également dans tout type d'établissement
  (entreprises, écoles, EHPAD…).
</p>

<p class="subtitle">
  Je dispose d’un matériel sonore adapté à des groupes d’environ 60 personnes
  dans une salle des fêtes. Au-delà, cela devient techniquement plus complexe.
</p>

<p class="subtitle">
  Je m’adapte à vos demandes en semaine comme en week-end,
  sous réserve de disponibilité bien évidemment 😊.
</p>

<p class="subtitle">
  Enfin, je suis animateur, et non DJ.
  Je peux assurer une ambiance musicale de fond pendant les jeux,
  mais je ne propose pas de prestations de mixage ou de soirée dansante jusqu’au bout de la nuit 😊.
</p>
    <div class="cards-section">
      <v-card
        v-for="card in cards"
        :key="card.title"
        class="card"
        color="blue"
        variant="elevated"
        rounded="xl"
        :image="card.image"
      >
        <v-card-title class="card-title">{{ card.title }}</v-card-title>
        <!-- Texte qui apparaît au survol -->
        <div class="card-text">{{ card.text }}</div>
      </v-card>
    </div>

  </div>
</template>

<style scoped>
  .contact-link {
  color: #4fc3f7;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.contact-link:hover {
  color: #81d4fa;
}

.title {
  margin-top: 7vh;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  max-width: 40vw;
  text-align: center;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: white;
  max-width: 40vw;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.cards-section {
  margin-top: 4vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
  width: 100%;
}

.card {
  position: relative;
  width: 100%;
  max-width: 25vw;
  min-width: 250px;
  min-height: 150px;
  height: 25vh;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.card-title {
  font-size: 1.2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background: rgba(0,0,0,0.4);
  text-align: center;
  padding: 5px 10px;
  z-index: 2;
}

.card-text {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: 24px;
  color: white;
  background: rgba(0,0,0,0.5);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
}

.card:hover .card-text {
  opacity: 1;
}

/* Mobile */
@media (max-width: 768px) {
  .cards-section {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
  .card {
    max-width: 100%;
    height: auto;
    min-height: 180px;
  }
  .card-title {
    font-size: 1rem;
    padding: 4px 8px;
  }
  .card-text {
    font-size: 18px;
    padding: 0.4rem 0.8rem;
  }
  .title {
    font-size: 1.5rem;
    max-width: 90%;
    margin-top: 5vh;
  }
  .subtitle {
    font-size: 1rem;
    max-width: 90%;
  }
}
</style>
