<script>
export default {
  name: 'Adults',
}
</script>

<template>
  <div class="container">
    <h1 class="title">Bienvenue au TVT</h1>
    <p class="subtitle">Envie de nager, pédaler et courir dans la joie et la
      bonne humeur ? Que vous soyez novice ou triathlète chevronné, rejoignez la grande famille
      du TVT ! Chez nous, l'essentiel est de prendre du plaisir. C'est pourquoi nous vous proposons des
      entraînements pour tous les niveaux, à suivre selon vos envies.
    </p>
    <p class="subtitle">
      Mesdames, n'hésitez plus ! Avec 23 % de femmes, notre club est l'un des plus féminins de la région.
      C'est le moment de nous rejoindre et partager des moments sportifs et festifs !
    </p>
    <p class="subtitle">
      Tout au long de l'année, nous organisons un stage pour adultes pour progresser ensemble. Pour ceux
      qui ont la fibre compétitrice, le club est fier d'aligner des équipes Hommes et Femmes en Grand Prix.
    </p>
    <img class="image" src="@/assets/adults-section.jpg" alt="Adultes TVT">
    <p class="subtitle">Curieux de découvrir le triathlon avec
      nous ? Nous vous invitons à participer à
      une séance d'essai gratuite pour vous
      familiariser avec le club et les
      entraînements. Notez bien la date : la reprise est fixée
      au <span class="important-date">lundi 22 septembre</span>.
    </p>
    <p class="subtitle">
      N'hésitez pas à aller faire un tour dans nos différentes rubriques, et notamment
      la rubrique <RouterLink to="/training" class="link">Créneaux</RouterLink> pour connaître les horaires d'entraînements
    </p>
  </div>
</template>

<style scoped>
.important-date {
  font-weight: bold;
  text-decoration: underline;
}

.link {
  font-weight: bold;
  text-decoration: underline;
  color: #4fc3f7;
  cursor: pointer;
  transition: color 0.3s ease;
}

.link:hover {
  color: #82e9de;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

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

.image {
  max-width: 70vw;
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 1vh;
  margin-bottom: 8vh;
}

/* Responsive mobile */
@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
    max-width: 90%;
    margin-top: 5vh;
  }

  .subtitle {
    font-size: 1rem;
    max-width: 90%;
    margin-bottom: 15px;
  }

  .image {
    max-width: 95%;
    margin-bottom: 5vh;
  }
}
</style>
