const today = new Date();
today.getMonth();

const person = {
  age: 20
}


class Color {

}

const red = new Color();

let apples = 5

apples = 7

let speed: string = 'fast'

let colors: string[] = ['wer', 'qweqwe', 'qwd']

class Car {

}

let car: Car = new Car()

let point: {x: number, y: number} = {
  x: 10,
  y: 10
}

const logNumber: (i: number) => void = (i: number ) => {
  console.log(i)
}


const json  = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json)
console.log(coordinates);

let words = ['green', 'red', 'blue']
let word: string | number

for(let i = 0; i<words.length; i++) {
  if(words[i] == 'green') console.log(true)
}


let movieTitle: string = "qweqwe"
movieTitle.toUpperCase()

let n: number = 10
n += 10

let north: {a: number; b: boolean; c: string} = {
    a: 4654,
    b: false,
    c: "Sdflsdf"
}

const printNorth = (n:{a: number; b: boolean; c: string}):void => console.log(`${north.a} ${north.b} ${north.c}`)
printNorth(north)


const movies: string[] = ["Arrival", "The Thing", "Aliens", "Amadeus"]
let foundMovies: boolean

for(let movie of movies)
    if(movie == "Amadeus")
        foundMovies = true

function square(num: number | string): string{
    return `hi ${num}`
}

function greet(name: string = 'stranger'){
    console.log(`Hi there, ${name}!`)
}

greet()
greet('behemouth')

function rando(num: number):number | string{
    if(Math.random() < 0.5) return num.toString()
    return num
}


function makeError(s: string):never{
    throw new Error(s)
}

function doSomething():void {
    return undefined
}

const twoFer:
    (name?: string) => string =
    (name = 'you') =>  {return `One for ${name} and one for me`}

twoFer()
twoFer('lksdfls')

console.log(twoFer())
console.log(twoFer('Brady'))

const twoFerNew = (name:string = 'you'):string =>  {return `One for ${name} and one for me`}

let coordinate: {x: number; y: number} = {x: 10, y:20}

const getCoordinate = ():{x: number; y: number} => {return {x: 50, y:100}}

function getOrd():{x: number; y: number} {
        return {x: 40, y:100}
}

const personOne: {firstName: string; lastName: string} = {firstName: 'osaid', lastName: 'khan'}

const printName = (p:{firstName: string; lastName: string}):void =>
{console.log(`Person Object -> FirstName: ${p.firstName} LastName ${p.lastName}`)}

printName(personOne)
printName({firstName: 'Kylie', lastName: 'Monique'})
const personExtended: {firstName: string; lastName: string; age: number} = {firstName: 'Kylie', lastName: 'Monique', age: 57}
printName(personExtended)


const bola:
    { fix: string,      me: boolean, and: [number, boolean, string]} =
    { fix: 'fwfwefwef', me: true,    and: [12, true, 'lala']}
console.log(bola)

const testOne:
    {   tupOne: [number, string, boolean],
        tupTwo: [number, {a:string, b:boolean}]
    } =
    {   tupOne: [12, ' ', false],
        tupTwo: [12, {a:'  ', b:true}]
    }

enum Role {PULLER, PILLER, PUSHER = 123123}

const f = ():void => console.log(Role.PILLER  )


const fn = (x: number, y: string):string => x.toString() + y

console.log(fn(12, '12'))

const combine = (in1: number | string, in2: number | string):number | string => {
    if (typeof in1 === 'number' && typeof in2 === 'number')return in1 + in2
    return in1.toString()+ in2.toString()
}

console.log(combine(1231, 1231))
console.log(combine('sdf', 'qweqwe'))

type combinable = number | string

let asd: combinable = 10

asd = 'efwef'

type cus = {name: string, age: number}

const az: cus = {name:'lawson', age: 123123}

const add = (n1: number, n2:number):number  => n1 + n2

console.log(add(1, 2))

const printname = (name:string, n:number):void => {
    if(n === 0)return
    console.log(name)
    printname(name, n -1)
}
printname('ozzy', 4)

const printLearnlyFrom1ToN = (n: number):void => {
    if(n === 0) return
    printLearnlyFrom1ToN(n -1)
    console.log(n)
}
printLearnlyFrom1ToN(10)

const printLinearlyFromNTo1 = (num: number):void => {
    if(num === 0) return
    console.log(num)
    printLinearlyFromNTo1(num -1)
}
printLinearlyFromNTo1(10)

const fact = (n:number):number => {
    if(n === 1)return 1
    return n * fact(n-1)
}

console.log(fact(4))

const factorial = (n: number, s: number):number => {
    if(n == 0) return s
    return factorial(n-1, s * n)
}

const factTailOp = (n:number):number => factorial(n, 1)

console.log(factTailOp(4))

const reverseList = (list:number[], i:number):void => {
    if(i >= list.length-1-i) return
    const temp:number = list[i]
    list[i] = list[list.length-1-i]
    list[list.length-1-i] = temp
    reverseList(list, i+1)
}

const rev = (l:number[]) => reverseList(l, 0)

let arr:number[] = [1,2,3,4,5,6,7,8,9]
console.log(arr)

rev(arr)

console.log(arr)


const isPalindrome = (s:string, i:number):boolean => {
    if(i == Math.floor(s.length/2)) return true
    if(s[i] != s[s.length-1-i]) return false
    return isPalindrome(s, i+1)
}

console.log(isPalindrome("osaid", 0))
console.log(isPalindrome("OohoO", 0))

const fib = (n:number):number => {
    if(n==1 || n==0) return n
    return fib(n-1) + fib(n-2)
}

console.log(fib(3))
console.log(fib(4))
console.log(fib(5))

function isSubsequenceOld(s: string, t: string): boolean {
    let [l, r] = [0, 0]
    while(l < s.length && r < t.length) {
        if(s[l] == t[r]) l++
        r++
    }
    return l == s.length
};

const isSubsequence = (s:string, t:string):boolean => {
  let [l, r] = [0, 0]
  while(l < s.length && r < t.length) {
    if(s[l] == t[r]) l++
    r++
  }
  return l == s.length
}
