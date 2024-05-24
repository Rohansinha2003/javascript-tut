//object literals

//Object.create{}
const jsuser = {
    name:"Rohan",
    age:23,
     location:"bhilai",
     email:"23456ygfcfg",
     isloggedin:false,
     lastloggindate:"monday"

}
console.log(jsuser["email"]);
jsuser.email="2003rohansinha@gmail.com"
console.log(jsuser["email"]);
Object.freeze(jsuser)