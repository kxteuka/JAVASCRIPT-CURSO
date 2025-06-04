var i;
var a = 0;
var d = 0;

document.write("For: ");
for (i = 1; i < 101; i++) {
  if (i < 100) {
    document.write(i + ", ");
  } else {
    document.write(i + ". ");
  }
}

document.write("While: ");
while (a < 100) {
  a++;
  if (a < 100) {
    document.write(a + ", ");
  } else {
    document.write(a + ". ");
  }
}

document.write("Do-while: ");
do {
  d++;
  if (d < 100) {
    document.write(d + ", ");
  } else {
    document.write(d + ". ");
  }
} while (d < 100);
