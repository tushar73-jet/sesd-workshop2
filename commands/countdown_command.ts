import { Command } from "commander";

export default class CountdownCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command("countdown <n>")
            .description("Animated countdown")
            .action((n: string) => this.execute(n));
    }

    execute(n: string) {
        let count = parseInt(n, 10);

        if (isNaN(count) || count <= 0) {
            console.log("Please provide a valid positive integer.");
            return;
        }

        console.log(`⏳ Starting countdown from ${count}...`);

        const interval = setInterval(() => {
            process.stdout.write(`Time remaining: ${count}s`);

            if (count === 0) {
                clearInterval(interval);
                console.log("Liftoff! Countdown finished.");
            }
            count--;
        }, 1000);
    }
}
