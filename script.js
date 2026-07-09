const colors = [
"#F5C518",
"#FBF5E6",
"#C0392B",
"#27AE60",
"#8B9EC8"
];

const container = document.getElementById("confetti");

for(let i=0;i<35;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.top=-Math.random()*100+"px";

c.style.background=colors[Math.floor(Math.random()*colors.length)];

c.style.width=(6+Math.random()*8)+"px";
c.style.height=(6+Math.random()*8)+"px";

c.style.borderRadius=Math.random()>.5?"50%":"2px";

c.style.animationDuration=(6+Math.random()*6)+"s";

c.style.animationDelay=(-Math.random()*10)+"s";

container.appendChild(c);

}
