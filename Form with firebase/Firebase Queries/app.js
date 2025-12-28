import {onSnapshot, collection, db, getDocs, query, where,or,orderBy,limit } from "./config.js";
let getData=async()=>{
    try{
        const userRef=collection(db,"users")
        const q = query(userRef, where('age','>',11),  orderBy('age','desc'), limit(3) )
        const Doc=await getDocs(q)
        if(!Doc.empty){ 
        Doc.forEach((elm)=>{
            console.log(elm.data())
        })
        }
        else{
            console.log("Nothing Found!")
        }
    }catch(error){
        console.error(error)
    }

}
getData()
let realTimeData=[]
 const unsub=onSnapshot(collection(db,"users"),(res)=>{
    realTimeData=[]
    res?.docs?.forEach((doc)=>{
        realTimeData.push({id:doc?.id,...doc?.data()})
    })
    console.log("data:",realTimeData)
 })

 let btn=document.querySelector("#aboutPage")
 console.log(btn)
 btn.addEventListener("click",()=>{
    unsub()
    window.location.assign("./about.html")
 })
