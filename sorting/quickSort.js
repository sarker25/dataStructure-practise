function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(Math.random() * arr.length)]; // Random pivot for better average case performance
    const left = [];
    const right = [];
    const equal = [];
  
    for (const element of arr) {
      if (element < pivot) {
        left.push(element);
      } else if (element > pivot) {
        right.push(element);
      } else {
        equal.push(element);
      }
    }
  
    return quickSort(left).concat(equal, quickSort(right));
  }
  

  