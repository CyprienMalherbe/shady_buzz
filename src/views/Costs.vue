<script>
export default {
  name: 'Costs',
  data () {
    return {
      formulas: [
        { title: "Formule 'classique'", price: '200 €' },
        { title: "Formule 'classique longue'", price: '250 €' },
        { title: 'Formule personnalisée (durée et / ou thèmes)', price: 'À convenir ensemble' },
      ],
    }
  },
}
</script>

<template>
  <div class="container">
    <h1 class="title">Les tarifs</h1>

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

    <!-- Nouvelle liste -->
    <ul class="formula-list">
      <li v-for="formula in formulas" :key="formula.title" class="formula-item">
        <span class="formula-title">{{ formula.title }}</span>
        <span class="formula-price">{{ formula.price }}</span>
      </li>
    </ul>

    <h1 class="title">Les formules</h1>

    <p class="subtitle">
      Globalement, je propose des animations composées de plusieurs manches,
      avec l’ensemble du matériel nécessaire.
    </p>

    <p class="subtitle">
      <strong>Formule « classique »</strong> :
      4 jeux avec 3 pauses, pour une durée d’animation d’environ 2 heures (hors installation / désinstallation).
    </p>

    <p class="subtitle">
      <strong>Formule « classique longue »</strong> :
      6 jeux avec 5 pauses, pour une durée d’animation d’environ 3 heures (hors installation / désinstallation).
    </p>

    <p class="subtitle">
      Les tarifs indiqués comprennent (en plus de l'animation) l'installation, la désinstallation,
      et le déplacement standard (dans un rayon de 20 km).
    </p>

    <p class="subtitle">
      L’animation « classique » correspond à une sélection de jeux prédéfinis.
      En cas de personnalisation plus poussée (thèmes spécifiques, formats particuliers,
      contraintes spécifiques), une formule personnalisée sera proposée.
    </p>

  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

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
  margin-top: 3vh;
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

/* Liste stylée */
.formula-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  width: 100%;
  max-width: 500px;
}

.formula-item {
  display: flex;
  justify-content: space-between;
  background: rgba(255,255,255,0.1);
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  color: white;
  font-size: 1.2rem;
  transition: transform 0.2s ease, background 0.2s ease;
}

.formula-title {
  font-weight: bold;
}

.formula-price {
  font-style: italic;
}

/* Mobile */
@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
    max-width: 90%;
    margin-top: 5vh;
  }
  .subtitle {
    font-size: 1rem;
    max-width: 90%;
  }
  .formula-item {
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
  }
  .formula-price {
    margin-top: 0.3rem;
  }
}
</style>
