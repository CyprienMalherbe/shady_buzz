<script>
export default {
  name: 'TestimoniesCarousel',
  data() {
    return {
      testimonies: [
        {
          name: 'Rachel M.',
          role: 'Participante',
          rating: 5,
          text: 'Une animation incroyable, tout le monde a adoré !',
        },
        {
          name: 'Alexis R.',
          role: 'Parent',
          rating: 4,
          text: 'On s’est éclatés avec les quiz, très professionnel.',
        },
      ],
      carouselIndex: 0,
    };
  },
  mounted() {
    // Défilement automatique toutes les 5 secondes
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    nextSlide() {
      this.carouselIndex = (this.carouselIndex + 1) % this.testimonies.length;
    },
    prevSlide() {
      this.carouselIndex = (this.carouselIndex - 1 + this.testimonies.length) % this.testimonies.length;
    },
  },
};
</script>

<template>
  <div class="container">
    <h1 class="title">Ils ont aimé !</h1>
    <div class="carousel">
      <v-card
        v-for="(t, index) in testimonies"
        :key="t.name"
        class="testimonial-card"
        color="blue lighten-2"
        rounded="xl"
        elevation="6"
        v-show="index === carouselIndex"
        transition="fade-transition"
      >
        <v-card-text class="testimonial-text">
          "{{ t.text }}"
        </v-card-text>
        <v-card-actions class="testimonial-footer">
          <div class="stars">
            <v-icon v-for="n in 5" :key="n" color="yellow darken-3">
              {{ n <= t.rating ? 'mdi-star' : 'mdi-star-outline' }}
            </v-icon>
          </div>
          <div class="author">
            <strong>{{ t.name }}</strong>, {{ t.role }}
          </div>
        </v-card-actions>
      </v-card>

      <div class="carousel-controls">
        <v-btn icon @click="prevSlide">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon @click="nextSlide">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
      <p class="subtitle">J'espère avoir plus de témoignages à l'avenir 😊.</p>
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
  margin-top: 7vh;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: white;
  max-width: 40vw;
  text-align: center;
  margin-top: 7vh;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
}

.carousel {
  position: relative;
  width: 80%;
  max-width: 700px;
}

.testimonial-card {
  padding: 1.5rem;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-text {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stars {
  display: flex;
}

.author {
  font-size: 0.9rem;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 10; /* Assure que les boutons sont au-dessus des cartes */
  padding: 0 10px;
}

.carousel-controls v-btn {
  pointer-events: auto; /* Assure que les boutons réagissent aux clics */
  color: white;
  background-color: rgba(0,0,0,0.3);
}


.fade-transition-enter-active,
.fade-transition-leave-active {
  transition: opacity 0.5s;
}
.fade-transition-enter-from,
.fade-transition-leave-to {
  opacity: 0;
}

/* Mobile */
@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
  }
  .testimonial-text {
    font-size: 1rem;
  }
  .carousel-controls v-btn {
    background-color: rgba(0,0,0,0.5);
  }
}
</style>
