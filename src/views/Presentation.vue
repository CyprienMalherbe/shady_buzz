<script>
import aboutImg from '@/assets/about.jpeg'
import adultsImg from '@/assets/adults.jpg'
import licencedImg from '@/assets/licenced.jpg'
import eventImg from '@/assets/events.jpg'
import trainingImg from '@/assets/training.jpg'
import chartImg from '@/assets/chart.jpg'

export default {
  name: 'Presentation',
  data () {
    return {
      cards: [
        { title: 'À propos', image: aboutImg, route: 'about' },
        { title: 'Prestations', image: adultsImg, route: 'services' },
        { title: 'Galerie', image: chartImg, route: 'pictures' },
        { title: 'Tarifs', image: trainingImg, route: 'costs' },
        { title: 'Témoignages', image: eventImg, route: 'testimonies' },
        { title: 'Contact', image: licencedImg, route: 'contact' },
      ],
    }
  },
}
</script>

<template>
  <h2 class="big-title">Nos différentes sections</h2>
  <div class="cards-section">
    <v-card
      v-for="card in cards"
      class="card"
      color="blue"
      variant="elevated"
      rounded="xl"
      :image="card.image"
      v-bind="card.route ? { to: card.route } : { href: card.url, target: '_blank', rel: 'noopener' }"
    >
      <v-card-title class="title">{{ card.title }}</v-card-title>
    </v-card>
  </div>
</template>

<style scoped>
.big-title {
  color: white;
  display: flex;
  justify-content: center;
  font-size: clamp(2rem, 5vw, 4rem); /* adaptatif */
  margin-top: 2rem;
}
.cards-section {
  margin-top: 4vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
}

/* Cartes */
.card {
  width: 100%;
  max-width: 25vw;
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

.title {
  font-size: clamp(1rem, 2.5vw, 2.5rem);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background: rgba(0,0,0,0.4);
  text-align: center;
}

@media (max-width: 768px) {
  .cards-section {
    grid-template-columns: 1fr; /* une seule colonne */
    gap: 1rem;
  }

  .card {
    max-width: 90%;
    height: 30vh;
  }

  .title {
    font-size: 1.5rem;
  }
}
</style>
