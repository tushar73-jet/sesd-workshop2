import axios from "axios";

class Joke_Command{
    program;

    constructor(program){
        this.program = program;

    }
    register(){
        this.program
        .command("joke")
        .action(()=>this.tellJoke());

   }
    async tellJoke(){
    try{
        const res = await axios.get<{ setup: string; punchline: string }>("https://official-joke-api.appspot.com/jokes/random");
        console.log(res.data.setup);
    }
    catch(error){
        console.log("Failed to fetch joke");
    }
 }
}

module.exports = Joke_Command;