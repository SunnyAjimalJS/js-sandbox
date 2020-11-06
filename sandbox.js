// W3 Schools - JS Break Loops

// Make the loop stop when i is 5.
for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}

// Make the loop jump to the next iteration when i is 5.
for (i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
