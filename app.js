"use strict"

const username = prompt('Welcome! What\'s your name?')
console.log('User name: ' + username);

alert('Hello, ' + username + ' ! I\'m going to ask you a series of yes/no questions to see how well you know me.')

const siblings = prompt ('First, ' + username + ', do I have any siblings?')
console.log('Siblings? Answer: ' + siblings)
if(siblings.toLowerCase == 'yes' || siblings.toLowerCase == 'y') {
    alert('Actually, ' + username + ', I\'m an only child and I was raised by a single mom. But I do have a lot of close friends that feel like siblings to me. Next question!');
}
else if(siblings.toLowerCase() == 'no' || siblings.toLowerCase() == 'n') {
    alert('Great job, ' + username + '! I do have a few step-siblings but we don\'t know each other very well. Next question!');
}

const children = prompt ('Do I have any children of my own, ' + username + '?' );
console.log('Children? Answer: ' + children);
if(children.toLowerCase() == 'yes' || children.toLowerCase() == 'y') {
    alert('That\'s right, ' + username + '! I have the sweetest, kindest, and funniest 7-year-old on the planet. His name is Oliver.');
}
else if(children.toLowerCase() == 'no' || children.toLowerCase() == 'n') {
    alert('You didn\'t know, ' + username + '?! I have the sweetest, kindest, and funniest 7-year-old on the planet. His name is Oliver.');
}

const crafts = prompt ('Okay, you\'re doing great ' + username + '. Next question: Do I enjoy making art and crafting?' );
console.log('Do I enjoy crafts? Answer: ' + crafts);
if(crafts.toLowerCase() == 'yes' || crafts.toLowerCase() == 'y') {
    alert('Darn tootin\'' + username + '! I especially love wood burning and wool felting, but I\'m always into learning new crafty skills.');
}
else if(crafts.toLowerCase() == 'no' || crafts.toLowerCase() == 'n') {
    alert('Well, ' + username + ', looks like I\'ll have to make you a little something soon. I especially love wood burning and wool felting, but I\'m always into learning new crafty skills.');
}

const food = prompt ('Alright, here\'s a tough one for you: Do I like southern food?');
console.log('Like southern food? Answer: ' + food);
if(food.toLowerCase() == 'yes' || food.toLowerCase() == 'y') {
    alert('Zing! You are so smart, ' + username + '. I love southern food. In fact, I love pretty much ALL food!');
}
else if(food.toLowerCase() == 'no' || food.toLowerCase() == 'n') {
    alert(username + '. Seriously? Who doesn\'t love southern food?!');
}
const travel = prompt ('Last one, ' + username + ', you\'ve really done a bang-up job here today. So, tell me, have I ever traveled overseas?');
console.log('Overseas travel? Answer: ' + travel);
if(travel.toLowerCase() == 'yes' || travel.toLowerCase() == 'y') {
    alert('Nice try, ' + username + ', but I have never left the country. Well, I went to Toronto once.');
}
else if(travel.toLowerCase() == 'no' || travel.toLowerCase() == 'n') {
    alert('Spot on, ' + username + '! I haven\'t been outside the country except one quick trip to Toronto back before you needed a passport to cross the border in a car!');
}

