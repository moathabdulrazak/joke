



export class Joke {
  constructor(data) {
    this.id = data.id
    this.category = data.category || ''
    this.joke = data.delivery || ''
    this.jokee = data.joke || ''
    this.setup = data.setup || ''
  }


  get JokeTemplate() {
    return `
    <div id="draw-joke" class="col-6 card joke-body m-auto p-5 text-light">
    <h5 class="text-center">${this.category}</h5>
    <h5 class="text-center">setup: ${this.setup}</h5>
    <h1 class="">joke: ${this.joke}${this.jokee}</h1>
  </div>
  
  `
  }



}