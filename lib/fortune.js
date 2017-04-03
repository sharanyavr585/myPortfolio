var fortunecookies = [
"Conquer your fears or they will conquer you",
"perfect practice makes perfect",
"Do not fear what you dont know",
"Whenever possible keep it simple",
];

exports.getFortune = function(){
	var idx = Math.floor(Math.random()*fortunecookies.length);
	return fortunecookies[idx];
}