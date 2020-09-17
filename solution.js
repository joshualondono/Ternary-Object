const person = [{ name: "Jill", age: 16}, { name: "", age: 0 }, { name: "Bob", age: 14}];

const greeting = function (person) {
   return person.map(cur => cur.name !== '' ? `Hello ${cur.name}`:`Hello Stranger`)
}

greeting(person)


const drive = function (age) {
   return (
   age <= 14 ? `cannot drive`:
   age === 15 ? `can drive with a parent`:
   `yes they can drive`
   )

  
}

drive(1)

const speedMessage = function (speed) {
   return (
   speed === 70 ? `70 is the perfect speed`:
   speed >= 90 ? `Are you trying to get us killed`:
   speed < 50 && speed >= 10 ? `Faster please`:
   speed < 10 ? `you should not drive`:
   `${speed} is a decent speed`
   )
}

const allowableSpeed = Math.floor(Math.random() * 90)
speedMessage(allowableSpeed)

let arr = [
    'peaches',
    444.7,
    22,
    undefined,
    33.99999,
    null,
    1,
    'apple',
    4555,
    undefined,
    NaN,
    44.98999,
  ]
  let arr1 = []
  let arr2 = []
  let arr3 = []
  
  const mapArray = function (arr) {
  return arr.map(cur => {
   
   
   
   cur.toString().indexOf('.') === -1 ? cur.toString().slice(0, 3):
   cur > 50 ? arr1.push(cur):
   cur < 50 ? arr2.push(cur):
   arr3.push()
  return arr2
  })
}



let prices = {
  cigarettes: 5.99,
  coke: { lg: 2.99, sm: 1.99 },
  chips: 2.79,
};

const doubler = function (prices) {
   const arr = Object.keys(prices)
   
   return arr.map(x => {
   
   x instanceof Object ? true : x * 2
   
   })
}

doubler(prices)
//Object.keys(prices)
