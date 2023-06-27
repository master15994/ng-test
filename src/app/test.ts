function findDuplicates(arr: string[]) {
  let result: any = [];

  let temp: any = {};

  arr.forEach((item) => {
    if (temp[item]) {
      temp[item] += 1;
      result.push(item);
    } else {
      temp[item] = 1;
    }
  });
  return result;
}

console.log(findDuplicates(['1', '1', '2', '3', '4']));
console.log(findDuplicates(['Vasya', 'Mitya', 'Vasya']));
