// array = [1,2,3,4,5]
// console.log(array);

//     const myarray = [0,1,2,3,4,5]
//     //console.log(myarray);
//     myarray.push(9)
//     console.log(myarray);
//     myarray.push(10)
//     console.log(myarray);
//     myarray.pop()
//     console.log(myarray);

const marvel_heros =["thor", "ironman", "wonderwomen"]

const dc_heros =["batman", "superman", "flash"]

 //marvel_heros.push(dc_heros)

 //console.log(marvel_heros);

//  marvel_heros.concat(dc_heros)
//  console.log(marvel_heros);

// const all_heros = [...marvel_heros , ...dc_heros]

// console.log(all_heros);

const another_array = [1,2,3,[4,5,6],7,8,[4,5,6]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Rohan"));
console.log(Array.from("Rohan"));