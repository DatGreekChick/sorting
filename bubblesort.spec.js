describe('Bubble Sort', function(){
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  console.log(window);
  it('does not call the native sort function', function() {
    spyOn(Array.prototype, 'sort').and.callThrough();
    expect(Array.prototype.sort.calls.count()).toEqual(0);
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(swap.calls.count()).toEqual(0);
  });

  it('will return the only element if the array has length of 1', function() {
    expect(bubbleSort([1])).toEqual([1]);
    expect(swap.calls.count()).toEqual(0);
  });

  it('correctly sorts arrays of lengths greater than 1', function() {
    expect(bubbleSort([3,4,5,8,6,0,9])).toEqual([0,3,4,5,6,8,9]);
    expect(swap.calls.count()).toEqual(6);
  });

  const randArrToSort = [];

  for (let i = 0; i < Math.ceil(Math.random()*10); i++) {
    randArrToSort.push(Math.ceil*Math.random()*100);
  }

  it('properly sorts a randomized array (of length and elements)', function() {
    expect(randArrToSort).toEqual(randArrToSort.sort());
  });
});