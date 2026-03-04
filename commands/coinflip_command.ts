import { Command } from "commander";

export default class CoinflipCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command("coinflip")
            .description("Flip a coin (Heads or Tails)")
            .action(() => this.execute());
    }

    execute() {
        const isHeads = Math.random() < 0.5;

        console.log("🪙  Flipping coin...");
        setTimeout(() => {
            if (isHeads) {
                console.log("It's HEADS!");
            } else {
                console.log("It's TAILS!");
            }
        }, 1000); // 1s dramatic pause
    }
}
