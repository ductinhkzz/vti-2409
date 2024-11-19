/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';
console.log('=======================');
console.log('Hello');
console.log('=======================');

/**
 * Datatype
 *  + Primitive type: number, string, boolean, undefined, null, void
 */
const num: number = 123;
const str: string = 'string';
const is_male: boolean = false;
const isNull: null = null;
const isUndefined: undefined = undefined;
function test() {}
const isVoid: void = test();

/**
 *  + Union Datatype
 */

let unionA: string | number;
unionA = 'string';
unionA = 12;

let color: 'red' | 'blue' | 'green';
color = 'blue';
color = 'green';

/**
 * Wrapper Class
 *  + String
 *  + Boolean
 *  + Number
 *  + Array
 *  + Object
 *  + Date
 */

/**
 * User-defined Type (Reference Type)
 *  + Date
 *  + Array
 *  + Map
 *  + Set
 *  + Enum
 *  + Class
 */

const today: Date = new Date();
const arr: number[] = [1, 2, 3, 4, 1, 2, 3, 4, 5];
const arr2: Array<number | string> = [1, 2, 3, '23223'];

enum ColorEnum {
  RED = 'Red',
  BLUE = 'Blue',
}

let color1: ColorEnum = ColorEnum.RED;

enum Color1Enum {
  RED,
  BLUE,
}

const arrEnum: Color1Enum[] = [Color1Enum.BLUE];

/**
 * Set
 */

const setList = new Set<number>(arr);
const uniqueArr = [...setList];

/**
 * Map
 */

const mapList = new Map<string, number>();

mapList.set('a', 1);
mapList.set('a', 2);
mapList.set('b', 5);

/**
 * Map vs Object ??
 */

/**
 * Object
 *  + Type
 *  + Interface
 * => So sánh: type vs interface
 */

type PhoneType = number | string;
type Gender = 'male' | 'female';

type BaseUserType = {
  name: string;
  age: number;
};

type UserType = BaseUserType & {
  phone?: PhoneType;
  gender?: Gender;
};

interface BaseUser {
  name: string;
  age: number;
}

interface IUser extends BaseUser {
  phone?: PhoneType;
  gender?: Gender;
}

const user1: IUser = {
  name: 'Tinh',
  age: 267,
};

interface IWork {
  name: string;
  printInfo: () => void;
}

class Person implements IWork {
  static counter: number = 0;
  private id: number;
  public name: string;

  constructor(name: string) {
    this.name = name;
    this.id = ++Person.counter;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  printInfo() {
    console.log('=======================');
    console.log(`ID: ${this.id}, Name: ${this.name}`);
    console.log('=======================');
  }
}

export class Student extends Person {
  private className: string;

  constructor(name: string, className: string) {
    super(name);
    this.className = className;
  }

  printInfo(): void {
    console.log('=======================');
    console.log();
    console.log('=======================');
  }

  printClass() {

  }
}

/**
 * Function
 *  + Normal
 *  + Arrow
 *  => So sanh
 */
const normalFuncVal = normalFunc(45, 'Normal call')

function normalFunc(num: number, str: string): void {
  console.log('=========normalFunc==============');
  console.log(num, str);
  console.log('=======================');
}
normalFunc.apply({ test: 1213 }, [45, 'Use Apply']);
normalFunc.call(this, 45, 'Use Call ');
const bindFunc = normalFunc.bind(this, 45, 'Use Bind');
bindFunc();
/**
 * => So sanh: call, bind, apply
 */
const normalFunc2 = function(obj: UserType) {
  
}

/**
 * This is Arrow Function
 * @param num input number
 * @param str input string
 * @returns number value
 */
const arrowFunc = (num: number, str: string): number => {

  console.log('==============this===arrowFunc======');
  console.log(this);
  console.log('=======================');
  console.log('=========arrowFunc==============');
  console.log(num, str);
  console.log('=======================');
  return num;
}
arrowFunc.apply({ test: 123 }, [45, 'Use Apply']);

/**
 * Generic
 *  + Type
 *  + Interface
 *  + Class
 *  + Function
 */

type OptionType<T> = {
  label: string;
  value: T;
}

const option: OptionType<number> = { label: 'Test', value: 1232 } 

interface IOptionType<T> {
  label: string;
  value: T;
}

const option1: IOptionType<string> = { label: 'Test', value: '1232' } 

const printValues = <T>(value: T) => {
  console.log('=======================');
  console.log(value);
  console.log('=======================');
}

printValues('Test');

class ModalData<T> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}

const d = new ModalData('Test');