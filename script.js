let btn = document.querySelector(".check");

const reverseString = (str) => {
  let splitString = str.split("").reverse().join("");
  //   let reverseArray = splitString.reverse();
  //   let joinArray = reverseArray.join("");
  return splitString;
};

let palindromeCheck = () => {
  let msg = document.getElementById("msg").value;
  let ans = document.getElementById("answer");
  msg = msg.toLowerCase();
  if (msg == reverseString(msg)) {
    ans.innerHTML = "It's Palindrome!";
  } else {
    ans.innerHTML = "It's not Palindrome!";
  }
};

btn.addEventListener("click", palindromeCheck);
