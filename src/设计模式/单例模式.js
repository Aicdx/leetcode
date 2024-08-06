class Singleton {
    show(){
        console.log('This is a Singleton class');
    }
    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
const s1 = Singleton.getInstance();
s1.show();
const s2 = Singleton.getInstance();
s2.show();
console.log(s1 === s2); // true

class Storage{
    static getInstance(){
        if(!Storage.instance){
            Storage.instance = new Storage()
        }
        return Storage.instance
    }
    getItem(key){
        return localStorage.getItem(key)
    }
    setItem(key,val){
        localStorage.setItem(key,val)
    }
}
const storeage1 = new Storage()
const storeage2 = new Storage()

storeage1.setItem('name','lilei')
console.log(storeage1.getItem('name'))
console.log(storeage2.getItem('name'))
console.log(storeage1===storeage2)