const checkButton=document.getElementById('check-btn');
const textInput=document.getElementById('text-input');
const resultElement=document.getElementById('result');

function isPalindrome(text) {
  // Remove non-alphanumeric characters and convert to lowercase for case-insensitive check
  const sanitizedText = text.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversedText = sanitizedText.split('').reverse().join('');
  return sanitizedText === reversedText;
} 

checkButton.addEventListener("click",function(){
  const text=textInput.value.trim();
  if (text === "") {
    alert("Please input a value.");
    return; 
  }
  else if (text.toUpperCase() === 'A') { 
    resultElement.textContent = "A is a palindrome.";
  } else {
     const isPal = isPalindrome(text);
  const result = isPal ? `${text} is a palindrome` : `${text} is not a palindrome`;
  resultElement.textContent = result;
  }

})
