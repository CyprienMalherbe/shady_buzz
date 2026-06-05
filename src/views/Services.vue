<script setup>
import { ref } from 'vue'

// Importation propre des images pour Vite
import img1 from '@/assets/guitrancourt-02.jpg'
import img2 from '@/assets/la-base-03-1.jpeg'
import img3 from '@/assets/parvis-debut-mars-2026-1.jpeg'

// Création d'un tableau pour manipuler les images facilement
const images = [img1, img2, img3]

// État pour gérer la photo actuellement affichée dans la lightbox
const selectedImage = ref(null)

const openZoom = (url) => {
  selectedImage.value = url
  // Empêche le scroll du corps de la page quand la lightbox est ouverte
  document.body.style.overflow = 'hidden'
}

const closeZoom = () => {
  selectedImage.value = null
  // Réactive le scroll
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <div class="container">
    <h1 class="title">Mes prestations</h1>
    <p class="subtitle">
      Je me déplace dans l’Eure et ses environs (selon la distance à parcourir).
      Si vous vous demandez si une intervention est possible chez vous, n’hésitez pas à
      <router-link to="/contact" class="contact-link">me contacter</router-link>
      afin que nous en discutions 😊.
    </p>

    <p class="subtitle">
      J’anime des jeux aussi bien à domicile que dans des salles privatisées
      (anniversaires, EVG / EVJF, mariages, bars…), mais également dans tout type d'établissement
      (entreprises, écoles, EHPAD…).
    </p>

    <p class="subtitle">
      Je dispose d’un matériel sonore adapté à des groupes d’environ 60 personnes
      dans une salle des fêtes. Au-delà, cela devient techniquement plus complexe.
    </p>

    <p class="subtitle">
      Je m’adapte à vos demandes en semaine comme en week-end,
      sous réserve de disponibilité bien évidemment 😊.
    </p>

    <p class="subtitle">
      Enfin, je suis animateur, et non DJ.
      Je peux assurer une ambiance musicale de fond pendant les jeux,
      mais je ne propose pas de prestations de mixage ou de soirée dansante jusqu’au bout de la nuit 😊.
    </p>

    <div class="gallery-section">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        :alt="'Animation ' + (index + 1)"
        class="gallery-image zoom-trigger"
        @click="openZoom(img)"
      />
    </div>

    <Transition name="fade">
      <div v-if="selectedImage" class="lightbox" @click="closeZoom">
        <button class="close-btn" @click="closeZoom">&times;</button>
        <div class="lightbox-content">
          <img :src="selectedImage" class="lightbox-img" @click.stop />
        </div>
      </div>
    </Transition>

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

/* --- LOGIQUE DE LA GALERIE --- */

.gallery-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 90%;
  max-width: 1200px;
}

.gallery-image {
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.zoom-trigger {
  cursor: zoom-in;
}

.zoom-trigger:hover {
  transform: scale(1.03);
  filter: brightness(0.9);
}

/* --- SYSTEME DE LIGHTBOX --- */

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
  backdrop-filter: blur(5px);
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox-img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  z-index: 10000;
  line-height: 1;
}

/* Animation de transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
  .gallery-section {
    flex-direction: column; /* Aligne verticalement sur mobile */
    align-items: center;
    gap: 15px;
  }
  .gallery-image {
    width: 85%;       /* Prend une largeur raisonnable sur l'écran du téléphone */
    max-width: 280px; /* Évite que l'image devienne trop grande ou trop haute */
    height: auto;     /* Laisse l'image garder ses proportions d'origine (plus d'étirement !) */
  }
  .close-btn {
    top: 10px;
    right: 20px;
  }
}
</style>
