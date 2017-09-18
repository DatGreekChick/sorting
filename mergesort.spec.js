describe('Split Array function', function() {
  it('is able to split an odd array into two halves', function() {
    expect(split([7,4,9,1,2,5,3])).toEqual([[7,4,9,1],[2,5,3]]);
    expect(split([5,7,0])).toEqual([[5,7],[0]]);
    expect(split([0,6,1,22,5,8])).toEqual([[0,6,1],[22,5,8]]);
  });

  it('is able to split an even array into two halves', function() {
    expect(split([0,6,1,22,5,8])).toEqual([[0,6,1],[22,5,8]]);
    expect(split([4,6,1,2])).toEqual([[4,6],[1,2]]);
    expect(split([0,6,1,22,5,8,9,11,3,55])).toEqual([[0,6,1,22,5],[8,9,11,3,55]]);
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1,3],[2,7])).toEqual([1,2,3,7]);
    expect(merge([3,4],[2])).toEqual([2,3,4]);
    expect(merge([1,5,7,10],[2,3,8,11])).toEqual([1,2,3,5,7,8,10,11]);
  });
});

describe('Merge Sort', function(){
  it('returns an array that is completely sorted from smallest to largest', function(){
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([3])).toEqual([3]);
    expect(mergeSort([9,3,2,22,11,10,8])).toEqual([2,3,8,9,10,11,22]);
  });

  const arrToSort = [];

  for (let i = 0; i < Math.ceil(Math.random()*20); i++) {
    arrToSort.push(Math.floor(Math.random()*100));
  }

  const sorted = arrToSort.sort();

  it('correctly sorts a completely random array', function(){
    expect(mergeSort(arrToSort)).toEqual(sorted);
  });
});