import { Command } from "commander";
import axios from "axios";

export default class JokeCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command("joke")
            .description("Random joke with punchline")
            .action(() => this.execute());
    }

    async execute() {
        try {
            const res = await axios.get<{ setup: string; punchline: string }>("https://official-joke-api.appspot.com/jokes/random");
            console.log(`\n😂 ${res.data.setup}`);
            setTimeout(() => {
                console.log(`🥁 ${res.data.punchline}\n`);
            }, 2000); // 2 second delay for comedic effect
        } catch (error) {
            console.log("❌ Failed to fetch joke. Please check your internet connection.");
        }
    }
}