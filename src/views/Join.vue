<script>
export default {
  name: 'Join',
}
</script>

<template>
  <div class="join-wrapper">
    <v-card
      variant="flat"
      class="join-card"
    >
      <v-card-title class="card-title">🎉 SHADY BUZZ</v-card-title>
      <v-card-text class="text">
        Transformez votre soirée en un moment inoubliable avec des animations uniques !
        <br><br>
        <ul class="advantages">
          <li>🟢 Buzzers et matériel complet fournis</li>
          <li>🟢 Jeux interactifs personnalisables</li>
          <li>🟢 Animateur passionné pour une ambiance garantie</li>
        </ul>
        <br>
        Contactez-moi dès maintenant pour réserver votre animation !
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="rgb(33, 150, 243)"
          variant="elevated"
          class="cta-btn"
          :to="'contact'"
        >
          Réservez votre animation
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.join-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.join-card {
  background-color: rgba(0, 0, 0, 0.25); /* léger contraste sur ton overlay */
  color: white;
  max-width: 38vw;
  width: 100%;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Titre */
.card-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
}

/* Texte */
.text {
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5;
  font-weight: bold;
}

/* Bullet points */
.advantages {
  list-style: none;
  padding-left: 0;
}
.advantages li {
  margin: 0.4rem 0;
  font-weight: bold;
}

/* Bouton CTA */
.cta-btn {
  margin-top: 1rem;
  transition: all 0.2s ease;
}
.cta-btn:hover {
  background-color: rgba(33, 150, 243, 0.9);
  color: white;
  transform: translateY(-1px);
}

/* Responsive */
@media (max-width: 768px) {
  .join-card {
    max-width: 90%;
    padding: 1rem;
  }
}
</style>
