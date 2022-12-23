let n1:number = 10
let n2 = 20
let n3:number
n2 = 30

// primitive types
let a1:number = 10 // number
let b1:boolean = true // boolean
let s:string = 'India' // string
const pi = 3.142 //const number

let t:5 = 5 // here 5 is a type. TS will not allow us to set any other value than 5

// Array type
let students:string[] = ['Shubham','Jitesh','Mansi','Anuja']
console.log(students)

let students2 = ['Shubham','Jitesh','Mansi','Anuja']
console.log(students2)

// Tuple
let emp:[number,string] = [101, 'Tushar']
console.log(emp)

// Object type
type player = { name: string, city: string} // Declare your own object type

let s1:player = {
    name: 'Virat',
    city: 'Delhi'
}
console.log(s1)
console.log(s1.name)
let s2:player = { name:'Rohit', city:'Mumbai'}
console.log(s2)
console.log(s2.city)

// Any type
let m:any = 'Welcome'
console.log(m)
m = 101
console.log(m)

// enum type
enum days {mon,tue,wed,thu,fri,sat,sun} // default value starts from zero and is increment by 1
console.log(days.mon) 

enum colors{black=100, blue, red, green=200, white, orange}
console.log(colors.black)

enum roles{manager=501, admin=555, user=502}
console.log(roles.admin)
console.log(roles.manager)
console.log(roles.user)

// Union type
let p: (number | string | boolean ) = 'Hello'
console.log(p)
p = 107
console.log(p)
p = true
console.log(p)