<script>
import youngAquathlonImg from '@/assets/young-aquathlon.jpg'
import triathlonImg from '@/assets/triathlon.jpg'
import aquathlonImg from '@/assets/aquathlon.jpg'
import bikeAndRunImg from '@/assets/bike-and-run.jpg'

export default {
  name: 'Events',
  data () {
    return {
      cards: [
        { title: 'Aquathlon jeunes', image: youngAquathlonImg, url: 'https://www.klikego.com/inscription/aquathlon-jeunes-de-gaillon-2025/triathlon/1643334174070-6' },
        { title: 'Triathlon des 2 amants', image: triathlonImg, url: 'https://www.klikego.com/inscription/triathlon-des-2-amants-2025/triathlon/1643334174070-5' },
        { title: 'Aquathlon des 2 amants', image: aquathlonImg, url: 'https://www.klikego.com/inscription/aquathlon-des-2-amants-2025/triathlon/1643334174070-7?' },
        { title: 'Bike and Run des Mousseaux', image: bikeAndRunImg, url: 'https://www.lntri.fr/agenda/bike-and-run-des-mousseaux/' },
      ],
    }
  },
}
</script>

<template>
  <div class="container">
    <h1 class="title">Nos différents événements</h1>
    <p class="subtitle">Vous trouverez ci-après nos différents événements de l'année</p>
    <div class="cards-section">
      <v-card
        v-for="card in cards"
        :key="card.title"
        class="card"
        color="blue"
        variant="elevated"
        rounded="xl"
        :image="card.image"
        :href="card.url"
        target="_blank"
        rel="noopener"
      >
        <v-card-title class="card-title">{{ card.title }}</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-top: 7vh;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  max-width: 40vw;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: white;
  max-width: 40vw;
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
  width: 100%;
  max-width: 25vw;
  min-width: 250px;
  min-height: 150px;
  height: 25vh;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
    min-height: 200px;
  }
  .card-title {
    font-size: 1rem;
    padding: 4px 8px;
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
