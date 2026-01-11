import { defineStore } from 'pinia'
import newYearDay from '@/assets/new-year-day.jpg'
import birthdayRachel from '@/assets/birthday-rachel.jpg'

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
        published: new Date("2026-01-11T03:24:00"),
        subtitle1: "Le jour de l'an 2025 - 2026 a été fêté avec une quarataine de convives dans la salle des fêtes de saint-Pierre-d'Autils, durant lequel j'ai animé 4 jeux divers et variés, au goût de tous.",
        subtitle2: "Cette section manque quand même encore un peu de photos 😊.",
      },
      {
        title: "Anniversaire de Rachel",
        image: birthdayRachel,
        published: new Date("2025-11-11T03:24:00"),
        subtitle1: "Les 20 ans de Rachel ont été fêtés comme il se doit autour de 3 jeux différents chez elle.",
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
