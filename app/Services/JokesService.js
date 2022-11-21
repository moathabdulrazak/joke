import { appState } from "../AppState.js";
import { Joke } from "../Models/Joke.js";


const jokeApi = axios.create({
  baseURL: "https://v2.jokeapi.dev/joke/any?"
})
class JokesService {
  // setActiveJoke(jokeId) {
  //   let foundJoke = appState.joke.find(j => j.id == jokeId)
  //   appState.activeJokes = foundJoke
  // }
  async getJokes() {
    const res = await jokeApi.get()
    appState.joke = new Joke(res.data)
    console.log(appState.joke, "joke");
    console.log(res.data, "grtting");
  }

}









export const jokesService = new JokesService();