import { defineStore } from 'pinia'
import newYearDay from '@/assets/new-year-day.jpg'
import birthdayRachel from '@/assets/birthday-rachel.jpg'
import friendsImg from '@/assets/friends.jpg'
import seminaireImg from '@/assets/seminaire.jpg'
import sportImg from '@/assets/sport.jpg'
import chercheBistrotDuClocherImg from '@/assets/chercheBistrotDuClocher.jpeg'
import fullRoomBistrotDuClocherImg from '@/assets/fullRoomBistrotDuClocher.jpg'
import presentationBistrotDuClocherImg from '@/assets/presentationBistrotDuClocher.jpeg'
import shadyBuzzBistrotDuClocherImg from '@/assets/shadyBuzzBistrotDuClocher.jpeg'

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
        title: "Jour de l'an 2025 - 2026",
        images: [newYearDay],
        published: new Date("2026-01-01T03:24:00"),
        subtitle1: "Le jour de l'an 2025 - 2026 a été fêté avec une quarataine de convives dans la salle des fêtes de saint-Pierre-d'Autils, durant lequel j'ai animé 4 jeux divers et variés (Quiz, Qui est-ce ?, Ça ne nous rajeunit pas, Au plus proche), au goût de tous.",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Anniversaire de Rachel",
        images: [birthdayRachel],
        published: new Date("2025-11-18T03:24:00"),
        subtitle1: "Les 20 ans de Rachel ont été fêtés comme il se doit autour de 4 jeux différents chez elle (Risque-tout, Jeu des icônes, Première lettre, Cliptomane).",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Anniversaire de Michel",
        images: [birthdayRachel],
        published: new Date("2024-12-10T03:24:00"),
        subtitle1: "Les 58 ans de Michel ont été fêtés comme il se doit autour de 3 jeux différents à son domicile (Risque-tout, Jeu visuel et mot commun).",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Animation club de sport",
        images: [sportImg],
        published: new Date("2025-04-24T03:24:00"),
        subtitle1: "Le club de triathlon de Gaillon a pu bénéficier de 4 jeux faits maison pour cette occasion (Risque-tout, Anagrammes personnalisés, Résumés en une phrase, Cristaline)",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Anniversaire de Clément",
        images: [birthdayRachel],
        published: new Date("2024-09-17T03:24:00"),
        subtitle1: `Un BNB avait été loué pour l'occasion : les 30 ans de Clément ont été une source de bonne joie et de franche rigolade sur les thèmes de l'Olympique Lyonnais et de l'intersubjectivité`,
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Retrouvailles entre amis",
        images: [friendsImg],
        published: new Date("2025-11-11T03:24:00"),
        subtitle1: "Des amis ont loué un BNB pour l'occasion : 4 jeux ont été proposés pour animer une partie de leux week-end : Quiz culture G., Blind test, Anagrammes personnalisés, Famille en carton",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Séminaire",
        images: [seminaireImg],
        published: new Date("2025-09-08T03:24:00"),
        subtitle1: "Pour une cohésion d'équipe et un moment quelque peu compétitif mais très sympa, 3 jeux ont été proposés dans les locaux de l'entreprise : Quiz culture G., ShakiRammstein et Anagrammes",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Animation au bistrot du clocher",
        images: [presentationBistrotDuClocherImg, shadyBuzzBistrotDuClocherImg, fullRoomBistrotDuClocherImg, chercheBistrotDuClocherImg],
        published: new Date("2026-02-20T03:24:00"),
        subtitle1: "C'était la première en tant que professionnel, et quelle première ! Tout le monde était satisfait et en redemandait.",
        subtitle2: "Au programme : Quiz de culture générale, jeux de logique faciale et 'famille en carton', on a même pu terminer sur un petit karaoké.",
        subtitle3: "Une super ambiance qui à n'en point douter aura ravi tous les participants qui reviendront certainement 😊.",
        subtitle4: "Merci à Stéphane, à toute l'équipe du bistrot du clocher et à la mairie de Saint-Aubin-sur-Gaillon pour cette première opportunité",
        subtitle5: "N'hésitez pas à y faire un tour, l'ambiance vaut le détour.",
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
