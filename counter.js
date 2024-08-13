function counterClosure() {
  let count = 0;
  function increment() {
    count += 1;
  }
  function decrement() {
    count -= 1;
  }
  function getCount() {
    return count;
  }
  return {
    count,
    increment,
    decrement,
    getCount,
  };
}

const counter = counterClosure();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); 
console.log(counter.count);
