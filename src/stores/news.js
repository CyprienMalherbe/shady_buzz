import { defineStore } from 'pinia'
import youngAquathlonImg from '@/assets/young-aquathlon.jpg'
import eveilsImg from '@/assets/eveil.png'
import bikeRunMousseaux2025 from '@/assets/bikerun-mousseaux-2025.jpg'
import articleTriAmants2025 from '@/assets/article-tri-amants-2025.jpg'
import marbellaDuranteau2025 from '@/assets/marbella-duranteau-2025.jpg'
import BandRinternational2025 from '@/assets/B&RMx2025-Bâche-annonce_V2.jpg'
import BandR2025MousseauxResults from '@/assets/BandR-mousseaux-results-2025.jpg'
import BandR2025Evreux from '@/assets/bnr-evreux-2025.jpeg'

function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export const useNewsStore = defineStore('news', {
  state: () => ({
    cards: [
      {
        title: 'Résultats aquathlon jeunes',
        image: youngAquathlonImg,
        published: new Date("2025-06-02T03:24:00"),
        url: 'https://www.lntri.fr/wp-content/uploads/2025/05/2025_Aquathlon-Gaillon.pdf'
      },
      {
        title: 'Nouveautés Éveils',
        subtitle1: "Nouveauté pour la saison 2025-2026",
        subtitle2: "Une bonne façon de découvrir deux des trois sports de la discipline : cyclisme (draisienne ou tricycle, trottinette ou vélo à roulettes) et course à pied dans un cadre sécurisé et avec des méthodes pédagogiques spécifiques (de l'école Française de Triathlon). Il n'y a pas de natation pour les triathlètes 'Éveils' mais il y aura bel et bien des jeux d'eau proposés.",
        image: eveilsImg,
        published: new Date("2025-08-02T03:24:00"),
        route: 'news'
      },
      {
        title: 'Les inscriptions pour le B&R sont ouvertes',
        image: bikeRunMousseaux2025,
        published: new Date("2025-10-01T03:24:00"),
        url: 'https://www.strayde.com/bike-and-run-des-mousseaux'
      },
      {
        title: 'Superbe week-end sportif à Léry-Poses',
        image: articleTriAmants2025,
        subtitle1: "13 & 14 Septembre 2025 : une superbe fête du sport à Léry-Poses en Normandie à l’occasion du Triathlon des 2 Amants",
        subtitle2: "Plus de 1000 participants sur le week-end, neuf courses lancées en aquathlon et en triathlon, 25 départements représentés, le Team Val’Eure Triathlon peut s’enorgueillir d’avoir mené à bien la plus grosse édition du Triathlon des 2 Amants depuis sa création en 2021.",
        subtitle3: 'Voir les résultats complets <a href="https://www.breizhchrono.com/detail-de-la-course/triathlondes2amants-minitricrosscourse22016a2019-2025-19009" target="_blank" rel="noopener noreferrer">ici</a>',
        published: new Date("2025-10-08T03:24:00"),
        route: 'news'
      },
      {
        title: 'CHAMPIONNAT DU MONDE IRONMAN 70.3 : TOUT UN CLUB DERRIÈRE NICO !',
        image: marbellaDuranteau2025,
        subtitle1: "Après une brillante qualification à Vichy et au delà, une saison 2025 de bout en bout solide, on y est : la préparation de plusieurs mois s'est bien passée, les bagages récupérés après une petite péripétie aéroportuaire, il ne reste plus à Nico Duranteau qu'à charger les batteries à bloc afin d' être au top dimanche pour sa dernière course de 2025, et quelle course !",
        subtitle2: "Départ dimanche 09 novembre à partir de 8h. 📢 Go, Nico !",
        published: new Date("2025-11-04T03:24:00"),
        route: 'news'
      },
      {
        title: 'Bike & Run international des Mousseaux',
        image: BandRinternational2025,
        subtitle1: "📢 J-2 : Informations coureurs ! Rappel des horaires de courses :",
        subtitle2: "🏁 B&R XXS (7.3km) : 9h30. Tracé GPX <a href='https://connect.garmin.com/modern/course/417405839' target='_blank' rel='noopener noreferrer'>ici</a>",
        subtitle3: "🏁 B&R 6-9ans (1.55km) : 9h45",
        subtitle4: "🏁 B&R 8-11ans (2.88km) : 10h",
        subtitle5: "🏁 B&R S 20.80km : 10h35. Tracé GPX <a href='https://connect.garmin.com/modern/course/418841392' target='_blank' rel='noopener noreferrer'>ici</a>",
        subtitle6: "🏁 B&R XS (12.75km) : 10h40. Tracé GPX <a href='https://connect.garmin.com/modern/course/417406805' target='_blank' rel='noopener noreferrer'>ici</a>",
        subtitle7: "🏃‍♀️🚴‍♀️: 1 TOUR pour les courses 6-9ans, XXS et XS",
        subtitle8: "🚴‍♂️🏃‍♂️: 2 TOURS pour les courses 9-11ans et S",
        subtitle8: "📤 Retrait des dossards (tente accueil Team Val'Eure Triathlon, parc des Pérelles à Courcelles s/ Seine) jusqu'à 15' avant le départ.",
        subtitle9: "📢 Pour les coureurs du XS/S : l'accès au parking à proximité immédiate du parc des Pérelles ne sera pas possible entre 10h et 10h15. Privilégier un stationnement sur les emplacements matérialisés dans le lotissement ou à la mairie (à environ 800m).",
        subtitle10: "🏁 Procédure de départ : un-e équipier-e sur la ligne de départ , le/la second.e en attente avec le vélo dans une zone matérialisée. L'équipier en attente ne peut partir à pied qu'après contact avec son/sa partenaire.",
        subtitle11: "👉 À l'exception de la procédure de départ, les relais sont LIBRES et le 'gagne-terrain' est autorisé. Le cycliste peut donc 'prendre de l'avance' et déposer le vélo en bord EN BORD DE parcours (il ne doit pas gêner les autres!). Le coureur / la coureuse récupère le vélo et rattrape l'équipier.e.",
        subtitle12: "🚴‍♂️🏃‍♂️ Sur les courses XXS, XS et S : à chaque moitié de tour, vous traverserez une 'zone de regroupement'. L'arbitre ne vous laissera UNIQUEMENT traverser la zone si vous êtes en mesure d'avoir un contact coureur-cycliste (cad à moins de 0.8m l'un.e de l'autre)",
        subtitle13: "🏁 Cette règle vaut également pour la procédure d'arrivée (Arche Foulées)",
        subtitle14: "🏆 Podiums et récompenses à 11h pour les les courses enfants & XXS, à 12h30 pour le XS & S",
        subtitle15: "Règlement complet <a href='https://app.strayde.com/datas/2025/82txDwiRfvAvWWqD/docs/reglement.pdf' target='_blank' rel='noopener noreferrer'>ici</a>",
        published: new Date("2025-11-28T03:24:00"),
        route: 'news'
      },
      {
        title: 'FRANC SUCCÈS POUR LA 1ÈRE ÉDITION DU BIKE AND RUN DES MOUSSEAUX !',
        image: BandR2025MousseauxResults,
        subtitle1: "Quelle première édition pour le Bike & Run des Mousseaux avec 149 équipages sur la ligne de départ ! De mémoire de Courcellois, on n'avait jamais vu autant de monde sur le parc des Pérelles. 5 courses, une météo parfaite, beaucoup d'animation sur les parcours et beaucoup de sourires sur les visages à l'arrivée !",
        subtitle2: "Sur des formats et des parcours variés autour des étangs et à travers le village de Bouafles, tantôt roulants, tantôt exigeants, les athlètes des clubs seino-marins, calvadosiens ou voisins des Lions de Vernon, du Triathlon Pays du Neubourg se sont distingués sous le soleil de novembre, notamment Yannick Ampoulie et Cyril Bartholomé qui ont brillamment privé Nicolas Duranteau et Sylvain Gangloff d'une victoire à domicile sur le S.",
        subtitle3: "Bravo à tous les TVTistes qui ont pris part à l'une ou l'autre des courses, pour les podiums à domicile de Harmonie Hamard & Sofia Garrido, Savanna Mirkovic & Paul Oray, Axel Suard & Paul Rocher, Ethan Dufossé & Adénora Petit, Pierre Laloire & Lenny Lecaplain et Nicolas Duranteau & Sylvain Gangloff. C'est également une réelle satisfaction pour le club d'avoir permis à cette occasion aux athlètes neo-licenciés ou nouvellement arrivés au club, des mini-poussins aux adultes, la prise de leur premier dossard sous nos couleurs ! 😃",
        subtitle4: "🙏Merci pour votre venue sur ce nouvel événement qui sera qui sait amené à durer et bravo à l'ensemble des compétiteurs compétitrices, expérimentés ou moins, tout jeunes ou... moins jeunes...",
        subtitle5: "🙏Merci également aux communes hôtes, Courcelles s/ Seine et Bouafles, à nos partenaires Les Foulées, le Coq toqué, Brasserie des 2 Amants, Tout 1 Fromage pour les camemberts 'limited edition', Carrefour Market Les Andelys... Ainsi évidemment qu'à l'ensemble des bénévoles, vous êtes au top ! 🥳👌",
        subtitle6: "Les résultats <a href='https://smilevents27.wiclax-results.com/bike_and_run_des_mousseaux/' target='_blank' rel='noopener noreferrer'>ici</a>",
        subtitle7: "À bientôt pour de nouvelles aventures avec le TVT et bonne récup' ! ",
        published: new Date("2025-12-03T03:24:00"),
        route: 'news'
      },
      {
        title: 'CHALLENGE JEAN BOUDARD : DERNIERE DE LA SAISON DE BIKE & RUN POUR LE TVT',
        image: BandR2025Evreux,
        subtitle1: "C’est avec entrain que le TVT s’est à nouveau déplacé en forêt de Saint-Michel pour l’épreuve organisée par le club de Evreux AC Triathlon. Avec Plaisir et redoutant ce qui est probablement - sur le format découverte comme sur le format « Elite » - le parcours le plus exigeant du circuit régional.",
        subtitle2: "Ainsi, ce sont au total une dizaine d’équipages noir & turquoise qui ont pris part aux différentes courses, sur la lancée du Bike & Run des Mousseaux. En mini-poussins, Sofia et Ethan plein d’enthousiasme s’en sont drôlement bien sortis, comme des grands sur le circuit forestier de presque 2km, montant sur le podium et se voyant récompensés comme 3e équipage de la catégorie « mixtes ». Plus expérimentés désormais, Simon Geoffriau-Rasmusson et Timothée Jacques prennent eux la 7e place de la « grande » course jeunes et se classent 2eme en benjamins. Ce fut aussi le premier Bike & Run officiel et premier podium pour Marianne Jacques, encore, associée à Marie-Agnès Lecuyer et une première sur le podium pour Aline… Jacques toujours, accompagnée de Clémence Mahieu.",
        subtitle3: "8 : ça aura donc été la place attitrée pour le binôme Vincent Ratel et Cyprien Malherbe sur cette saison automnale de Bike & Run. Le sort s’en est en plus mêlé cette fois avec une crevaison au pied de la dernière ascension, leur ôtant toute chance de le conjurer en luttant pour une 7e place au scratch. Bravo toutefois pour la régularité et une place satisfaisante au challenge de la ligue de Normandie !",
        subtitle4: "Les résultats du TVT sur cette étape ébroïcienne :",
        subtitle5: "Mini-Poussins Mixtes : Sofia Garrido & Ethan Berthiaux (00 :15’04)",
        subtitle6: "Benjamins (M) : 2e Simon Geoffriau-Rasmusson & Timothée Jacques (00 :15’08)",
        subtitle7: "Format XS 'Découverte' : 10e Arnaud Jacques & Hervé Jacques (00 :39’27), Aline Jacques & Clémence Mahieu (00 :47’47), Marianne Jacques & Marie-Agnès Lecuyer (00 :51’52)",
        subtitle8: "Format S Elite : 8e : Vincent Ratel & Cyprien Malherbe (01 :06’31), 26e Guile Home & Alexis Rousselin (01 :15’57), 27e Ilyes Demamen & Stéphane Delabrière (01 :19’01), 29e Yann Quillet & Mathieu Lothon (01 :19’52), 35e Delphine Migos & David Dugenetay (01 :27’33)",
        published: new Date("2025-12-17T03:24:00"),
        route: 'news'
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
