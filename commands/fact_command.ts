import { Command } from "commander";
import axios from "axios";

export default class FactCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command("fact")
            .description("Random interesting fact")
            .action(() => this.execute());
    }

    async execute() {
        try {
            const res = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");
            const data = res.data;

            console.log(`Did you know?`);
            console.log(`${data.text}\n`);

        } catch (error) {
            console.log("Failed to fetch fact.");
        }
    }
}
