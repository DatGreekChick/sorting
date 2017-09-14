function swap(val1, val2) {
  return [val2, val1];
}

const bubbleSort = arr => {
  debugger;
  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const result = swap(arr[i], arr[i + 1]);

        arr[i] = result[0];
        arr[i + 1] = result[1];

        hasSwapped = hasSwapped || true;
      }
    }
  }

  return arr;
};