<script>
export default {
  name: 'About',
}
</script>

<template>
  <div class="container">
    <h1 class="title">Qui suis-je ?</h1>

    <p class="subtitle">
      À force de passion, de temps consacré et d’investissements dans du matériel d’animation,
      mon entourage n’a cessé de m’encourager à franchir le pas. Il se ressentait clairement que
      j’y prenais goût et que cette activité me faisait vibrer.
    </p>

    <p class="subtitle">
      Ainsi, en tant que bonne résolution pour 2026 et du haut de mes 35 ans,
      j’ai décidé de me lancer dans cette aventure. Une aventure qui m’emmènera là où elle doit m’emmener,
      avec l’envie de durer… et surtout de m’amuser autant que vous 😊.
    </p>

    <h1 class="second-title">Pourquoi « SHADY BUZZ » ?</h1>

    <p class="subtitle">
      <strong>SHADY</strong> est mon surnom depuis de nombreuses années,
      inspiré du rappeur <strong>Eminem</strong>, dont j’étais fan dans ma jeunesse.
      Quant à <strong>BUZZ</strong>… disons que cela vient peut-être d’un léger manque
      d’inspiration sur le moment 😊 — mais surtout d’un clin d’œil évident aux buzzers
      et à l’univers de l’animation.
    </p>

    <img class="image" src="@/assets/myself.jpeg" alt="Photo de l'animateur SHADY BUZZ">

    <p class="subtitle">
      N’hésitez pas à parcourir les différentes rubriques du site, et notamment
      la section <RouterLink to="/pictures" class="link">Galerie</RouterLink>,
      pour vous faire une idée de l’ambiance et de l’univers proposés 😊.
    </p>
  </div>
</template>

<style scoped>
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

.title,
.second-title {
  margin-top: 4vh;
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
  max-width: 16vw;
  width: 100%;
  max-height: 45vh;
  border-radius: 10px;
  margin-top: 1vh;
  margin-bottom: 4vh;
}

/* Mobile */
@media (max-width: 768px) {
  .title,
  .second-title {
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
