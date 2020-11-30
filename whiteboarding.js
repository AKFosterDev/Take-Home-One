// Hi Sarah!
// Thanks for the opportunity to complete these take home questions.
// I hope you like the quarantine pumpkin spice latte.
// Looking forward to hearing from you soon!
// Sincerely,
// Amanda Foster

// TECH QUESTIONS:

// What text editor do you use and why?
// It's funny how attached one can get to a text editor. When I first started learning to code, I used Sublime Text. As time went on, I changed over to Atom which I liked okay. It was familiar and simple to use. As I continued being exposed to more and more in my code learning journey, it became evident that I was going to have to up my game and switch to VSCode. So, I downloaded and installed it and about two minutes later said, "Forget this! This is way too complicated!". I was spending so much time, energy and effort learning to code that I didn't want to divert my focus to learning this text editor but I knew I had to figure this VSCode thing out. I watched some tutorials by developers that I follow and slow but sure, I was now coding in VSCode! Fast forward to today (about a year later), I am utterly and completely IN LOVE 💘 with VSCode. Now don't get me wrong, it's been a learning experience for sure and plenty of time has been spent troubleshooting but it's all been worth it! Oh, let me count the ways.... The extensions available in VSCode are extensive and so helpful for productivity. The git controls make using git much more manageable because it's easy to see what's been modified (and much more) in a clear visual way. The integrated terminal is brilliant! No more bouncing out of the text editor to fiddle around in the terminal. Everything is right there ready to do my bidding! I get excited by learning shortcuts and key bindings. And yes, I geek out and watch videos about VSCode to learn these things. As a developer, I believe that the tools we use are important and lend to the quality of our creations. I also geek out on useful Chrome extensions 🤣. I can't live with out the React Developer Tools extension or OneTab or LastPass or JSON Viewer....Okay, Okay! I'll stop but seriously so many awesome productivity tools!

// Compare and contrast equality operators in JavaScript and Ruby.

// The syntax for the equality operators is similar between both of these languages with the exception of the differences listed out below. Both languages also the bang operator (!) as a not equal signifier, albeit again with differences.
// JavaScript supports type coercion so it offers the ability to compare strict equality (===) || <not equal> (!==) and loose equality (==) || <not equal> (!=). Loose equality compares two values for equality after converting both values to a common type. Whereas, strict equality compares each value based on it's type and value. If the values have different types, the values are returned as not equal. Javascript
// In Ruby there is no type coercion so equality is evaluated based on the values using only (==) || <not equal> (!=). There is no converting values, Ruby compares them exactly as they are given.

// Do all dynamically-typed languages support type coercion?
// No, there are dynamically-typed languages that both do and do not support type coercion. JavaScript and Ruby are two prime examples. Javascript does support type coercion and Ruby does not. Programming languages are often referred to as being "strongly" or "weakly" typed. In weakly typed languages, variables can be implicitly coerced to unrelated types, whereas in a strongly typed language they cannot, and an explicit conversion is required. With dynamically-typed languages type checking happens at run-time rather than on compile.

// PROMPT:
// As a developer, you are given a string containing multiple words. Create a function that capitalizes all the words in the string. (Can be done in JS or Ruby)

let string1 = 'i am a string that is going to be changed!'
let string2 = 'hooray! i am an amazing sentence!'

// Create a function that takes in a string of multiple words
const stringCapitalizer = (str) => {
	return str
		.split(' ')
		.map((item) => {
			return item.charAt(0).toUpperCase() + item.substr(1)
		})
		.join(' ')
	// return the string with each word capitalized
}

console.log(stringCapitalizer(string1))
console.log(stringCapitalizer(string2))

// Hi again, Sarah.
// I know I was only asked to complete one of the two options but I felt compelled to complete this prompt as well. 😸

// As a developer, you are given a multi digit number. Write a function that takes the number and returns an array with a single integer at each index. (Can be done in JavaScript or Ruby)

let number1 = 4568568
let number2 = 97523
let number3 = 5983127756

// Create a function that accepts a multi digit number.
const numberToArray = (num) => {
	// return an array with a single integer at each index
	return num.toString().split('')
}

console.log(numberToArray(number1))
console.log(numberToArray(number2))
console.log(numberToArray(number3))

// Bye, Sarah. Till next time...

               _____
             ,-"     "-.
            / o       o \
           /   \     /   \
          /     )-"-(     \
         /     ( 6 6 )     \
        /       \ " /       \
       /         )=(         \
      /   o   .--"-"--.   o   \
     /    I  /  -   -  \  I    \
 .--(    (_}y/\       /\y{_)    )--.
(    ".___l\/__\_____/__\/l___,"    )
 \                                 /
  "-._      o O o O o O o      _,-"
      `--Y--.___________.--Y--'
         |==.___________.==| hjw
         `==.___________.==' `97