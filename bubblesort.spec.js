describe('Bubble Sort', function(){
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
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
});