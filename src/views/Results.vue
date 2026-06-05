<script>
export default {
  name: 'Results',
};
</script>

<template>
  <div class="container">
    <h1 class="title">Résultats mensuels à 'La Base'</h1>

    <div class="action-wrapper">
      <p class="action-text">
        Consultez le classement en temps réel, les scores des manches et l'historique complet :
      </p>
      <a
        href="https://docs.google.com/spreadsheets/d/14VdKoYo8QVs8AbKn3Re8vgZtiNUVsTmD3ZxhdEIPi7w/edit?gid=0#gid=0"
        target="_blank"
        rel="noopener noreferrer"
        class="sheet-button"
      >
        📊 Voir le Classement Mensuel
      </a>
    </div>

    <div class="rules">
      <h2 class="rules-title">Règlement</h2>

      <ul class="rules-list">
        <li>
          <span>🟢</span>
          <div>Les quiz ont lieu tous les jeudis soirs à partir de 20h30 à <strong>‘La Base’ à Vernon</strong> pour une durée d’environ 2h</div>
        </li>

        <li>
          <span>🟢</span>
          <div>12 équipes max peuvent participer, pensez à réserver auprès du bar</div>
        </li>

        <li>
          <span>🟢</span>
          <div>L’équipe victorieuse de chaque session se voit offrir une consommation par membre</div>
        </li>

        <li>
          <span>🟢</span>
          <div>Toute équipe ayant participé à l’entièreté d’une session se voit attribuer des points pour le classement mensuel</div>
        </li>

        <li>
          <span>🟢</span>
          <div>À la fin de chaque mois, la meilleure équipe se voit offrir une réduction de 50€ sur sa consommation, la deuxième 25€, et la troisième 10€</div>
        </li>

        <li>
          <span>🟢</span>
          <div>Au début de chaque mois, les points de toutes les équipes sont remis à zéro</div>
        </li>

        <li>
          <span>🟢</span>
          <div>Les points après chaque manche sont attribués comme suit : <br class="mobile-break"> 1er = 20 pts ; 2ème = 15 pts ; 3ème = 12 pts ; 4ème = 10 pts ; 5ème = 8 pts ; 6ème = 7 pts ; 7ème = 6 pts ; 8ème = 5 pts ; 9ème = 4 pts ; 10ème = 3 pts ; 11ème = 2 pts ; 12ème = 1 pt</div>
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
  box-sizing: border-box;
  padding: 2rem 1.5rem;
}

.title {
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
}

/* SECTION BOUTON */
.action-wrapper {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.action-text {
  color: #e0e0e0;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.sheet-button {
  display: inline-block;
  background: #21a366; /* Vert Google Sheets */
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(33, 163, 102, 0.4);
  transition: all 0.3s ease;
}

.sheet-button:hover {
  background: #1e925b;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(33, 163, 102, 0.6);
}

.sheet-button:active {
  transform: translateY(-1px);
}

/* REGLEMENT */
.rules {
  margin-top: 4rem;
  width: 100%;
  max-width: 900px;
  color: white;
  text-align: left;
}

.rules-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
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
  line-height: 1.6;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}

.rules-list li:hover {
  transform: translateY(-2px);
}

.mobile-break {
  display: none;
}

/* MOBILE RESPONSIVE */
@media (max-width: 768px) {
  .container {
    padding: 1.5rem 1rem;
  }

  .title {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  .action-wrapper {
    padding: 1.5rem 1rem;
  }

  .action-text {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }

  .sheet-button {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
    width: 100%; /* Le bouton prend toute la largeur sur petit écran */
    box-sizing: border-box;
  }

  .rules {
    margin-top: 3rem;
  }

  .rules-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .rules-list li {
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
  }

  .mobile-break {
    display: block;
  }
}
</style>
