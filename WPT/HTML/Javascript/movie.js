let obj={
    mname:"animal",
    director:"Sandeep Vanga",
    hero:["Ranbir kapoor","Bobby Deol","Anil kapoor"],
    heroine:["Tripti Dimri","Rashmika Mandanna"],
    villain:["Bobby Deol"],
    dateOFRelease:"24 Nov 2023",
    budget:2000000000,
    kids:false
    
}
console.log(obj.mname ,typeof(obj.mname))
console.log(obj.director ,typeof(obj.director))
console.log(obj.hero ,typeof(obj.hero))
console.log(obj.hero[2])
console.log(obj.hero.length)
console.log(obj.budget ,typeof(obj.budget))
console.log("total number of cast in movie:",obj.hero.length+obj.heroine.length)
console.log(obj.kids ,typeof(obj.kids))

function f2(anyobj)
{
    console.log(`name is: ${anyobj.mname} and hero is: ${anyobj.hero[1]} `)
}
f2(obj)


