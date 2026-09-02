// number - 15, 3.14, -10
// string - "hello", "I'am Ivan"
// boolean - true/false
// nuLL - null

// const name = "Ivan";
// let age = 12;
// const result = `Мене звати: ${name}`;
// console.log(result);

// let text = ""

// const name = "Ivan";
// let age = 12;
// let work = false
// console.log(`My name is: ${name}, I am: ${age}, I work: ${work}`);
// console.log(typeof age)
// let rusult = 10 + " apples"
// console.log(`There are: ${rusult}`)



// let age = prompt("How old are you");

// if (age <= 18){
// alert("You are under age");
// //}

// //else if (age >= 18){
// //alert("You are fine");
// //}

// let number = prompt("Write your rating 1 to 12")

// if (number >= 10 && number <= 12){
// alert("Молодець!")
// }

// if (number >= 7 && number <=9){
// alert("Добре")
// }

// if (number >= 4 && number <=6){
// alert("Старайся краще")
// }

// if (number >=1 && number <=3){
// alert("Погано")
// }

// let number1 = prompt("Write a first nummber")

// let number2 = prompt("Write a second nummber")

// let oparation = prompt("Choose one oparation + - / *")

// let rusult;

// switch (oparation){
//     case "+":
//     rusult = number1 - (-number2);     
//         break;

//     default:
//         break;
// }

// console.log("rusult: "+ rusult)




// for (let i = 1; i <= 10; i++) {
// console.log(`3 * ${i} = ${i*3}`)

// }


// for (let i = 1; i<= 10; i++) {
// console.log(`Toys ${i}`)





// if (i === 5) {
//     console.log("Loop 5")
// }


// }


// let i = 1
// let rusult = 0

// while (i <= 100) {
// console.log(i);
// rusult += i;
// i++;

// }

// console.log(`Cycle: ${rusult}`)

// let password
// let count = 3

// const correctPassword = "12345";
// let attempts = 3;

// while (attempts > 0) {
//     let input = prompt("Введіть пароль:");

//     if (input === null) {
//         alert("Ввід скасовано.");
//         break;
//     }

//     if (input === correctPassword) {
//         alert("Пароль вірний");
//         break;
//     } else {
//         attempts--;
//         if (attempts > 0) {
//             alert("Неправильний пароль. Залишилось спроб: " + attempts);
//         } else {
//             alert("Доступ заборонено");
//         }
//     }
// }

// let total = 0;

// while (true) {
//     let input = prompt("Введіть число (0 — для завершення):");

//     if (input === null) {
//         alert("Ввід скасовано.");
//         break;
//     }

//     let number = Number(input);

//     if (isNaN(number)) {
//         alert("Будь ласка, введіть коректне число.");
//         continue;
//     }

//     if (number === 0) {
//         break;
//     }

//     total += number;
// }

// alert("Сума введених чисел: " + total);

// for (let i = 1; i <= 30; i++) {
// if (i === 17) {
// break;
//     }
// if (i % 4 === 0) {
// continue;
// }
// console.log(i)
// }

// for (let i = 50; i <= 60; i++) {
//     if (i === 59) {
//     break;
//     }
// if (i === 55 || i === 57) {
//     continue;
// }
// console.log(i)
// }

// const secretNumber = Math.floor(Math.random () * 20) + 1;

// while (true) {
//   const userInput = prompt("Введите число от 1 до 20:");
//   const guess = Number(userInput);

//   if (guess === secretNumber) {
//     alert("Угадал!");
//     break;
//   } else {
//     alert("Не угадал, попробуй снова.");
//   }
// }

// const secretNumber = Math.floor(Math.random () * 100) + 1;
// let attempts = 0
// const maxAttempts = 10

// alert("Guess the number 1 though 100 you have 10 trys")
// for (let i = 1; i <= maxAttempts; i++) {
//     let guess = prompt(`Attemts ${i}: input number`)
//         let number = Number(guess)
//             if (isNaN(number)){
//                 alert ("This is not a number try again")
//                     continue;
//             }
//     attempts++
//             if (number === secretNumber){
//                 alert (`You have guesst the number ${secretNumber}You had attemts: ${attempts}`)
//                     break;
//             }
//             else if (number > secretNumber){
//                 alert (`This is bigger number`)
//             }
//             else {
//                 alert (`This is smaller number`)
//             }
//             if (i === maxAttempts){
//                 alert ("You have no more attemts")
//             }
// }

