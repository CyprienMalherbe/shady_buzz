<script>
import cynthiaSuardImg from '@/assets/cynthia-suard.png'
import alexandreLebougautImg from '@/assets/alexandre-lebougaut.png'
import alexisRousselinImg from '@/assets/alexis-rousselin.png'
import vincentRatelImg from '@/assets/vincent-ratel.png'
import vincentPetitImg from '@/assets/vincent-petit.png'
import eliseRousselinImg from '@/assets/elise-rousselin.png'
import margotRousselinImg from '@/assets/margot-rousselin.png'
import margotDelaunayImg from '@/assets/margot-delaunay.png'
import cyprienMalherbeImg from '@/assets/cyprien-malherbe.png'
import sebastienAndreImg from '@/assets/sebastien-andre.png'
import geraldVigerImg from '@/assets/gerald-viger.png'
import mickaelSuardImg from '@/assets/mickael-suard.png'

export default {
  name: 'Chart',
  data() {
    return {
      team: [
        { name: 'Cynthia Suard', role: 'Présidente / Entraîneur jeunes / BF5', organization: 'Bureau', image: cynthiaSuardImg },
        { name: 'Alexandre Lebougault', role: 'Vice président / Responsable partenaires', organization: 'CODIR', image: alexandreLebougautImg },
        { name: 'Alexis Rousselin', role: 'Responsable planification des entraînements et organisations sportives / Entraîneur jeunes et adultes / BF3 / BNSSA', organization: 'CODIR', image: alexisRousselinImg },
        { name: 'Vincent Ratel', role: 'Responsable événements club / Entraîneur renforcement musculaire', organization: 'CODIR', image: vincentRatelImg },
        { name: 'Vincent Petit', role: 'Trésorier / Entraîneur jeunes et adultes / BF2', organization: 'Bureau', image: vincentPetitImg },
        { name: 'Elise Rousselin', role: "Secrétaire de l'école de triathlon / Responsable groupe éveils", organization: 'CODIR', image: eliseRousselinImg },
        { name: 'Margot Rousselin', role: 'Responsable communication / Entraîneur jeunes / BF2', organization: 'CODIR', image: margotRousselinImg },
        { name: 'Margot Delaunay', role: 'Secrétaire & responsable des inscriptions et de commande des tenues', organization: 'Bureau', image: margotDelaunayImg },
        { name: 'Cyprien Malherbe', role: 'Responsable web', organization: 'Support', image: cyprienMalherbeImg },
        { name: 'Sébastien André', role: 'BF5 BNSSA', organization: 'Support', image: sebastienAndreImg },
        { name: 'Gérald Viger', role: 'BNSSA', organization: 'Support', image: geraldVigerImg },
        { name: 'Mickael Suard', role: 'Responsable Grand Prix / BF5', organization: 'CODIR', image: mickaelSuardImg },
      ]
    }
  },
  computed: {
    bureauOrganization() {
      return this.team.filter(m => m.organization === 'Bureau')
    },
    CODIROrganization() {
      return this.team.filter(m => m.organization === 'CODIR')
    },
    supportOrganization() {
      return this.team.filter(m => m.organization === 'Support')
    }
  },
}
</script>

<template>
  <div class="chart-container">
    <h2 class="chart-title">Le Bureau</h2>
    <div class="cards-wrapper">
      <div v-for="(member, index) in bureauOrganization"
      :key="index"
      class="team-card">
        <div class="avatar">
          <img :src="member.image" :alt="member.name" :class="`avatar-${index}`"/>
        </div>
        <div class="info">
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
        </div>
      </div>
    </div>
    <h2 class="chart-title">Le CODIR</h2>
    <div class="cards-wrapper">
      <div v-for="(member, index) in CODIROrganization"
      :key="index"
      class="team-card">
        <div class="avatar">
          <img :src="member.image" :alt="member.name" :class="`avatar-${index}`"/>
        </div>
        <div class="info">
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
        </div>
      </div>
    </div>
    <h2 class="chart-title">Fonctions supports</h2>
    <div class="cards-wrapper">
      <div v-for="(member, index) in supportOrganization"
      :key="index"
      class="team-card">
        <div class="avatar">
          <img :src="member.image" :alt="member.name" :class="`avatar-${index}`"/>
        </div>
        <div class="info">
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avatar-0, .avatar-2, .avatar-3, .avatar-5, .avatar-6, .avatar-11 {
  object-position: top;
}

.chart-container {
  max-width: 70vw;
  margin: 2rem auto;
  text-align: center;
  width: 100%;
}

.chart-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: white;
  padding-top: 7vh;
}

.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
}

/* Card styles */
.team-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  width: 220px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #007BFF;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color: #222;
}

.info .role {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.info .email {
  font-size: 0.9rem;
  color: #888;
  word-break: break-all;
}

/* Responsive mobile */
@media (max-width: 768px) {
  .cards-wrapper {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
  .team-card {
    width: 90%;
    padding: 1rem;
  }
  .avatar {
    width: 80px;
    height: 80px;
  }
  .info h3 {
    font-size: 1rem;
  }
  .info .role {
    font-size: 0.9rem;
  }
  .info .email {
    font-size: 0.8rem;
  }
  .chart-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>
