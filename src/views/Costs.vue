<script>
import classicaFormulaImg from '@/assets/classica-formula.jpg'
import classicaFormulaLongImg from '@/assets/classica-formula-long.jpg'
import personnalizedFormulaImg from '@/assets/personnalized-formula.jpg'

export default {
  name: 'Costs',
  data () {
    return {
      cards: [
        { title: "Formule 'classique'", text: '200€', image: classicaFormulaImg },
        { title: "Formule 'classique longue'", text: '250€', image: classicaFormulaLongImg },
        { title: 'Formule personnalisée (durée et / ou thèmes)', text: 'À discuter ensemble', image: personnalizedFormulaImg },
      ],
    }
  },
}
</script>

<template>
  <div class="container">
    <h1 class="title">Mes tarifs</h1>

    <p class="subtitle">
      Ma force réside dans ma capacité à adapter la durée des jeux, les thèmes,
      leur difficulté ou encore leur originalité en fonction de vos envies
      et de votre événement.
    </p>

    <p class="subtitle">
      Le tarif peut donc varier selon plusieurs critères : le temps de déplacement,
      le temps de préparation des jeux, ainsi que la durée de l’animation sur place.
      Je vous invite à
      <router-link to="/contact" class="contact-link">me contacter</router-link>
      pour un devis personnalisé ou pour toute demande d’information.
    </p>

    <p class="subtitle">
      Les tarifs ci-dessous sont donnés à titre indicatif afin de vous permettre
      de vous faire une première idée.
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
        <div class="card-text">{{ card.text }}</div>
      </v-card>
    </div>
      <h1 class="title">Les formules</h1>

      <p class="subtitle">
        Globalement, je propose des animations composées de plusieurs manches,
        avec l’ensemble du matériel nécessaire.
      </p>

      <p class="subtitle">
        <strong>Formule « classique »</strong> :
        4 jeux avec 3 pauses, pour une durée d’animation d’environ 2 heures.
      </p>

      <p class="subtitle">
        <strong>Formule « classique longue »</strong> :
        6 jeux avec 5 pauses, pour une durée d’animation d’environ 3 heures.
      </p>

      <p class="subtitle">
        Ces formules comprennent le déplacement standard (dans un rayon de 20 km),
        le temps d’installation, ainsi que l’animation sur place.
      </p>

      <p class="subtitle">
        L’animation « classique » correspond à une sélection de jeux prédéfinis.
        En cas de personnalisation plus poussée (thèmes spécifiques, formats particuliers,
        contraintes spécifiques), une formule personnalisée sera proposée.
      </p>

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
