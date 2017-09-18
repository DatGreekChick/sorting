const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const splitArrs = split(arr),
        left = splitArrs[0],
        right = splitArrs[1];

  return merge(mergeSort(left), mergeSort(right));
};

const split = wholeArray => {
  const firstHalf = wholeArray.slice(0, Math.ceil(wholeArray.length/2)),
      secondHalf = wholeArray.slice(Math.ceil(wholeArray.length/2));

  return [firstHalf, secondHalf];
};

const merge = (firstArr, secondArr) => {
  let mergedArr = [];

  while (firstArr.length && secondArr.length) {
    if (firstArr[0] <= secondArr[0]) {
      mergedArr.push(firstArr[0]);
      firstArr.shift();
    } else {
      mergedArr.push(secondArr[0]);
      secondArr.shift();
    }
  }

  return firstArr.length ? mergedArr.concat(firstArr) : mergedArr.concat(secondArr);
};

// extra credit to work like .sort
// const comparator = (a, b) =>{
//   if (a < b) return -1; // returning `-1` means "a goes before b"
//   if (a > b) return 1;  // returning  `1` means "b goes before a"
//   return 0; // returning 0 means "a and b are equivalent"
// };