// let massage = "Hello"
// let firstWord = massage[0]
// let secondWord = massage[massage.length-1]
// console.log("firstLetter:", firstWord)
// console.log("secondLetter", secondWord)

// let fullName = "Ivan Snitko"
// let firstName = fullName.slice(0, 4)
// console.log(firstName)

// let Word = "Hello"

// if (Word.length > 6){
//     alert("Your word is too long")
// }
// else {
//     alert("Your word is too small")
// }

// let text = "Apple"
// let text2 = text.toUpperCase()
// console.log(text2)

// let text = "Apple"
// let text3 = text.slice(-3)
// console.log(text3)



// let fullName = "Иван   Петренко";

// let [name, surname] = fullName.trim().split(/\s+/);
// surname = surname.toUpperCase();

// console.log(`${name} ${surname}`);




// let userName = "iван"; 

// if (userName[0] === userName[0].toUpperCase()) {
//     console.log("Имя корректное");
// } else {
//     console.log("Имя должно начинаться с прописной буквы");
// }

// let animals = ["Dog", "Cat"]
// animals.push("Parot")
// console.log(animals)

// let games = ["Minecraft", "Roblox", "Terraria", "CS2", "Dont starve toghter"]
// console.log(games [0])
// console.log(games [games.length - 1])

// let Numbers = []
// for (let i = 1; i <= 10; i++) {
//     Numbers.push(i)
// }
// console.log(Numbers)

// let months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
//               "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
//               console.log(months[5])

// let table = [
//   ["яблоко", "банан", "груша"],
//   ["помидор", "огурец", "перец"],
//   ["хлеб", "масло", "сыр"]
// ];
// console.log(table)

// let shopinglist = []
// shopinglist.push("Apple", "Milk", "Bread", "Watermolon")
// shopinglist.pop()

// console.log(shopinglist)

// if (shopinglist.includes("Milk")) {
//     console.log("Milk is done")
// }
// else {
//     console.log("Milk is not in stock")
// }

// console.log(shopinglist.indexOf("Bread"))

// console.log(shopinglist.join("# "))

// let meals = [
//     ["омлет", "каша", "пицца"], 
//     ["борщ", "пицца", "котлета"],
//     ["паста", "салат", "пицца"]
// ];

// console.log("Все блюда:");
// for (let i = 0; i < meals.length; i++) {
//     for (let j = 0; j < meals[i].length; j++) {
//         console.log(meals[i][j]);
//     }
// }

// let pizzaCount = 0;
// for (let i = 0; i < meals.length; i++) {
//     for (let j = 0; j < meals[i].length; j++) {
//         if (meals[i][j].toLowerCase() === "пицца") {
//             pizzaCount++;
//         }
//     }
// }
// console.log(`Слово "пицца" встречается ${pizzaCount} раз(а).`);

// meals[1][2] = "фрукты";

// console.log("Обновленный массив:");
// console.log(meals);


// let words = [
//   ["яблуко", "груша"],
//   ["кавун", "диня", "полуниця"],
//   ["малина", "чорниця", "смородина"]
//  ];
// let longest = ""
//  for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < words[i].length; j++){

//         if (words[i][j].length > longest.length) {
//             longest = words[i][j]
//         }
            
//     }
//  }
//  console.log("The loggest word is" + longest)


// let data = [
//   [2, 5, 8],
//   [7, 6, 1],
//   [4, 3, 10]
// ];

// let count = 0;

// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data[i].length; j++) {
//     if (data[i][j] % 2 === 0) {
//       count++;
//     }
//   }
// }

// console.log("The numbers " + count)

// let numbers = [
//   [5, 2, 9],
//   [1, 7, 3],
//   [4, 6, 8]
// ];

