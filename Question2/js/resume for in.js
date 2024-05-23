var obj = {
    name: "Premalatha UG",
    DateofBirth:"21May1992",
    Address:"234,TiruvalluvarStreet,Tambaram,Chennai-600089",
    EducationQualification:"M.sc(cs)",
    Institution:"Abcd College",
    Experience:"Nil",
    Email:"premalatha21292@gmail.com",
    PhoneNo:"9876543210",
    Skills:"c++,java",
    Hobbies:`Reading Books,Playing ThrowBall`
    };

for(var resume in obj){
    console.log(resume + ': ' + obj[resume]);
}