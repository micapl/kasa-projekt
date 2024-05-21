import store from "store2";


export function setdarkmode(mode:boolean){
    store.set("darkmode", mode)
}
export function toggledarkmode(){
    console.log(store.get("darkmode"))
    store.set("darkmode", !store.get("darkmode"))
}

export function getdarkmode(){
    return store.get("darkmode")
}