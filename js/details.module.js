import { Ui } from "./ui.module.js";

export class Details {
    constructor(id) {
       this.ui = new Ui();
 
       document.getElementById("btnClose").addEventListener("click", () =>{
          document.querySelector(".games").classList.remove("d-none");
          document.querySelector(".details").classList.add("d-none");
       });
 
       this.getDetails(id);
    }
 
    getDetails(idGames) {
 
       const options = {
          method: "GET",
          headers: {
            'x-rapidapi-key': '5734d83959msh21f584eacf91a97p1f36f0jsn8450c025c48f',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
         },
       };
 
       fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
          .then((response) => response.json())
          .then((response) => this.ui.displayDetails(response))
          .catch((err) => console.error(err));
    }
}
