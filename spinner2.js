const icon = "|/-\\|/-\\|"

let delay = 100;

for (const spin of icon) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}    `);
    // if (spin === icon.length - 1)
  }, delay += 200);
}