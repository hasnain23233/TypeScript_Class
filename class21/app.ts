// Tn this class we learn the Dom Heading and typecasting in typescript

alert('hasnain')
const Heading = document.querySelector('h1')!;
console.log(Heading.textContent)   
const acker = document.querySelector('a')!
const acker2 = document.querySelector('.connectPAgeTag')! as HTMLAnchorElement;
console.log(acker.textContent)
console.log(acker2.href)