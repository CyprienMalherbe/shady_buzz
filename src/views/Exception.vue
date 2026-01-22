<script>
export default {
  name: 'Exception',
}
</script>

<template>
  <div class="home">
    <v-card variant="flat" class="join-card">
      <v-card-title class="card-title">🎉 OFFRE DE LANCEMENT 🎉</v-card-title>

      <v-card-text class="text">
        <p class="intro">
          Soyez dans les premiers à réserver votre événement et vous aurez - 40% sur votre animation !
        </p>
      </v-card-text>

      <v-card-actions class="actions">
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
/* Texte dans le fond sombre */
.join-card {
  flex: 1;                  /* prend tout l’espace restant */
  min-width: 400px;         /* largeur minimale pour le texte */
  max-width: 700px;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: rgba(0,0,0,0.4);
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

/* Titres et texte */
.card-title {
  font-size: clamp(1.5rem, 2.5vw, 1.8rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  white-space: normal;      /* 🔥 autorise le retour à la ligne */
  word-break: break-word;   /* 🔥 évite les coupures bizarres */
}


.text {
  text-align: left;
  line-height: 1.6;
  font-weight: 500;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
}

.intro {
  margin-bottom: 1rem;
}

.actions {
  display: flex;
  justify-content: flex-start;
}

.cta-btn {
  margin-top: 1rem;
  transition: all 0.2s ease;
}

.cta-btn:hover {
  background-color: rgba(33, 150, 243, 0.9);
  color: white;
  transform: translateY(-1px);
}

/* Responsive : tablette et mobile */
@media (max-width: 1024px) {
  .join-card {
    width: 90%;
    min-width: unset;
  }

  .actions {
    justify-content: center;
  }

  .text {
    width: 100%;           /* prend toute la largeur du card */
  }
}

@media (max-width: 768px) {
  .join-card {
    width: 95%;
    padding: 1rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .text {
    font-size: 0.95rem;
  }
}
</style>
