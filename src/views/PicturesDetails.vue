<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePicturesStore } from '@/stores/pictures'

const route = useRoute()
const picturesStore = usePicturesStore()
const card = picturesStore.getBySlug(route.params.slug)

const subtitles = computed(() => {
  if (!card) return []
  return Object.keys(card)
    .filter(k => /^subtitle\d+$/.test(k) && k !== 'subtitle1') // garde subtitle2,3,...
    .sort((a, b) => Number(a.slice(8)) - Number(b.slice(8)))   // tri dans l’ordre
    .map(k => card[k])
    .filter(Boolean) // enlève les vides
})
</script>

<template>
  <div v-if="card">
    <div class="container">
      <h1 class="title">{{ card.title }}</h1>

      <p class="subtitle">{{ card.subtitle1 }}</p>

      <img v-if="card.images?.length" class="image" :src="card.images[0]" alt="" />

      <p
        v-for="(subtitle, index) in subtitles"
        :key="index"
        class="subtitle"
        v-html="subtitle"
      ></p>

      <div v-if="card.images?.length > 1" class="gallery">
        <h2 class="gallery-title">Plus de photos</h2>
        <div class="gallery-grid">
          <img
            v-for="(img, idx) in card.images.slice(1)"
            :key="idx"
            :src="img"
            class="gallery-item"
          />
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

.title {
  margin-top: 5vh;
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
  white-space: pre-wrap;
}

.subsubtitle {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: white;
  max-width: 40vw;
}

.image {
  max-width: 40vw;
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 1vh;
  margin-bottom: 8vh;
}

.gallery {
  margin-top: 4rem;
  width: 100%;
  max-width: 80vw;
}

.gallery-title {
  color: white;
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  width: 100%;
  height: 250px;
  object-fit: cover; /* Pour que les images aient toutes la même taille proprement */
  border-radius: 10px;
  transition: transform 0.3s;
}

.gallery-item:hover {
  transform: scale(1.02);
}

/* Responsive mobile */
@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
    max-width: 90%;
    margin-top: 5vh;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
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
