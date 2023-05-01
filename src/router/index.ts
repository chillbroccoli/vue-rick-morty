import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharacterView from "../views/CharacterView.vue";
import CharactersView from "../views/CharactersView.vue";
import EpisodesView from "../views/EpisodesView.vue";
import EpisodeView from "../views/EpisodeView.vue";
import LocationsView from "@/views/LocationsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/characters",
      name: "characters",
      component: CharactersView
    },
    {
      path: "/character/:id",
      name: "character",
      component: CharacterView
    },
    {
      path: "/episodes",
      name: "episodes",
      component: EpisodesView
    },
    {
      path: "/episode/:id",
      name: "episode",
      component: EpisodeView
    },
    {
      path: "/locations",
      name: "locations",
      component: LocationsView
    }
  ]
});

export default router;
