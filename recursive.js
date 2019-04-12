module.exports = findRainfall = (arr) => {
  let index = 0;
  const nextLow = (i, max) => {
    let previous = arr[i];
    let total = 0;
    let current;
    for (index = i + 1; index < arr.length; index++) {
      current = arr[index];
      if (current < previous) { // recurse if there is a drop and potential vessel ahead
        total += nextLow(index, previous);
        if (previous < arr[index]) {  // if vessel end is greater than beginnig,
          index--;                    // check that end against previous vessels;
          continue;                   // i think this part makes it O(2N) worst-case
        }
      } else if (current > previous && i > 0) {  // do not treat ramp-up as a vessel end if it is the first call
        total += (index - i) * (Math.min(current, max) - previous); // MIN => calculate against lowest edge
        if (current > max) {  // have to go back and check previous vessel if
          return total;       // this end is greater than the beginning
        }
      }
      previous = arr[index];
    }
    return total;
  };
  return nextLow(0, arr[0]);
};
