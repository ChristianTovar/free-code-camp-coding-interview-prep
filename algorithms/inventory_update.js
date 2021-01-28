function updateInventory(arr1, arr2) {
  let map1 = {};

  for (let [amount, item] of arr1) {
    map1[item] = amount;
  }

  for (let [amount, item] of arr2) {
    if (map1[item]) {
      const oldAmount = map1[item];
      map1[item] = oldAmount + amount;
    } else {
      map1[item] = amount;
    }
  }

  return Object.entries(map1).sort().map(([item, amount], _index) => [amount, item]);
}
