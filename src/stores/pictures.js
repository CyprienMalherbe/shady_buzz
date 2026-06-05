import { defineStore } from "pinia";
import chercheBistrotDuClocherImg from "@/assets/chercheBistrotDuClocher.jpeg";
import fullRoomBistrotDuClocherImg from "@/assets/fullRoomBistrotDuClocher.jpg";
import presentationBistrotDuClocherImg from "@/assets/presentationBistrotDuClocher.jpeg";
import shadyBuzzBistrotDuClocherImg from "@/assets/shadyBuzzBistrotDuClocher.jpeg";
import giveBistrotDuClocherImg from "@/assets/give-bistrot-du-clocher.jpeg";
import laughsBistrotDuClocherImg from "@/assets/laughs-bistrot-du-clocher.jpeg";
import CourcellesAllAgain from "@/assets/Courcelles-all-again.png";
import CourcellesAll from "@/assets/Courcelles-all.png";
import CourcellesMe from "@/assets/Courcelles-me.png";
import CourcellesSong from "@/assets/Courcelles-song.png";
import NewsPaper from "@/assets/newspaper.jpeg";
import ParvisMars1 from "@/assets/parvis-debut-mars-2026-1.jpeg";
import ParvisMars2 from "@/assets/parvis-debut-mars-2026-2.jpeg";
import ParvisMars3 from "@/assets/parvis-debut-mars-2026-3.jpeg";
import ParvisMars4 from "@/assets/parvis-debut-mars-2026-4.jpeg";
import ParvisMars from "@/assets/parvis-debut-mars-2026.jpeg";
import ROCEMS1 from "@/assets/ROCEMS-1.jpeg";
import ROCEMS2 from "@/assets/ROCEMS-2.jpeg";
import ROCEMS3 from "@/assets/ROCEMS-3.jpeg";
import ROCEMS4 from "@/assets/ROCEMS-4.jpeg";
import KPlusUn1 from "@/assets/k-plus-un-1.jpeg";
import KPlusUn2 from "@/assets/k-plus-un-2.jpeg";
import KPlusUn3 from "@/assets/k-plus-un-3.jpeg";
import laBase011 from "@/assets/la-base-01-1.jpeg";
import laBase012 from "@/assets/la-base-01-2.jpeg";
import laBase013 from "@/assets/la-base-01-3.jpeg";
import laBase014 from "@/assets/la-base-01-4.jpeg";
import laBase015 from "@/assets/la-base-01-5.jpeg";
import laBase016 from "@/assets/la-base-01-6.jpeg";
import laBase017 from "@/assets/la-base-01-7.jpeg";
import parvis21 from "@/assets/parvis-2-1.jpg";
import parvis22 from "@/assets/parvis-2-2.jpg";
import parvis23 from "@/assets/parvis-2-3.jpg";
import parvis24 from "@/assets/parvis-2-4.jpg";
import laBase021 from "@/assets/la-base-02-1.jpg";
import laBase022 from "@/assets/la-base-02-2.jpg";
import laBase023 from "@/assets/la-base-02-3.jpg";
import laBase031 from "@/assets/la-base-03-1.jpeg";
import laBase032 from "@/assets/la-base-03-2.jpeg";
import laBase033 from "@/assets/la-base-03-3.jpeg";
import laBase041 from "@/assets/la-base-04-1.jpeg";
import laBase042 from "@/assets/la-base-04-2.jpeg";
import laBase043 from "@/assets/la-base-04-3.jpeg";
import laBase051 from "@/assets/la-base-05-1.jpeg";
import laBase052 from "@/assets/la-base-05-2.jpeg";
import Guitran01 from "@/assets/guitrancourt-01.jpg";
import Guitran02 from "@/assets/guitrancourt-02.jpg";
import laBase061 from "@/assets/la-base-06-1.jpeg";

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export const usePicturesStore = defineStore("pictures", {
  state: () => ({
    cards: [
      {
        title: "Animation au bistrot du clocher",
        images: [
          presentationBistrotDuClocherImg,
          laughsBistrotDuClocherImg,
          shadyBuzzBistrotDuClocherImg,
          fullRoomBistrotDuClocherImg,
          chercheBistrotDuClocherImg,
          giveBistrotDuClocherImg,
        ],
        published: new Date("2026-02-20T03:24:00"),
        subtitle1:
          "C'était la première en tant que professionnel, et quelle première ! Tout le monde était satisfait et en redemandait.",
        subtitle2:
          "Au programme : Quiz de culture générale, jeux de logique faciale et 'famille en carton', on a même pu terminer sur un petit karaoké.",
        subtitle3:
          "Une super ambiance qui à n'en point douter aura ravi tous les participants qui reviendront certainement 😊.",
        subtitle4:
          "Merci à Stéphane, à toute l'équipe du bistrot du clocher et à la mairie de Saint-Aubin-sur-Gaillon pour cette première opportunité",
        subtitle5:
          "N'hésitez pas à y faire un tour, l'ambiance vaut le détour.",
      },
      {
        title: "Centre de loisirs 'Les Nymphéas'",
        images: [
          CourcellesMe,
          CourcellesSong,
          CourcellesAll,
          CourcellesAllAgain,
        ],
        published: new Date("2026-02-27T03:24:00"),
        subtitle1:
          "Une première pour Shady Buzz dans un centre de loisirs, à Courcelles sur Seine.",
        subtitle2:
          "Plusieurs animations avec des buzzers, des mimes, des jeux de pancarte qui ont ravi nos jeunes joueuses et joueurs (âgés de 7 à 10 ans) mais également nos moins jeunes mais tout autant enjouées animatrices.",
        subtitle3:
          "Merci à toute l'équipe de m'avoir offert cette opportunité. Nous devrions normalement nous revoir incessamment, et ce sera avec plaisir 😊.",
      },
      {
        title: "Shady Buzz dans le journal",
        images: [NewsPaper],
        published: new Date("2026-02-27T03:23:00"),
        subtitle1:
          "Shady Buzz entre dans le patrimoine local, bon d'accord pas encore mais c'est un bon début pour une entreprise qui s'est lancée il y a à peine 1 mois. Une petite fierté quand même 😊.",
        subtitle2: "Merci à Isabelle pour l'article 😊.",
      },
      {
        title: "Soirée quiz au Parvis",
        images: [
          ParvisMars,
          ParvisMars1,
          ParvisMars2,
          ParvisMars3,
          ParvisMars4,
        ],
        published: new Date("2026-03-06T03:23:00"),
        subtitle1:
          "Shady Buzz a fait ses premières sur Louviers. Merci à la brasserie du Parvis pour cette belle opportunité.",
        subtitle2:
          "Tout le monde a bien apprécié l'ambiance et est prêt à remettre le couvert, qui aura lieu à la fin du mois 😉.",
      },
      {
        title: "Soirée quiz avec les ROC'EMS",
        images: [ROCEMS1, ROCEMS2, ROCEMS3, ROCEMS4],
        published: new Date("2026-03-14T03:23:00"),
        subtitle1:
          "Shady Buzz a animé des jeux pour la soirée annuelle des ROC'EMS, à l'occasion de France - Angleterre au rugby.",
        subtitle2:
          "Tout s'est excellement bien passé, vu que les convives étaient ravis des jeux proposés, et qu'en plus les Bleus ont gagné 😉.",
      },
      {
        title: "Soirée quiz au K+1 restaurant inclusif à Vernon",
        images: [KPlusUn3, KPlusUn1, KPlusUn2],
        published: new Date("2026-03-20T03:23:00"),
        subtitle1:
          "Shady Buzz aux avant-postes pendant le repas de 7 tables lors de la soirée au K+1 - restaurant inclusif à Vernon.",
        subtitle2:
          "Les convives ont pu découvrir les joies de la merveilleuse gastronomie offerte pendant l'animation de 4 jeux différents qui ont fait appel à des qualités de reconnaissance faciale, de rapidité et de stratégie 😉.",
      },
      {
        title: "Soirée quiz à La Base à Vernon",
        images: [
          laBase012,
          laBase011,
          laBase013,
          laBase014,
          laBase015,
          laBase016,
          laBase017,
        ],
        published: new Date("2026-03-26T03:23:00"),
        subtitle1:
          "Inoubliable soirée à La Base à Vernon, qui n'est que la première d'une longue soirée a priori 😉.",
        subtitle2:
          "Tout le monde s'est pris aux différents jeux dans la joie et le bon humour. On a même poussé la chansonnette un moment, tout ça autour de la belle carte proposée par la patronne Caro, que je remercie pour l'opportunité. Hâte de vous retrouver tous 😊.",
      },
      {
        title: "Soirée Blindtest à Louviers",
        images: [parvis24, parvis22, parvis23, parvis21],
        published: new Date("2026-03-27T03:23:00"),
        subtitle1:
          "Soirée full Blindtest à la brasserie du Parvis à Louviers ce vendredi soir : 4 thèmes différents ont été proposés, qui ont ravi tous les joueurs.",
        subtitle2:
          "Heureusement qu'on a tout le week-end pour nous remettre des émotions de cette soirée fort sympathique, même si on perd une heure de samedi à dimanche 😭.",
      },
      {
        title: "Soirée quiz 2 à La Base à Vernon",
        images: [laBase022, laBase021, laBase023],
        published: new Date("2026-04-09T03:23:00"),
        subtitle1:
          "Va falloir s'y habituer j'ai l'impression, car cela commence à se savoir qu'il y a de l'animation quiz à La Base à Vernon un jeudi sur 2 désormais 😉.",
        subtitle2:
          "Toujours un plaisir d'animer là-bas et de s'amuser ensemble. À dans 2 semaines 😊.",
      },
      {
        title: "Soirée quiz 3 à La Base à Vernon",
        images: [laBase031, laBase032, laBase033],
        published: new Date("2026-04-24T03:23:00"),
        subtitle1:
          "Ça y est ! Certains anciens habitués des quiz au bar reviennent, le bouche à oreilles fait son effet 😊. C'est un plaisir de retrouver des visages connus, à moi d'adapter le contenu pour que la lassitude ne s'installe pas 😊.",
        subtitle2:
          "Belle victoire de l'équipe composée de joueurs de rugby de Vernon. À dans 2 semaines j'espère 😊.",
      },
      {
        title: "Soirée quiz 4 à La Base à Vernon",
        images: [laBase041, laBase042, laBase043],
        published: new Date("2026-05-07T03:23:00"),
        subtitle1:
          "Énorme plaisir à cette soirée. Au-delà de certains amis et même de certains membres de ma famille qui ont fait le déplacement (depuis Versailles excusez du peu), il y avait quand même 6 équipes présentes, ce qui est un record.",
        subtitle2:
          "Au final c'est une fois de plus les joueurs et joueuses de rugby de Vernon qui ont gagné pour la deuxième fois consécutive. Qui pour les détrôner ? La suite dans 2 semaines.",
      },
      {
        title: "Soirée quiz 5 à La Base à Vernon",
        images: [laBase051, laBase052],
        published: new Date("2026-05-21T03:23:00"),
        subtitle1:
          "Les habitués ont répondu une fois de plus présent pour cette cinquième soirée quiz.",
        subtitle2:
          "Merci à eux, bravo à tous, et bon vent Didier ta culture manquera aux quiz 😊.",
      },
      {
        title: "Soirée quiz à la salle des fêtes de Guitrancourt",
        images: [Guitran02, Guitran01],
        published: new Date("2026-05-29T03:23:00"),
        subtitle1:
          "Merci à la mairie de Guitrancourt pour cette belle opportunité, c'est toujours avec un poeu de nostalgie que je reviens dans cette belle salle 😊.",
        subtitle2:
          "51 personnes, ce n'est quand même pas rien, et à en croire les nombreux retours positifs, les jeux semblent bien adaptés à autant de joueurs 😊.",
      },
      {
        title: "Soirée quiz 6 à La Base à Vernon",
        images: [laBase061],
        published: new Date("2026-06-04T03:23:00"),
        subtitle1:
          "Les habitués ont répondu une fois de plus présent pour cette sixième soirée quiz, mais également des nouvelles têtes qui émergent, ça fait bien plaisir.",
        subtitle2:
          "Merci à eux, bravo à tous, et notamment aux nouveaux gagnants, qu'on espère retrouver bientôt 😊.",
      },
    ],
  }),

  getters: {
    orderedCards: (state) =>
      [...state.cards].sort((a, b) => b.published - a.published),

    getBySlug: (state) => {
      return (slug) => state.cards.find((c) => slugify(c.title) === slug);
    },
  },
});
