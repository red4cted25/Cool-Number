const coolArray = [];
for(let i = 0; i < 7; i++) {
    coolNumber = Math.floor(Math.random() * 10);
    if(coolArray.includes(coolNumber)) {
        continue;
    }else{
        console.log(coolNumber);
        coolArray.push(coolNumber);
    };
};
