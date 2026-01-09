<script>
import competitionLicenceImg from '@/assets/competition-licence.jpg'
import spareTimeLicenceImg from '@/assets/spare-time-licence.jpg'
import awakeningLicenceImg from '@/assets/awakening-licence.jpg'
import veryYoungLicenceImg from '@/assets/very-young-licence.jpg'
import youngLicenceImg from '@/assets/young-licence.jpg'

export default {
  name: 'Licences',
  data () {
    return {
      cards: [
        { title: 'Compétition', text: '205€', image: competitionLicenceImg },
        { title: 'Loisir', text: '160€', image: spareTimeLicenceImg },
        { title: 'Éveil', text: '35€', image: awakeningLicenceImg },
        { title: 'Mini-poussin - Poussin - Pupille - Benjamin', text: '120€', image: veryYoungLicenceImg },
        { title: 'Minime - Cadet - Junior', text: '160€', image: youngLicenceImg },
      ],
    }
  },
}
</script>

<template>
  <div class="container">
    <h1 class="title">Nos licences</h1>
    <p class="subtitle">L'adhésion au Team Val'Eure Triathlon vous permet d'accéder au plan d'entraînement ainsi que jusqu'à 8 créneaux d'entraînements collectifs hebdomadaires encadrés dans les trois disciplines (natation, course à pied et vélo + un créneau de renfo / PPG), de quoi réaliser vos objectifs, qu'il s'agisse de réaliser un premier enchaînement complet, d'avoir une pratique orientée vers le plaisir et le défi personnel ou bien de performer sur courte distance, distance olympique ou encore vous lancer sur de la longue distance.</p>
    <p class="subtitle">Pour les enfants de l'école de Triathlon à qui sont proposés 4 créneaux par semaine, l'adhésion comprend également le prêt de la trifonction ainsi que les inscriptions aux épreuves FFTri.</p>
    <p class="subtitle">Si vous êtes éligible, le pass sport peut être utilisé pour le paiement de la licence, ainsi que la carte atout Normandie pour les moins de 25 ans.</p>
    <p class="subtitle">Pour le public adultes, deux types de licences sont proposés: loisir et compétition. Aucune différence au quotidien dans le club, mais un.e licencié.e adulte "loisir" devra souscrire à un pass compétition délivré par la ligue pour s'aligner sur une course fédérale.</p>
    <p class="subtitle">À très vite en séance !</p>
    <div class="cards-section">
      <v-card
        v-for="card in cards"
        :key="card.title"
        class="card"
        color="blue"
        variant="elevated"
        rounded="xl"
        :image="card.image"
      >
        <v-card-title class="card-title">{{ card.title }}</v-card-title>
        <div class="card-text">{{ card.text }}</div>
      </v-card>
    </div>
    <h1 class="title">Guide du parfait triathlète</h1>
    <p class="subtitle">Étape 1 : Rends-toi sur <a href="https://espacetri.fftri.com/" target="_blank" rel="noopener noreferrer"> Espace Tri </a> et fais ta demande de licence. C'est un peu comme un jeu vidéo, mais en vrai.</p>
    <p class="subtitle">Étape 2 : Une fois ta licence en poche, il faut remplir le formulaire qui te correspond (on n'a pas voulu te surcharger, on a pensé à tout). C'est là que tu nous diras tout, ou presque !</p>
    <p class="subtitle"> <a href="https://6wikj7cq.forms.app/formulaire-dinscription-ecole-de-triathlon-du-team-valeure-triathlon" target="_blank" rel="noopener noreferrer"> Formulaire Jeunes </a></p>
    <p class="subtitle"> <a href="https://6wikj7cq.forms.app/formulaire-dinscription-au-team-valeure-traithlon" target="_blank" rel="noopener noreferrer"> Formulaire Adultes </a></p>
    <p class="subtitle">Étape 3 : Si tu as suivi les deux premières étapes à la lettre (et on n'en doute pas), tu recevras un email de notre secrétaire. C'est le Saint Graal ! Il te confirmera que ton dossier est complet et te donnera le guide de bienvenue. Tu seras officiellement l'un des nôtres !</p>
  </div>
</template>

<style scoped>
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

.cards-section {
  margin-top: 4vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
  width: 100%;
}

.card {
  position: relative;
  width: 100%;
  max-width: 25vw;
  min-width: 250px;
  min-height: 150px;
  height: 25vh;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.card-title {
  font-size: 1.2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background: rgba(0,0,0,0.4);
  text-align: center;
  padding: 5px 10px;
  z-index: 2;
}

.card-text {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: 24px;
  color: white;
  background: rgba(0,0,0,0.5);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
}

.card:hover .card-text {
  opacity: 1;
}

/* Mobile */
@media (max-width: 768px) {
  .cards-section {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
  .card {
    max-width: 100%;
    height: auto;
    min-height: 180px;
  }
  .card-title {
    font-size: 1rem;
    padding: 4px 8px;
  }
  .card-text {
    font-size: 18px;
    padding: 0.4rem 0.8rem;
  }
  .title {
    font-size: 1.5rem;
    max-width: 90%;
    margin-top: 5vh;
  }
  .subtitle {
    font-size: 1rem;
    max-width: 90%;
  }
}
</style>
