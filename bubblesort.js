const swap = (val1, val2) => {
  return [val2, val1];
};

const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      const result = swap(arr[i], arr[i + 1]);

      // console.log('larger:',larger,'-','smaller:',smaller);

      arr[i] = result[0];
      arr[i + 1] = result[1];

      // console.log('arr[i]:',arr[i],'-','arr[i+1]:',arr[i + 1]);
    }
  }

  return arr;
};