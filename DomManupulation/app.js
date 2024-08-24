// let ele=document.getElementById("ab");
// console.log(ele.innerText);


// let mydiv=document.getElementsByClassName("div");
// mydiv.innerHTML=``



// function myfun(){
    // return new Promise((res,rej)=>{
        // let data="this is my data";
        // if(data){
            // 
        // }
    // })
// }
// 
// let myPromise=new Promise((res,rej)=>{
    // let data="This is my data!!";
    //res();
    // if(data){
        // res(data);
    // }else{
        // rej("got some error !!!");
    // }  
    // 
// });
// myPromise
// .then((mydata)=>{
    // console.log(mydata);
// })
// .catch((err)=>{
    // console.log(err);
// })
// console.log(myPromise);
// 
// 
// 


//API
async function getCity(){
    let res=await fetch(``);
    let data=await res.json();
    return data[0]
}
getCity().then((data)=>{
    console.log(data);
});
