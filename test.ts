interface Params {
    a: number;
    b: number;
}
const sum = ({ a, b}: Params) => {
    return a + b
 };
// const result = sum({ a: 4, b: 4 });
// console.log(result);
const namedData = { a: 5, b: 5, name: 'red'};
console.log(sum(namedData));

interface Child {
    cry: number;
    small: number;
}

const test = (data: Child) => {
    return data;
}
const myData = { cry: 1, small: 2, red: 1 };
test(myData);

const genericFunc = <T>(data: T[], pointer: boolean) => {
    console.log(data, 'this is the data');
    console.log(pointer, 'this is the pointer');
    return { data, pointer };
}
const { data, pointer } = genericFunc<[string, number]>([['1', 2], ['2', 3]], true);
// interface Cylinder {
//     radius: number;
//     height: number;
// };
interface Person {
    name: string;
    height: number;
}
class Cylinder {
    radius=1
    height=2
};

type T = typeof Cylinder;
declare let fn: T;
const c = new fn();
type c = InstanceType<typeof Cylinder>;

const p:Person = { name: 'may', height: 4 };
const lowPerson = { name: 'ready', 'height': 5, evil: false};
const realPerson: Person = lowPerson;
const theName:Person['name'] = p.name;
const email = (data: Person) => (data);
type T1 = typeof p;
const t = typeof p;
// console.log(typeof p);
// console.log(typeof email);

type Tuple = [string, number, Date];
type TupleEl = Tuple[number];
type PersonEl = Person['name' | 'height']; // Type is string

type funcType<T> = {
    (a: T, b: T) : T
}
type funcType2<T> = (a: T, b: T) => T

interface FuncType<T> {
    (a: T, b: T): T
};

const hi:funcType<string> = function(a,b){
   return a + b
}

const hime = <T>(a: T) => a;
interface fun {
    happy: boolean;
    joy: string;// 'full' | 'half full'
};
interface extendedFun1 extends fun { always: boolean }
type extendedFun = fun & {
    always: boolean;
}
const mm = {
    happy: true,
    joy: 'full',
    always: false,
    // ready: 'w'
}
const funBoy: extendedFun = mm;

hi('hello', 'my friend');

const myFunc = (term: string) => {
console.log(term)
 };
 myFunc.prototype.read = 'read';

 myFunc(String('neew'));
 const newMyFunc = myFunc('this guy');
 interface Base {
    me: string;
 }
type reddd = {
    [ky in 'me' | 'them']:string;
}
const mmmm:reddd = { me: 'red', them: 'reww' };
interface Person {
    name: string;
    email: string;
}
type eeee= keyof Person
const em:eeee = 'email'
type UpdatePerson = { [k in keyof Person]?: Person[k]}