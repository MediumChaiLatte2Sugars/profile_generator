
const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');

const responseLog = {};
const rl = readline.createInterface({ input, output });

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  
  responseLog.name = answer;
  console.log(`Feedback recieved!`);

  rl.question("What's an activity you like doing? ", (answer) => {
  
    responseLog.activity = answer;
    console.log(`Feedback recieved!`);

    rl.question("What do you listen to while doing that? ", (answer) => {
  
      responseLog.soundOfChoice = answer;
      console.log(`Feedback recieved!`);
      
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
  
        responseLog.meal = answer;
        console.log(`Feedback recieved!`);
        
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
  
          responseLog.foodItem = answer;
          console.log(`Feedback recieved!`);
          
          rl.question("Which sport is your absolute favourite? ", (answer) => {
  
            responseLog.sport = answer;
            console.log(`Feedback recieved!`);
            
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
  
              responseLog.superpower = answer;
              console.log(`Feedback recieved!`);
              
              console.log(`${responseLog.name} loves to listen to ${responseLog.soundOfChoice} while ${responseLog.activity}, indulging in ${responseLog.foodItem} for ${responseLog.meal}, prefers ${responseLog.sport} over any other sport, and has a penchant for ${responseLog.superpower}.`)
              rl.close()
            });
          });
        });
      });
    });
  });

});

