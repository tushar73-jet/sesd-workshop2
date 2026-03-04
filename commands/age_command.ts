import { Command } from "commander";

export default class AgeCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command("age <birthyear>")
            .description("Calculate current age")
            .action((birthyear: string) => this.execute(birthyear));
    }

    execute(birthyear: string) {
        const year = parseInt(birthyear, 10);
        const currentYear = new Date().getFullYear();

        if (isNaN(year) || year < 1900 || year > currentYear) {
            console.log(`Please provide a valid birth year (e.g., 1990 to ${currentYear}).`);
            return;
        }

        const age = currentYear - year;
        console.log(`You are (or will be) ${age} years old this year!`);
    }
}
