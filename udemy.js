// [1,3,5,7,9,2] target 12

const solution = (array, target) => {
  const store = {};
  for (let i = 0; i < array.length; i++) {
    const j = target - array[i];

    if (store[array[i]] !== undefined) return [store[array[i]], i];

    console.log(i, j)

    store[j] = i;
    //    const ans =  array.slice(i).findIndex(item => item === j)
    //    if (ans !== -1) return [i, ans + i];
    // console.log(store);
  }
  return null;
};

// console.log(solution([1, 3, 5, 7, 9, 2], 11));

const solutionWater = (array) => {
  let max = 0;
  for(let i=0; i < array.length; i++) {
    for(let j=i+1; j < array.length; j++) {
      const area = Math.min(array[i], array[j]) * (j - i);
      if (area > max) {
        max = area;
        console.log(i, j, max)
      }
    }
  }
  return max;
};

// console.log(solutionWater([7, 16, 12, 5, 15, 9]))

const solutionWater2 = (array) => {
  let max = 0;
  let i = 0;
  let j = array.length - 1;

  while(j-i > 0){
    let p1 = array[i];
    let p2 = array[j];

    const area = Math.min(p1, p2) * (j - i);
    if (area > max) max = area;
    if (p1 < p2) i += 1;
    else j -= 1
  }
  return max;
};

// console.log(solutionWater2([7, 6, 12, 5, 1, 9]))

const solutionElevationMap = (array) => {

  let sum = 0;

  for(let i=0; i < array.length; i++) {
    let maxLeft = 0;
    let maxRight = 0;
    let pLeft = i - 1;
    let pRight = i + 1;

    while(pLeft >=0){
      maxLeft = Math.max(array[pLeft], maxLeft);
      pLeft --;
    }

    while(pRight < array.length) {
      maxRight = Math.max(array[pRight], maxRight);
      pRight ++;
    }
  
    const height = Math.min(maxLeft, maxRight) - array[i]
    if (height > 0) sum += height;
  }
  return sum;
}

// console.log(solutionElevationMap([0,1,0,2,1,0,3,1,0,1,2]))

const solutionElevationMap2 = (array) => {

  let sum = 0;
  let pRight = 1;
  let maxRight = 0;
  let maxLeft = 0;

  while(pRight < array.length) {
    maxRight = Math.max(array[pRight], maxRight);
    pRight ++;
  }
  console.log(maxRight, 'maxRight')
  for(let i=0; i < array.length; i++) {
    // let maxLeft = 0;

    if(i > 0 && array[i - 1] > maxLeft) maxLeft = array[i - 1]
    console.log(maxLeft, 'maxLeft')

    const height = Math.min(maxLeft, maxRight) - array[i]
    if (height > 0) sum += height;
    console.log(height, 'height')
  }
  return sum;
}

console.log(solutionElevationMap2([0,1,0,2,1,0,3,1,0,1,2]))

// repeating string;

// abcbdca;
const repeatingString = (text) => {
  let i = 0;
  // let j = 0;
  let max = 0;
  while(i < text.length) {
    const store = {};
    let count = 0;
    let j= i;
    while (j < text.length) {
      if (!store[text[j]]) {
        store[text[j]] = 1;
        count += 1;
        j++;
      } else {
        j = text.length
      }
    }
    // console.log(count, 'count')
    // console.log(store, 'store')
    if (count > max) max = count;
    i++; 
  }
  return max;
}
/* console.log('repeatingString:', repeatingString('abcbdca'))
console.log('repeatingString:', repeatingString('abccabb'))
 */
const repeatingStringOptimal = (text) => {
  let i = 0;
  let maxCount = 0;
  let counter = 0;
  let j = 0;
  let store = {}
  while(j < text.length) {
    
    const char = text[j];
    if (!store[char] || store[char] < i) {
      store[char] = j;
      counter += 1;
      maxCount = Math.max(maxCount, counter);
    } else {
      maxCount = Math.max(maxCount, counter);
      store[char] = j;
      i = j;
      counter = 1;
    }
    j++
  }
  return maxCount;
 }

 /* console.log('repeatingStringOptimal:', repeatingStringOptimal('abcbdca'))
 console.log('repeatingStringOptimal:', repeatingStringOptimal('abccabb'))
 */
 // remove 1 character palindrome question
 // raceecar 
 const almostPalindromeSolution = (text) => {
   let i = 0; // right
   let j = text.length - 1; // left
   let hasRemovedOneChar = false;
   while (i <= j) {
     const leftChar = text[i];
     const rightChar = text[j];
    //  console.log(leftChar, rightChar);
     if (leftChar !== rightChar) {
      if(!hasRemovedOneChar && text[i + 1] === rightChar){
        i++;
      } else if(!hasRemovedOneChar && text[j - 1] === leftChar){
        j--;
      } else {
        return false;
      }
      hasRemovedOneChar = true;
       /* if (
         !hasRemovedOneChar &&
         (leftChar + 1 === rightChar || rightChar - 1 === leftChar)
       ) {
         hasRemovedOneChar = true;
       } else {
         return false;
       } */
     }

     i++;
     j--;
   }
   return true;
 };

 /* console.log(`Is "racecar" almost a palindrome?:`,almostPalindromeSolution('racecar'))
 console.log(`Is an empty string almost a palindrome?:`,almostPalindromeSolution(''))
 console.log(`Is "raceacar" almost a palindrome?:`,almostPalindromeSolution('raceacar'))
 console.log(`Is "raceaacar" almost a palindrome?:`,almostPalindromeSolution('raceaacar'))
 console.log(`Is "raceaqcar" almost a palindrome?:`,almostPalindromeSolution('raceaqcar'))
 */
 // linkedlist
 
 class ListNode {
  constructor(val, next){
    this.value = val;
    this.next = next
  }
}

function printList(list) {
  let current = list;
  let output = [];
  while (current) {
    output.push(current.value);
    current = current.next;
  }
  output.push("null");
  console.log(output.join(" -> "));
}

// linkedlist => 1,2,3,4,5
const linkedlist = [7, 6, 5, 4, 3, 2, 1].reduce((acc, cur) => {
 return new ListNode(cur, acc)
}, null);

// 5,4,3,2,1
const reverseList = (linkedlist) => {
  let currNode = linkedlist;
  let prev = null;

  while(currNode !== null) {
    const next = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
  }
  return prev;
}
// const reversed = reverseList(linkedlist)
// printList(reversed)

const reverseList2 = (head) => {
  let curr = head;
  let prev = null;
  while(curr != null) {
    const next = curr.next
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return curr;
};
const reversed = reverseList2(linkedlist)
console.clear()
printList(reversed)
// reverse linkedlist based on m and n
// m= 3, n= 5
// from 1 => 2 => 3 => 4 => 5 => 6 => 7
// to 1 => 2 => 5 => 4 => 3 => 6 => 7
const reverseLinkedListByPosition = (head, m, n) => {
  let p = 1;
  let currentNode = head;
  let nodeBeforeReversal = head;
  while(p < m - 1) {
    nodeBeforeReversal = currentNode.next
    p ++;
  }
  let curr = nodeBeforeReversal.next;
  // let prev = curr;
  while(p >=m && p <= n){
    const next = curr.next;
    curr.next // not finished
  }

}
// console.clear()
// reverseLinkedListByPosition(linkedlist, 3, 5);

