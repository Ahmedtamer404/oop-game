import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games {
    constructor() {
       this.getGames("mmorpg");
 
       document.querySelectorAll(".menu a").forEach((link) => {
          link.addEventListener("click", (e) => {
             document.querySelector(".menu .active").classList.remove("active");
             e.target.classList.add("active");
             this.getGames(e.target.dataset.category);
          });
       });
 
       this.ui = new Ui();
    }
 
    async getGames(category) {
       const options = {
          method: "GET",
          headers: {
            'x-rapidapi-key': '5734d83959msh21f584eacf91a97p1f36f0jsn8450c025c48f',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
         },
       };
 
       const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
       const response = await api.json();
 
       this.ui.displayDataGame(response);
       this.startEvent();
    }
 
    startEvent() {
       document.querySelectorAll(".card").forEach((item) => {
          item.addEventListener("click", () => {
             const id = item.dataset.id;
             this.showDetails(id);
          });
       });
    }
 
    showDetails(idGame) {
       const details = new Details(idGame);
       document.querySelector(".games").classList.add("d-none");
       document.querySelector(".details").classList.remove("d-none");
    }
 }
//  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
//  const options = {
//      method: 'GET',
//      headers: {
//          'x-rapidapi-key': '5734d83959msh21f584eacf91a97p1f36f0jsn8450c025c48f',
//          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//      }
//  };
 
//  try {
//      const response = await fetch(url, options);
//      const result = await response.text();
//      console.log(result);
//  } catch (error) {
//      console.error(error);
//  }
