import { onSnapshot,collection, getDocs, db, addDoc, doc, deleteDoc, updateDoc } from './config.js'
let users=[]
const unsub=onSnapshot(collection(db,"users"),(res)=>{
    res?.docs?.forEach(elm => {
        users.push({uid: elm?.id,...elm.data()})
        
    });
    console.log("data:",users)
})

let deleteData=async(uid)=>{
    try{
    await deleteDoc(doc(db, "users", uid)).then(()=>{
        console.log("Succesfully deleted!")
    });
}catch(error){
    console.error(error)
}
}

let updateData=async(uid)=>{
    try{
    const updateDocRef=doc(db,"users",uid)
    let form= document.querySelector("#form")
    await updateDoc(updateDocRef,{
        name:form[0].value,
        email:form[1].value,
        age:form[2].value,
        address:form[3].value
    }).then(()=>{
        console.log("Successfully Updated!")
        form.reset()
        document.querySelector('.update').style.display = 'none'
        document.querySelector('#add_btn').style.display = 'block'
    })

    }catch(error){
        console.error(error)
    }

}

let editData=async()=>{
    let form=document.querySelector("#form")
    let findUser=users.find((user)=>user.uid===uid)
    name:findUser.name
    email:findUser.email
    age:findUser.age
    address:findUser.address
    document.querySelector('.update').style.display = 'flex'
    form.querySelector('#add_btn').style.display = 'none'
    let updateBtn=document.createElement("span")
    updateBtn.id="update_btn"
    updateBtn.innerText="Update"
    updateBtn.addEventListener("click",()=>{
        updateData(uid)
    })

      let updateDiv = document.querySelector('.update')
    updateDiv.innerHTML = ''
    updateDiv.appendChild(updateBtn)
}
let cardboxDiv=document.querySelector(".cards-box")
let renderUsers=()=>{
    cardboxDiv.innerHTML=""
    users.map((user)=>{
        let cardDiv=document.createElement("div")
        cardDiv.className=card
        cardDiv.innerHTML=`
        <div class="btn">
        <button class="del_btn">delete<button>
        <button class="edit_btn">edit<button>
        </div>
        cardDiv.querySelector("del_btn").addEventListener("click",()=>{
            deleteData(user.uid)})
         cardDiv.querySelector("edit_btn").addEventListener("click",()=>{
            editData(user.uid)})
        cardboxDiv.appendChild(cardDiv)
        `
    })

}