import { appState } from "../AppState.js";
import { jokesService } from "../Services/JokesService.js";
import { setHTML } from "../Utils/Writer.js";

// function drawJoke() {
//   let jokes = appState.joke
//   let template = ''
//   jokes.forEach(j => template += j.Template)
//   setHTML('joke', template)
//   console.log("template", template);
// }

function _drawJokes() {
  let jokes = appState.joke
  setHTML('draw-joke', jokes.JokeTemplate)
  console.log("draw joke");
}
export class JokesController {
  constructor() {

    this.getJokes()
    appState.on('joke', _drawJokes)
    _drawJokes()


  }

  async getJokes() {
    // console.log('joke reloaded');
    await jokesService.getJokes()
    // drawJoke
  }

  showJoke() {
    _drawJokes()
    console.log('showing');
  }

  // setActiveJoke(id) {
  //   jokesService.setActiveJoke(id)
  //   drawJoke()
  // }
}
