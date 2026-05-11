<script>
export default {
  name: 'Results',
};
</script>

<template>
  <div class="container">
    <h1 class="title">Résultats mensuels à 'La Base'</h1>

    <!-- GOOGLE SHEETS -->
    <div class="sheet-wrapper">
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTRZ4TwdLMmUf77ViE1TrrSM0xiXwBQq1a3AVp7sowrzXCGdU5GBYrFJfNBsND-rra6KAxvdwYhjXdj/pubhtml?gid=0&widget=true&headers=false"
        class="sheet-iframe"
      ></iframe>
    </div>

    <!-- REGLEMENT -->
    <div class="rules">
      <h2 class="rules-title">Règlement</h2>

      <ul class="rules-list">
        <li>
          🟢 Les quiz ont lieu tous les jeudis soirs à partir de 20h30 à
          <strong>‘La Base’ à Vernon</strong> pour une durée d’environ 2h
        </li>

        <li>
          🟢 12 équipes max peuvent participer, pensez à réserver auprès du bar
        </li>

        <li>
          🟢 L’équipe victorieuse se voit offrir une réduction sur ses consommations
        </li>

        <li>
          🟢 Toute équipe ayant participé à l’entièreté d’une session se voit attribuer des points pour le classement mensuel
        </li>

        <li>
          🟢 À la fin de chaque mois, l’équipe avec le plus de points est déclarée championne et a le privilège d’être la prochaine cible à abattre
        </li>

        <li>
          🟢 Au début de chaque mois, les points de toutes les équipes sont remis à zéro
        </li>

        <li>
          🟢 Les points après chaque manche sont attribués comme suit : 1er = 20 pts ; 2ème = 15 pts ; 3ème = 12 pts ; 4ème = 10 pts ; 5ème = 8 pts ; 6ème = 7 pts ; 7ème = 6 pts ; 8ème = 5 pts ; 9ème = 4 pts ; 10ème = 3 pts ; 11ème = 2 pts ; 12ème = 1 pt
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 2rem 0;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
}

/* SHEET */
.sheet-wrapper {
  width: 80%;
  height: 85vh;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.sheet-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* REGLEMENT */
.rules {
  margin-top: 3rem;
  width: 80%;
  max-width: 900px;
  color: white;
  text-align: left;
}

.rules-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.rules-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rules-list li {
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem 1.2rem;
  border-radius: 12px;
  line-height: 1.5;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.rules-list li:hover {
  transform: translateY(-2px);
}

/* MOBILE */
@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
  }

  .sheet-wrapper {
    width: 95%;
    height: 500px;
  }

  .rules {
    width: 95%;
  }

  .rules-title {
    font-size: 1.4rem;
  }
}
</style>
