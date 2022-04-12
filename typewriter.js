const sentence = "hello there from lighthouse labs";

let delayTime = 0;
// console.log replace with process.stdout.write
for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
}, delayTime * 50) // <= 1s delay to make it noticeable. Can dial it down later.
delayTime ++;
}
