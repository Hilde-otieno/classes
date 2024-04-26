// const car1 = new Car("Toyota", "Camry", 2020, true);
// const car2 = new Car ("Honda", "fit", 2021, false)

// car1.toggleAvailable();
// console.log(car1.isAvailable);

// car2.toggleAvailable();
// console.log(car2.isAvailable);

// class Rental{
//     constructor(car, renterName, rentalStartDate, rentalEndDate){
//         this.car = car;
//         this.renterName = renterName;
//         this.rentalStartDate= rentalStartDate;
//         this.rentalEndDate = rentalEndDate
//     }
// calculateRentalDuration(){
//         const oneDay = 12*60*60;
//         const startDate = 
//         this.rentalStartDate.getTime()

//     }
// }
function Car(make,model,year,isAvailable){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;

    this.toggleAvailablity = ()=>{
        if(this.isAvailable==this.isAvailable){
            console.log("Car available")
        }
        else if(this.isAvailable!=this.isAvailable){
            console.log("Car not available")
        }
        else{
            console.log("Invalid")
        }
    }
}
const cumry = new Car("Toyota","Camry",2020,true);
console.log({Toyota})
subaru.toggleAvailablity()

class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
  
    calculateRentalDuration() {
      const startDate = this.rentalStartDate.getTime();
      const endDate = this.rentalEndDate.getTime();
      const millisecondsPerDay = 1000 * 60 * 60 * 24;
      const durationInMilliseconds = endDate - startDate;
      return Math.ceil(durationInMilliseconds / millisecondsPerDay);
    }
  }
  
  const toyota = new Car("Toyota", "Camry", 2020, true);
  const range = new Car("Range", "Vogue", 2024, false);

  
  const rental1 = new Rental(Toyota, "Bukhi", new Date("2022-12-24"), new Date("2022-12-27"));
const rental2 = new Rental(Range, "Kendi", new Date("2023-12-28"), new Date("2023-12-30"));

console.log(rental1.calculateRentalDuration()); 
console.log(rental2.calculateRentalDuration());

const audi = new Car("Audi", "A5", 2023, true);
const rental = new Rental(Audi, "Collins", new Date("2020-12-26"), new Date("2020-12-31"));
const rentalDuration = rental.calculateRentalDuration();
console.log("Rental Duration:", rentalDuration, "days");



class Question {
    constructor(text, options, correctAnswer) {
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  checkAnswer(userAnswer) {
    return userAnswer === this.correctAnswer;
  }
}



const question1 = new Question(
  "how many countries are in Africa?",
  ["15","80","48","55"],
  "54"
);


const userAnswer = "55";
console.log(question1.checkAnswer(userAnswer));

class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    nextQuestion() {
      this.currentQuestionIndex++;
    }
  
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
      this.nextQuestion();
    }
  }