// let max = numbers[0][0];

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbers[i].length; j++) {
//     if (numbers[i][j] > max) {
//       max = numbers[i][j];
//     }
//   }
// }

// console.log("Наибольшее число:" + max);





// const fruits = ["яблуко", "банан", "манго"];
// fruits.push("апельсин");
// fruits.pop(); 

// console.log(fruits);

// const numbers = [2, 5, 8, 10, 3];

// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log("Сума всіх чисел:", sum);

// let maxNum = Math.max(...numbers);
// console.log(numbers)
// console.log("Найбільше число:", maxNum);

// let evenCount = numbers.filter(num => num % 2 === 0);
// console.log("Кількість парних чисел:", evenCount);

// const words = ["кіт", "собака", "рибка", "папуга"];

// for (let i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }

// let hasCat = words.includes("кіт");
// console.log("Чи є слово 'кіт'? ->", hasCat);





// let numbers = [8, 3, 10, 1, 5];
// numbers.sort((a,b)=>a-b)
// console.log(numbers)

// let fruits = ["яблоко", "груша", "апельсин", "банан"];
// fruits.sort()
// console.log(fruits)

// let nums = [12, 7, 22, 5, 19];

// let max = Math.max(...nums)
// console.log("Найбільше число:", max)



// let numbers = [5, 12, 3, 7, 1, 9];

// numbers.sort((a, b) => b - a)
// console.log(numbers)

// let max = Math.max(...numbers)
// console.log("Найбільше число:", max)

// let least = Math.min(...numbers)
// console.log("Smallest number:", least)

// let grades = [
//   {subject: "Математика", mark: 12},
//   {subject: "Історія", mark: 9},
//   {subject: "Англійська", mark: 10},
//   {subject: "Фізика", mark: 7}];


// let grades1 = grades.find(item => item.subject === "Фізика");
// console.log(grades1);

// let players = [{name:"Ivan", score:400},
//                {name:"Max", score:255},
//                {name:"Sophia", score:65},
//                {name:"Kate", score:200},
//                {name:"Carlos", score:100},
// ];

// players = players.sort((a, b) => b.score - a.score)
// console.log(players);

// console.log("=== Leader Board ===")
// for (let i = 0; i < players.length; i++){
//     console.log("#"+ (i+1)+ " " + players[i].name + " - " + players[i].score + " Score")
// }
// console.log("=========================")

// let searchName = "Ivan"
// let foundIndex = -1

// for (let i = 0; i < players.length; i++){
//     if (players[i].name.toLowerCase()=== searchName.toLowerCase){
//         foundIndex = i 
//         break;
//     }
// }

// if (foundIndex === -1){
//     console.log("Player not found")
// }

// else {console.log("Player is found")}



// let numbers = [];
// for (let i = 0; i < 10; i++) {
//   numbers.push(Math.floor(Math.random() * 100) + 1);
// }

// console.log("Масив:", numbers);

// let min = Math.min(...numbers);

// console.log("Мінімальний елемент:", min);

// let max = Math.max(...numbers);

// console.log("Максимальний елемент:", max);

// let sum = numbers.reduce((acc, num) => acc + num, 0);
// let avg = sum / numbers.length;

// console.log("Середнє арифметичне:", avg);



// function squreArea(side){
// return side * side 
// }

// console.log(squreArea(4))

// function name(names = "Ivan" , age = 12){
//     return "Hello my name is " + names + " I am " + age
// }

// const name2 = name("Carlos", 15)
// console.log(name2)




// function multiplicationTable(num) {
//   console.log(`Таблиця множення для ${num}:`);
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
//   }
// }

// multiplicationTable(2)

// function checkAge(age = 12) {
//   if (age < 0) {
//     console.log("Вік не може бути від'ємним!");
//   } else if (age <= 18) {
//     console.log("Вам ще немає 18 років.");
//   } else if (age >= 18 && age < 60) {
//     console.log("Ви дорослий.");
//   } else {
//     console.log("Ви літнього віку.");
//   }
// }

// checkAge(18)




// function getEverAge(graedes) {
//     let sum = 0
//     for(let i = 0; i < graedes.length; i++) {
//         sum  = sum + graedes[i]
//     }
//     return sum/graedes.length
// }

// function getMark(everage) {
//     if (everage >= 90) return "A"
//     if (everage >= 75) return "B"
//     if (everage >= 60) return "C"
//     if (everage >= 40) return "D"
//     return "F"
// }

// let myGrades = [80, 95, 70, 65]
// let avg = getEverAge(myGrades)
// let mark = getMark(avg)

// console.log("Middle rusult:", avg)
// console.log("My mark is:", mark)




// function sayHello(name){
//     console.log("Hello, "+ name + "!")
// }

// sayHello("Ivan")



// function checkPassword(password) {
//   if (password.length <= 6) {
//     console.log("Пароль занадто короткий");
//   } else {
//     console.log("Пароль прийнято");
//   }
// }

// checkPassword(123456)



// function reverseString(str) {
//   let reversed = str.split("").reverse().join("");
//   console.log(reversed);
// }

// reverseString("Привіт")




// let clicks = 0
// function countClicks() {
//     clicks++
//     document.getElementById("counter").textContent = clicks 
// }


// function ranbowColor(color) {
//     document.body.style.background = color
// }

// const myText = document.getElementById("myText")
// const changeBtn = document.getElementById("btnChange")

// changeBtn.addEventListener("click", function(){
//     myText.innerText= "Change text"
// })

// function changeText(){
//     document.getElementById("greeting").innerText = "Hello my name is Ivan"
// 

// function makeNick() {
//     let name = document.getElementById("nameInput").value

//  let funnyWord = ["Bunny", "Funny", "Goofy"]
//  let randomWord = funnyWord[Math.floor(Math.random() * funnyWord.length)];

//  let nick = randomWord + " " + name

//  document.getElementById("nickname").innerText = "Your nick: " + nick;
// }

// function play(userChoice) {
//     const choices = [
//         "Rock", "Paper", "Sicors"
//     ]
//     let computerChoice = choices[Math.floor(Math.random() * 3)];

//     let result = ""

//     if (userChoice === computerChoice){
//         result = "Tie" + userChoice
//     }

//     else if ((userChoice === "Rock" && computerChoice === "Sicors" )||(userChoice === "Sicors" && computerChoice === "Paper" )||(userChoice === "Paper" && computerChoice === "Rock" )){
//         result = "You win" + userChoice + "Win" + computerChoice
//     }
//     else {
//         result = "You Lose" + computerChoice + "Lose" + userChoice
//     }

//     document.getElementById("result").innerText= result
// }





// function showReverse() {
//       let text = document.getElementById("userInput").value;
//       let reversed = text.split("").reverse().join("");
//       document.getElementById("result").textContent = reversed;
//     }



  //  const secretNumber = Math.floor(Math.random() * 10) + 1;

  //   function checkGuess() {
  //     let guess = Number(document.getElementById("userGuess").value);
  //     let result = document.getElementById("result");

  //     if (guess === secretNumber) {
  //       result.textContent = "Молодець, ти вгадав!";
  //     } else {
  //       result.textContent = "Спробуй ще раз.";
  //     }
  //   }

  
// const questions = [
//       { q: 'Якого кольору небо?', answers: ['Синє', 'Зелене', 'Червоне', 'Біле'], correct: 0 },
//       { q: 'Скільки буде 2 + 2?', answers: ['3', '4', '5', '22'], correct: 1 },
//       { q: 'Хто гавкає?', answers: ['Кішка', 'Собака', 'Пташка', 'Миша'], correct: 1 },
//       { q: 'Що росте з насіння?', answers: ['Машина', 'Квітка', 'Годинник', 'Будинок'], correct: 1 }
//     ];

//     let current = 0;
//     let score = 0;

//     const questionEl = document.getElementById("question");
//     const answersEl = document.getElementById("answers");
//     const nextBtnEl = document.getElementById("nextBtn");

//     function showQuestion() {
//       const q = questions[current];
//       questionEl.textContent = q.q;
//       answersEl.innerHTML = "";
//       nextBtnEl.style.display = "none";

//       for (let i = 0; i < q.answers.length; i++) {
//         const btn = document.createElement("button");
//         btn.textContent = q.answers[i];
//         btn.onclick = () => selectAnswer(i);
//         answersEl.appendChild(btn);
//       }
//     }

//     function selectAnswer(i) {
//       const q = questions[current];
//       const buttons = answersEl.querySelectorAll("button");

//       buttons.forEach((btn, index) => {
//         btn.disabled = true;
//         if (index === q.correct) btn.style.backgroundColor = "green";
//         else if (index === i) btn.style.backgroundColor = "red";
//       });

//       if (i === q.correct) score++;
//       nextBtnEl.style.display = "block";
//     }

//     nextBtnEl.onclick = () => {
//       current++;
//       if (current < questions.length) {
//         showQuestion();
//       } else {
//         showResult();
//       }
//     };

//     function showResult() {
//       questionEl.textContent = `Гру закінчено! Твій результат: ${score} з ${questions.length}`;
//       answersEl.innerHTML = "";
//       nextBtnEl.style.display = "none";
//     }

//     showQuestion();




// let score = 0 

// function checkDoor(num) {
//   const ghostDoor = Math.floor(Math.random() * 3) + 1 
//   const message = document.getElementById("message")
//   const ghost = document.getElementById("ghost")
  
//   ghost.style.display = "none"

//   if (num === ghostDoor){
//     message.textContent = "The ghost found you"
//     ghost.style.display = "block"
//     score = 0 
//   }

//   else {
//     message.textContent = "You are save"
//     score++
//   }

//   document.getElementById("score").textContent = "score: " + score
// }

//  (function () {

//       let counter = 0;

     
//       const addBtn = document.getElementById('addBtn');
//       const container = document.getElementById('container');

   
//       function addParagraph() {
//         counter += 1;

//         const p = document.createElement('p');
//         p.className = 'new-item';

//         p.textContent = `I am a new element No. ${counter}`;

//         container.appendChild(p);

//         p.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//       }

//       addBtn.addEventListener('click', addParagraph);

//       window._addParagraph = addParagraph;
//     })();





// let count = 3;

// let countDown = setInterval(function() {
//   console.log(count)
//   count-- 

//   if (count === 0){
//     clearInterval(countDown)
//      console.log("GOOOO")
//   }

// }, 1000

// )


// let randomTime = Math.floor(Math.random()* 5000)+1000

// setTimeout(() => {
//   console.log("Suprise")
// }, randomTime);

// console.log("Wating " + randomTime + " Ms")


// let score = 0
// let pointPerClick = 1

// const scoreEl = document.getElementById("score")
// const clickBtn = document.getElementById("clickBtn")
// const upgradeBtn = document.getElementById("upgradeBtn")

// clickBtn.addEventListener("click", function(){
//   score += pointPerClick
//  scoreEl.textContent = score
// } )

//  upgradeBtn.addEventListener("click", function(){
//   if (score>= 10){
//     score -= 10
//     pointPerClick++
//     scoreEl.textContent = score 
//     upgradeBtn.textContent = `Buy +1 score multipller (${10 * pointPerClick} score)`
//   } else {
//     alert("Get more clicks")
//   }
//  })





//  let i = 1;
//     let output = document.getElementById("output");

//     let timer = setInterval(() => {
//       output.textContent += i + " ";
//       if (i === 10) {
//         clearInterval(timer); 
//       }
//       i++;
//     }, 1000);



//  const animals = ["Кіт", "Собака", "Папуга", "Рибка", "Кролик", "Черепаха", "Мавпа"];
//     const animalElement = document.getElementById("animal");
//     let count = 0;

//     const timer = setInterval(() => {
//       const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
//       animalElement.textContent = randomAnimal;
//       count++;

//       if (count === 5) {
//         clearInterval(timer); 
//         animalElement.textContent += " 🛑 (Таймер зупинено)";
//       }
//     }, 2000);

// let x = 3 + 2 * 2 


// let timer = setInterval(() => {
//    console.log("hello")
   
// }, 1000)


// function sum(a, b) {
//  return a + b 
// }

// console.log(sum(7, 83))




// function changeText(){
// document.getElementById("output").textContent = "hello"
// }





// const box = document.getElementById("box")
// const startBtn = document.getElementById("start")
// let startTime 

// startBtn.onclick = () => {
//   startBtn.disabled = true;
//   box.style.display = "none"
//   const delay = Math.random() * 2000 + 1000
//   setTimeout(showBox, delay)
// }


// function showBox() {
//  const x = Math.random() * (window.innerWidth - 120)
//  const y = Math.random() * (window.innerHeight - 120)
//  box.style.left = x + "px"
//  box.style.top = y + "px"
//  box.style.display = "block"
//  startTime = Date.now()
// }


// box.onclick = () => {
//   const time = Date.now() - startTime
//   alert("Your reaction: " + time + " ms!")
//   box.style.display = "none"
//   startBtn.disabled = false
// }



// let count = 0;
// const span = document.getElementById("count")
// const btn = document.getElementById("btn")

// function changeColor(){
//   document.getElementById("title").style.color = "blue"
// }

// btn.addEventListener("click", function(){
// count++
// span.textContent = count
// })




// function nameGreed(){
//   const name = document.getElementById("nameInput").value 
//   alert("Hello " + name + "!")
// }













// const marks = [10, 8, 12, 11, 9, 10];

// const avg =
//   marks.reduce((sum, n) => sum + n, 0) / (marks.length || 1);

// console.log("Середній бал:", avg.toFixed(2));

// if (avg > 10) {
//   console.log("Молодець!");
// } else {
//   console.log("Потрібно трохи попрацювати.");
// }




// function generatePassword(length) {
//   const chars =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     const idx = Math.floor(Math.random() * chars.length);
//     result += chars[idx];
//   }
//   return result;
// }

// console.log(generatePassword(12));



// const btn = document.getElementById("btn")
// btn.addEventListener("click", function (){
//   btn.style.borderRadius = "50%"
// })


// const par = document.getElementById("p")
// par.addEventListener("click", function (){
// par.textContent = "Hello"
// })

// const display = document.getElementById("display")
// const startBtn = document.getElementById("startBtn")
// const stopBtn = document.getElementById("stopBtn")
// const resetBtn = document.getElementById("resetBtn")

// let startTime = 0;
// let elapsed = 0;
// let timerId = null

// function format(ms){
//   const minutes = Math.floor(ms / 60000) 
//   const seconds = Math.floor((ms % 60000)/ 1000)
// const milliseconds = ms % 1000;
// return String(minutes).padStart(2,`0`) + `:` +
// String(seconds).padStart(2,`0`) + `:` +
// String(milliseconds).padStart(3,`0`)
// }

// function update(){
//   const now = Date.now()
//   elapsed = now - startTime
//   display.textContent = format(elapsed)
// }

// startBtn.addEventListener("click", ()=>{
//   if (timerId) return
//   startTime = Date.now() - elapsed
//   timerId = setInterval(update, 10)
// })

// stopBtn.addEventListener("click", ()=>{
//   if (!timerId) return
//   clearInterval(timerId)
//   timerId = null;
// })

// resetBtn.addEventListener("click", ()=> {
//   clearInterval(timerId)
//   timerId = null; 
//   elapsed = 0;
//   display.textContent = "00:00:000"
// })a





// fetch("./api/name.json").then(response => response.json()).then(data => {
//   document.body.innerHTML = `
//   <h2>name:${data.name}</h2>
//   <p>level:${data.level}</p>
//   <p>inventory:${data.inventory.join(", ")}</p>
//   <p>coins:${data.coins}</p>
//   `
// })
// .catch(error => console.error("error:",error));



// fetch("./api/minecraft.json").then(response => response.json()).then(data =>{
//   document.body.innerHTML = `
//   <p>nickname:${data.nickname}</p>
//   <p>hearts:${data.hearts}</p>
//   <h3>items</h3>
//   <p>items:${data.items.join(", ")}</p>
//   <p>gamemode:${data.gamemode}</p>
//   <h3>coords</h3>
//   <p>x:${data.coords.x}</p>
//   <p>y:${data.coords.y}</p>
//   <p>z:${data.coords.z}</p>
//   `
// })

// .catch(error => console.error("error:",error));




// function getMostExpensiveItem(data) {
//   if (!data.items || data.items.length === 0) return null;

//   return data.items.reduce((max, item) =>
//     item.price > max.price ? item : max
//   );
// }

// const data = {
//   items: [
//     { name: "sword", price: 100 },
//     { name: "shield", price: 120 },
//     { name: "ring", price: 250 }
//   ]
// };

// console.log(getMostExpensiveItem(data));



// fetch("./api/minecraft.json").then(response => response.json()).then(data =>{
// const items = data.items

// let maxItem = items[0]

// for(let i = 1; i < items.length; i++){
//   if(items[i].price > maxItem.price){
//     maxItem = items[i]
//   }
// }
// document.body.innerHTML = 
// `
// <p>Most expancive item ${maxItem.name} (${maxItem.price})</p>

// `
// })


// async function getWeather(){
// let response = await fetch("/api/weather.json")
// let data = await response.json()

// document.getElementById("out").innerText = `
// city: ${data.city}
// tempture: ${data.tempture}°C
// feels: ${data.feels}°C
// humidity: ${data.humidity}%
// wind: ${data.wind}m/s
// discripton: ${data.discription}
// `
// }




// document.getElementById("btn").addEventListener("click", loadPokemons)
 
// function loadPokemons(){
//   fetch("/api/pokemons.json").then(response => response.json ()).then(data => {
//     const list = document.getElementById("list")
//     list.innerHTML = ""

//     data.pokemons.forEach(pokemon => {
      
//     list.innerHTML += `
//     <div class = "card">
//     <h3> ${pokemon.name}</h3>
//     <p>type:${pokemon.type}
//     </div>
//     `});
//   })
// }




// class Player {
//   constructor(name, hp, attack){

//   this.name = name;
//   this.hp = hp;
//   this.attack = attack
//   }


// attack(){
//   console.log(this.name ` attacking a sheep`)
// }



// }



// const Alex = new Player("Alex", 20, 2);

// Alex.attack
// console.log(Alex)





// виводить у консоль:
// Steve атакує Zombie
// викликає у ворога метод так

// takeDamage(damage)
// зменшує hp

// виводить:
// Zombie отримав 5 дамагу
// якщо hp <= 0, виводить:  Zombie загинув

// info()

// виводить поточний стан:
// Steve: 15 HP

// Частина 3. Створення персонажів
// Створи мінімум 2 персонажі:
// - Steve
// - Zombie
// Частина 4. Бій
// — Steve атакує Zombie
// — Zombie атакує Steve

// Вивести стан обох персонажів




// class Character{
// constructor(name, hp, damage){
//   this.name = name
//   this.hp = hp
//   this.damage = damage
// }
// attack(enemy){
//   console.log(`${this.name} attacking a ${enemy.name}`)
//   enemy.takeDamage(this.damage);
// }
// takeDamage(damage){
//   this.hp -= damage
//   console.log(`${this.name} take ${damage} damage`)
//   if(this.hp <= 0){
//     console.log(`${this.name} died to a ${enemy.name}`)
//   }
  
// }
// info(){
// console.log(`${this.name} has ${this.hp} xp`)
// }

// }


// const Steve = new Character("Steve", 20, 2)
// const Zombie = new Character("Zombie", 20, 1)
// Steve.attack(Zombie)
// Zombie.info()
// Steve.info()



// class Player extends Character(){
//   heal(){
//     this.hp += 5
//     console.log(`${this.name} healed 5`)
//   }
// }


// class Mob extends Character(){
//   Rar(){
//     this.hp += 5
//     console.log(`${this.name} rared 3 times`)
//   }
// }

// Steve.heal()
// Zombie.Rar()




// class Character {
//   constructor(name, hp) {
//     this.name = name;
//     this.hp = hp;
//   }

//   info() {
//     console.log(`Name: ${this.name}, HP: ${this.hp}`);
//   }
// }

// class Warrior extends Character {
//   shield() {
//     console.log(`${this.name} raises a shield`);
//   }
// }

// class Mage extends Character {
//   castSpell() {
//     console.log(`${this.name} casts a powerful spell`);
//   }
// }

// const warrior = new Warrior("Steve", 20);
// const mage = new Mage("Zombie", 18);

// warrior.info();
// warrior.shield();
// mage.info();
// mage.castSpell();






// class NPC {
//   constructor(name) {
//     this.name = name
//   }
//   info(){
//     console.log(`${this.name} hello! `)
//   }
// }



// class ShopNPC extends NPC {
// sell(){
// console.log(`${this.name} sells you a speed potion`)
// }
// }

// class QuestNPC extends NPC {
// quest(){
// console.log(`${this.name} gave a quest to use 3 speed potions`)
// }
// }

// class EnemyNPC extends NPC {
// enemy(){
// console.log(`${this.name} tryes to kill you`)
// }
// }



// const shopNPC = new ShopNPC("ShopNPC")
// const questNPC = new QuestNPC("QuestNPC")
// const enemyNPC = new EnemyNPC("EnemyNPC")


// shopNPC.info()
// shopNPC.sell()
// questNPC.info()
// questNPC.quest()
// enemyNPC.info()
// enemyNPC.enemy()



// class Character {
//   constructor(name, hp, damage) {
//     this.name = name;
//     this.hp = hp;
//     this.damage = damage;
//   }
//   attack(takeDamage){
//     console.log(`${this.name} is attacking a Zombie`)
//   }
// }




// class Hero{
//   constructor() {
//     this._mana = 100
//   }

//   get mana(){
//     return this._mana
//   }
//   set mana(value){
//     if (value > 100){
//       this._mana = 100
//     }
//     else if (value < 0) {
//       this._mana = 0
//     }
//     else {
//       this._mana = value
//     }
//   }
  
// }


// const hero = new Hero()
// hero.mana = 55
// console.log(hero.mana)




// class bankAcount{
//   constructor(defultBalance = 0){
//     this._balance = defultBalance
//   }
//   get balance() {
//     return this._balance
//   }
//   set balance(value){
//     if (value < 0){
//       console.log("ops there was an error")
//       return
//     }
//     this._balance = value
//   }
// }

// const acount = new bankAcount()
// acount.balance = 100
// console.log(acount.balance)


// class Account {
//   constructor() {
//     this._password = "";
//   }

// get password() {
//     return "***"
//   }

//   set password(value) {
//     if (typeof value !== "string"){
//       console.log("This password is too short")
//       return
//     }
//     if (value.length < 6) {
//       console.log("Password is too short");
//       return
//     } 
//     this.password = value
//   } 
// }


// const bankAcount = new Account()
// bankAcount.password = 123
// bankAcount.password = "123"
// bankAcount.password = "12345"
// console.log(bankAcount.password)


// class User {
//   constructor(name){
//     this.name = name 
//   }
// }

// class Admin extends User{
//   constructor(name){
//     super(name)
//     this.role = "Admin"
//   }
// }

// const admin = new Admin("Ivan")
// console.log(admin.name)
// console.log(admin.role)


// class Animal{
//   speak(){
//     console.log("Animal voice")
//   }
// }

// class Cat extends Animal{
//   speak(){
//     super.speak()
//     console.log("Meow")
//   }
// }

// const cat = new Cat()
// cat.speak()



// class Hero {
//   constructor(name, damage) {
//     this.name = name
//     this.damage = damage
//   }

//   attack() {
//     console.log(`${this.name} is attacking damage ${this.damage}`)
//   }
// }

// class Warrior extends Hero {
//   constructor(name, damage, bonusDmg) {
//     super(name, damage);
//     this.bonusDmg = bonusDmg
//   }
//   attack(){
//     super.attack()
//     const totalDmg = this.damage + this.bonusDmg
//     console.log(`${this.name} has gave you more damage ${totalDmg}`)
//   }
// }

// const worrior = new Warrior("Worrior", 5, 2)
// worrior.attack()

const controls = document.querySelector(".controls");

controls.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    return;
  }

  const prevActivePane = document.querySelector(".pane.is-active");
  if (prevActivePane) {
    prevActivePane.classList.remove("is-active");
  }

  const paneId = e.target.dataset.id;
  const nextActivePane = document.querySelector(`#${paneId}`);
  nextActivePane.classList.add("is-active");
});