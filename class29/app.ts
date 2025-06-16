///In this class we learn the static key word  and How to use this in classes. So let`s start

class Company {
    static myfvtCompany: string 

}
class Counter {
    static count: number = 0;
  
    static increment() {
      Counter.count++;
    }
  
    static getCount() {
      return Counter.count;
    }
  }
  
  Counter.increment();
  Counter.increment();
  Counter.increment();
  Counter.increment();
  Counter.increment();
  
  console.log(Counter.getCount());
  
// let myFvt = new Company('meta')
// console.log(myFvt.myfvtCompany)

console.log(Company.myfvtCompany)