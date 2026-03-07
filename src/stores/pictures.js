import { defineStore } from 'pinia'
import chercheBistrotDuClocherImg from '@/assets/chercheBistrotDuClocher.jpeg'
import fullRoomBistrotDuClocherImg from '@/assets/fullRoomBistrotDuClocher.jpg'
import presentationBistrotDuClocherImg from '@/assets/presentationBistrotDuClocher.jpeg'
import shadyBuzzBistrotDuClocherImg from '@/assets/shadyBuzzBistrotDuClocher.jpeg'
import giveBistrotDuClocherImg from '@/assets/give-bistrot-du-clocher.jpeg'
import laughsBistrotDuClocherImg from '@/assets/laughs-bistrot-du-clocher.jpeg'
import CourcellesAllAgain from '@/assets/Courcelles-all-again.png'
import CourcellesAll from '@/assets/Courcelles-all.png'
import CourcellesMe from '@/assets/Courcelles-me.png'
import CourcellesSong from '@/assets/Courcelles-song.png'
import NewsPaper from '@/assets/newspaper.jpeg'
import ParvisMars1 from '@/assets/parvis-debut-mars-2026-1.jpeg'
import ParvisMars2 from '@/assets/parvis-debut-mars-2026-2.jpeg'
import ParvisMars3 from '@/assets/parvis-debut-mars-2026-3.jpeg'
import ParvisMars4 from '@/assets/parvis-debut-mars-2026-4.jpeg'
import ParvisMars from '@/assets/parvis-debut-mars-2026.jpeg'

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export const usePicturesStore = defineStore('pictures', {
  state: () => ({
    cards: [
      {
        title: "Animation au bistrot du clocher",
        images: [presentationBistrotDuClocherImg, laughsBistrotDuClocherImg, shadyBuzzBistrotDuClocherImg, fullRoomBistrotDuClocherImg, chercheBistrotDuClocherImg, giveBistrotDuClocherImg],
        published: new Date("2026-02-20T03:24:00"),
        subtitle1: "C'était la première en tant que professionnel, et quelle première ! Tout le monde était satisfait et en redemandait.",
        subtitle2: "Au programme : Quiz de culture générale, jeux de logique faciale et 'famille en carton', on a même pu terminer sur un petit karaoké.",
        subtitle3: "Une super ambiance qui à n'en point douter aura ravi tous les participants qui reviendront certainement 😊.",
        subtitle4: "Merci à Stéphane, à toute l'équipe du bistrot du clocher et à la mairie de Saint-Aubin-sur-Gaillon pour cette première opportunité",
        subtitle5: "N'hésitez pas à y faire un tour, l'ambiance vaut le détour.",
      },
      {
        title: "Centre de loisirs 'Les Nymphéas'",
        images: [CourcellesMe, CourcellesSong, CourcellesAll, CourcellesAllAgain],
        published: new Date("2026-02-27T03:24:00"),
        subtitle1: "Une première pour Shady Buzz dans un centre de loisirs, à Courcelles sur Seine.",
        subtitle2: "Plusieurs animations avec des buzzers, des mimes, des jeux de pancarte qui ont ravi nos jeunes joueuses et joueurs (âgés de 7 à 10 ans) mais également nos moins jeunes mais tout autant enjouées animatrices.",
        subtitle3: "Merci à toute l'équipe de m'avoir offert cette opportunité. Nous devrions normalement nous revoir incessamment, et ce sera avec plaisir 😊.",
      },
      {
        title: "Shady Buzz dans le journal",
        images: [NewsPaper],
        published: new Date("2026-02-27T03:23:00"),
        subtitle1: "Shady Buzz entre dans le patrimoine local, bon d'accord pas encore mais c'est un bon début pour une entreprise qui s'est lancée il y a à peine 1 mois. Une petite fierté quand même 😊.",
        subtitle2: "Merci à Isabelle pour l'article 😊.",
      },
      {
        title: "Soirée quiz au Parvis",
        images: [ParvisMars, ParvisMars1, ParvisMars2, ParvisMars3, ParvisMars4],
        published: new Date("2026-03-06T03:23:00"),
        subtitle1: "Shady Buzz a fait ses premières sur Louviers. Merci à la brasserie du Parvis pour cette belle opportunité.",
        subtitle2: "Tout le monde a bien apprécié l'ambiance et est prêt à remettre le couvert, qui aura lieu à la fin du mois 😉.",
      },
    ],
  }),

  getters: {
    orderedCards: (state) =>
      [...state.cards].sort((a, b) => b.published - a.published),

    getBySlug: (state) => {
      return (slug) => state.cards.find(c => slugify(c.title) === slug)
    }
  }
})
