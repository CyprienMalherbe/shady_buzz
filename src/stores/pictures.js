import { defineStore } from 'pinia'
import newYearDay from '@/assets/new-year-day.jpg'
import birthdayRachel from '@/assets/birthday-rachel.jpg'
import friendsImg from '@/assets/friends.jpg'
import seminaireImg from '@/assets/seminaire.jpg'
import sportImg from '@/assets/sport.jpg'

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
        image: newYearDay,
        published: new Date("2026-01-01T03:24:00"),
        subtitle1: "Le jour de l'an 2025 - 2026 a été fêté avec une quarataine de convives dans la salle des fêtes de saint-Pierre-d'Autils, durant lequel j'ai animé 4 jeux divers et variés (Quiz, Qui est-ce ?, Ça ne nous rajeunit pas, Au plus proche), au goût de tous.",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Anniversaire de Rachel",
        image: birthdayRachel,
        published: new Date("2025-11-18T03:24:00"),
        subtitle1: "Les 20 ans de Rachel ont été fêtés comme il se doit autour de 4 jeux différents chez elle (Risque-tout, Jeu des icônes, Première lettre, Cliptomane).",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Anniversaire de Michel",
        image: birthdayRachel,
        published: new Date("2024-12-10T03:24:00"),
        subtitle1: "Les 58 ans de Michel ont été fêtés comme il se doit autour de 3 jeux différents à son domicile (Risque-tout, Jeu visuel et mot commun).",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Animation club de sport",
        image: sportImg,
        published: new Date("2025-04-24T03:24:00"),
        subtitle1: "Le club de triathlon de Gaillon a pu bénéficier de 4 jeux faits maison pour cette occasion (Risque-tout, Anagrammes personnalisés, Résumés en une phrase, Cristaline)",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Anniversaire de Clément",
        image: birthdayRachel,
        published: new Date("2024-09-17T03:24:00"),
        subtitle1: `Un BNB avait été loué pour l'occasion : les 30 ans de Clément ont été une source de bonne joie et de franche rigolade sur les thèmes de l'Olympique Lyonnais et de l'intersubjectivité`,
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Retrouvailles entre amis",
        image: friendsImg,
        published: new Date("2025-11-11T03:24:00"),
        subtitle1: "Des amis ont loué un BNB pour l'occasion : 4 jeux ont été proposés pour animer une partie de leux week-end : Quiz culture G., Blind test, Anagrammes personnalisés, Famille en carton",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Séminaire",
        image: seminaireImg,
        published: new Date("2025-09-08T03:24:00"),
        subtitle1: "Pour une cohésion d'équipe et un moment quelque peu compétitif mais très sympa, 3 jeux ont été proposés dans les locaux de l'entreprise : Quiz culture G., ShakiRammstein et Anagrammes",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
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
