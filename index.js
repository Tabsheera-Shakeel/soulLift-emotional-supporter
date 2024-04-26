#! /usr/bin/env node     
//this is called shebang
// This CLI application is designed to provide emotional support messages to the user based on their selected emotion.
// The idea for this project was inspired by the need for a simple and accessible way to provide encouragement and positivity to users, especially during difficult time.
// The messages aim to uplift the user's spirits and offer reassurance, empathy, and support.
// The concluding message serves as a reminder of the user's resilience and encourages them to stay positive and keep moving forward.
import inquirer from "inquirer"; //importing inquirer for user's prompt and to make it accessible to others.
import chalk from "chalk"; //using chalk to add colours in output
const answer = await inquirer.prompt(//this line of code asking for user's input
[
    {
        name: "name",
        message: "ENTER YOUR BEAUTIFUL NAME"
    }, //asking for their name
    {
        name: "feeling",
        message: "I AM HERE TO PROVIDE YOU EMOTIONAL SUPPORT (press enter)"
    }, //telling why we are here
    {
        name: "emotion",
        message: "please choose your emotion", //propmt asking for their emotion
        type: "list", //type is list beacuse we are uing array below
        choices: ["SAD", "ANGRY", "DEMOTIVATED", "INSECURE", "FEARFUL", "ANXIOUS", "EMBRARRASSED", "DESPAIR", "LOST", "STRESSED", "GUILTY"]
    }
]);
const name = answer.name.trim(); // Trim the name to remove leading/trailing spaces
const emotion = answer.emotion.toUpperCase(); // Convert the emotion to uppercase 
//Displaying message based on user's emotions
//using conditional statements below
if (answer.emotion === "SAD") {
    console.log(chalk.bgBlueBright(`"Even the darkest nights will end, and the sun will rise again, 
    casting its warm light on a new day filled with hope"
    ${chalk.bgMagentaBright(answer.name)} "don't be sad, your happiness matter"`));
}
;
if (answer.emotion === "ANGRY") {
    console.log(chalk.bgRedBright(`"Anger can be like a big storm, strong and wild. But deep inside, it has the ability
     to become a soft rain that helps the garden of peace inside you grow."
     ${chalk.bgYellowBright(answer.name)} you don't look good when you are angry, so smile ^-^`));
}
;
if (answer.emotion === "DEMOTIVATED") {
    console.log(chalk.bgGreenBright(`"Every small step forward holds the promise of a great journey. 
    ${chalk.bgCyanBright(answer.name)} Your resilience is the seed from which success blossoms."`));
}
;
if (answer.emotion === "INSECURE") {
    console.log(chalk.bgYellowBright(`"Embrace the uniqueness that makes you shine,for in your vulnerabilities lies the beauty that makes you truly remarkable."
     ${chalk.bgGreenBright.italic(answer.name)} Embrace your uniqueness`));
}
;
if (answer.emotion === "FEARFUL") {
    console.log(chalk.bgMagentaBright(`"Being brave doesn't mean you're not scared. It means facing your fears with an open heart,
     knowing that every tough situation is a chance to find out how strong and tough you really are."
     ${chalk.bgWhiteBright(answer.name)} face your fear, i know you can do it`));
}
else if (answer.emotion === "ANXIOUS") {
    console.log((chalk.bgCyanBright `"In the middle of feeling really worried, try to find comfort in small hopes.
     They can guide you to feeling calmer inside."
     ${chalk.bgWhiteBright(answer.name)} don't worry, everything gonna be fine`));
}
else if (answer.emotion === "EMBRARRASSED") {
    console.log(chalk.bgGreenBright(`"Life's too short to not trip and fall gracefully into moments of sheer embarrassment.
     Embrace it like your own personal comedy show!"
     ${chalk.bgYellowBright(answer.name)} embrace your embarrassment ^.^`));
}
else if (answer.emotion === "DESPAIR") {
    console.log(chalk.bgYellowBright(`"Even in your darkest moments, remember, you are the author of your story.
     Turn the page, for hope and light still await in the unwritten chapters of your life."
     ${chalk.bgBlueBright(answer.name)} your  existence makes the world better ^-^`));
}
else if (answer.emotion === "LOST") {
    console.log(chalk.bgCyanBright(`"Even in the darkest of nights, remember,
     stars can't shine without darkness.
      ${chalk.bgWhiteBright(answer.name)} You're just finding your path."`));
}
else if (answer.emotion === "STRESSED") {
    console.log(chalk.bgMagentaBright(`"The present moment is all you ever have.
    ${chalk.bgCyanBright(answer.name)} Embrace it, for it holds the power to transform."`));
}
else if (answer.emotion === "GUILTY") {
    console.log(chalk.bgMagentaBright(`"Guilty hearts carry the weight of their own shadows, but 
    ${chalk.bgCyanBright(answer.name)} finding forgiveness can lift the weight off your shoulders."`));
}
;
//giving extra encourging message in the end 
console.log(chalk.bgBlueBright("\t\n\ REMEMBER YOU ARE DOING GREAT SO KEEP GOING AND BE HAPPY ^-^\t\n"));
//// This CLI application is my first own project,
// I created this project as a way to apply my programming skills and explore the process of building a software application from scratch.
// i am kinda proud of myself (hehe) ^-^
