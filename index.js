let str = "aaabbbbdddccc";
let count = 1;
let str1 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    count++;
  } else {
    str1 = `${str1}${str[i]}${count}`;
    count = 1;
  }
}
console.log(str1);
