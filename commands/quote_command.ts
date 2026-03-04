import { Command } from "commander";
import axios from "axios";

export default class QuoteCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command("quote")
            .description("Inspirational quote")
            .action(() => this.execute());
    }

    async execute() {
        try {
            const res = await axios.get("https://zenquotes.io/api/random");
            const data = res.data[0];

            console.log(`${data.q}"`);
            console.log(`   — ${data.a}\n`);

        } catch (error) {
            console.log("Failed to fetch quote.");
        }
    }
}
