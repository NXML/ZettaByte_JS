// QUestion 1
console.log(" QUESTION 1 \n\n")

var size = 5

for (let i = size; i >= 0; i--) {
    let string = ""
    for (let j = 0; j < size; j++) {
        if (!i || !j) {
            string += "*"
        }
    }
    console.log(string)
}

console.log("\n\n QUESTION 2 \n\n")

//QUESTION 2

let Data = [{
    Name: "jhon",
    Age: "21",
    Course: [{
        Name: "course js",
        Paid: 100000,
        subCourse: [{
            Episode: 1,
            Desc: "introduction",
        },
        {
            Episode: 2,
            Desc: "array",
        }]
    },
    {
        Name: "course php",
        subCourse: [{
            Episode: 1,
            Desc: "introduction",
        },
        {
            Episode: 2,
            Desc: "array",
        }]
    }]
},
{
    Name: "doe",
    Age: "20",
    Course: [{
        Name: "course graphql",
        Paid: 150000,
        subCourse: [{
            Episode: 1,
            Desc: "introduction",
        },
        {
            Episode: 2,
            Desc: "array",
        }]
    },
    {
        Name: "course python",
        subCourse: [{
            Episode: 1,
            Desc: "introduction",
        },
        {
            Episode: 2,
            Desc: "array",
        }]
    }]
}]


var filtered = [];

Data.forEach(element => {
    if (0 + element.Age <= 20) return
    element.Course.forEach(course => {
        if (!course.Paid > 0) return
        course.subCourse.forEach(subcourse => {
            if (subcourse.Episode = 1)
                filtered.push(subcourse)
        });

    })
});

console.log(filtered)





console.log("\n\n QUESTION 3 \n\n")



// Question 3

// I used regular JS for this exercice not TS so enum were not suported
var entity = ["programmer", "it support", "ui/ux"]
var Type = ["junior", "senior", "leader"]
 Data = [{
    Name: "jhon",
    Age: "21",
    positions: [{
        Entity: "programmer",
        type: "leader",
    },
    {
        Entity: "it support",
        type: "junior"
    },
    {
        Entity: "programmer",
        type: "senior"
    }]
}]


function checkPossiblilityToAdd(checkuser){

    var tempdata = [...Data]

    tempdata.push(checkuser)

    var dic = {

    }
    entity.forEach(e => {
        dic[e] = []
    });


    tempdata.forEach(user => {
        user.positions.forEach(position => {
            dic[position.Entity].push(position.type)   
        });
    });


for (let i = 0; i < Object.keys(dic).length; i++) {
    const entity = Object.keys(dic)[i];
    //check for a leader constraubt
    if(dic[entity].filter((position)=>{return position=="leader"}).length>1) {
        console.log('there is more than one leader in ' +entity)
        return false;
    }
    //check for a seinior constraint
    if(dic[entity].filter((position)=>{return position=="senior"}).length>5) {
        console.log('there is more than 5 seinor in ' +entity)
        return false;
    }
    
}

   return true;
}


var user1 = {
    Name: "jhon",
    Age: "21",
    positions: [{
        Entity: "programmer",
        type: "leader",
    },
    {
        Entity: "it support",
        type: "junior"
    },
    {
        Entity: "programmer",
        type: "senior"
    }]
}
var user2 = {
    Name: "snow",
    Age: "21",
    positions: [
    {
        Entity: "it support",
        type: "junior"
    },
    {
        Entity: "programmer",
        type: "senior"
    }]
}
var user3 = {
    Name: "Elena ",
    Age: "21",
    positions: [
    {
        Entity: "it support",
        type: "junior"
    },
    {
        Entity: "programmer",
        type: "senior"
    }]
}
var user4 = {
    Name: "Jackie snow",
    Age: "21",
    positions: [
    {
        Entity: "it support",
        type: "junior"
    },
    {
        Entity: "programmer",
        type: "senior"
    }]
}
var user5 = {
    Name: "luc snow",
    Age: "21",
    positions: [
    {
        Entity: "it support",
        type: "junior"
    },
    {
        Entity: "programmer",
        type: "senior"
    }]
}
var user6 = {
    Name: "Nicolas thSuper6th programer",
    Age: "21",
    positions: [
    {
        Entity: "it support",
        type: "junior"
    },
    {
        Entity: "programmer",
        type: "senior"
    }]
}



var appliants = [user1,user2,user3,user4,user5,user6]

appliants.forEach(appliant => {
    if(checkPossiblilityToAdd(appliant)){

        Data.push(appliant)
    }else{
        console.log("Cant add " +appliant.Name)
    }

});