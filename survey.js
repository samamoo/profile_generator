const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let response = "";
rl.question('What is your name? ', (name) => {
  console.log(`Nice to meet you, ${name}.`);

  rl.question("What's an activity you enjoy doing? ", (activity) => {
    console.log(`Great! You enjoy  ${activity}.`);

    rl.question("What do you listen to while doing that? ", (music) => {
      console.log(`That sounds great! You like to listen to ${music}.`);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        console.log(`Your favourite mealtime is ${meal}.`);

        rl.question("What's your favourite thing to eat for that meal? " , (faveFood) => {
          console.log(`Yum! ${faveFood} sounds delicious!`);

          rl.question("Which sport is your absolute favourite? ", (sport) => {
            console.log(`Your favourite sport is ${sport}.`);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`Whoa! You are amazing at ${superpower}.`)

              rl.write( `${name} loves to listen to ${music} while ${activity}, eating ${faveFood} for ${meal}, loves ${sport} over any other sport, and is amazing at ${superpower}.` + "\n")
              // console.log(`${name} loves to listen to ${music} while ${activity}, eating ${faveFood} for ${meal}, loves ${sport} over any other sport, and is amazing at ${superpower}.`)
              
                rl.close();
            })
          })
        })
      })
    })


  })
});
// `Hi my name is ${name} and I enjoy ${activity}
// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!