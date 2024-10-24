const { whitelist } = require("./source/whitelist.js");
const readline = require('readline');

// Create an interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    let running = true;
    await whitelist();

    while (running) {
        console.log("BlowFish bypass");
        console.log("\nMenu:");
        console.log("1. Whitelist domain");
        console.log("Type 'exit' to quit.");

        // Use a promise to handle user input
        const answer = await new Promise(resolve => rl.question("Choose an option or 'exit': ", resolve));

        switch (answer) {
            case "1":
                await whitelist();
                break;
            case "exit":
                running = false;
                break;
            default:
                console.log("Invalid option, please choose again.");
        }
    }

    console.log("Exiting...");
    rl.close(); // Close the readline interface
    process.exit(0);
}

main().catch((err) => {
    console.error("Error:", err);
});
