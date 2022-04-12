const sentence = "hello there from lighthouse labs";

// let delayTime = 50;
// console.log replace with process.stdout.write
// for (const char of sentence) {
//   setTimeout(() => {
//   process.stdout.write(char);
// }, delayTime) // <= 1s delay to make it noticeable. Can dial it down later.
// delayTime += 50;
// }




// //discussed
let delayTime = 0;
// console.log replace with process.stdout.write
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delayTime += 10) // <= 1s delay to make it noticeable. Can dial it down later.
  delayTime += 10;
}
setTimeout(() => console.log(), delayTime);