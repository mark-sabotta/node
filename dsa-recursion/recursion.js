/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if(!Boolean(nums)) return 0;
  
  if (index === nums.length - 1) { 
    return nums[index];
  } else {
    return nums[index] * product(nums, index + 1);
  }
} 

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0) {
  if(!Boolean(words)) return 0;
  if (index === words.length - 1) {
    return words[index].length;
  } else {
    return Math.max(words[index].length, longest(words, index + 1));
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  if(index + 2 > str.length -1){
    return str[index];
  } else {
    return str[index] + everyOther(str, index + 2);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  let corr_index = str.length - 1 - index;
  if(index >= corr_index){
    return true;
  }
  if (str[index] === str[corr_index]){
    return true && isPalindrome(str, index +1);
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if(index === arr.length-1 && arr[index] !== val){
      return -1;
  } else {
     if(arr[index] === val){
      return index;
     } else {
      return findIndex(arr, val, index + 1);
     }
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0) {
  if(str.length - 1 === index){
    return str[index];
  } else {
    return revString(str, index + 1) + str[index];
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for(let x in obj){
    if(typeof obj[x] === 'object'){
      gatherStrings(obj[x], arr);
    } else if (typeof obj[x] === 'string'){
      arr.push(obj[x]); 
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, l = 0, r = -1) {
  if(r === -1){
    r = arr.length - 1;
  }
  

  let m = Math.floor((l + r)/2);
  if(arr[m] === val){
    return m;
  }
  if(l >= r){
    return -1;
  }
  if(arr[m] > val){
    return binarySearch(arr, val, l, m);
  } else {
    return binarySearch(arr, val, m+1, r);
  }

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
