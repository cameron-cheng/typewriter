const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++) {
  let isLast = false;
  if ( i === sentence.length - 1) {
    isLast = true;
  }
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (isLast) {
      process.stdout.write('\n');
    }
  }, 50 * i) // <= 1s delay to make it noticeable. Can dial it down later.
  
}   
