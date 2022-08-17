function CreateCar(Name,Brand,Color){
      this.name=Name,
      this.brand=Brand,
      this.color=Color

      this.test=function drive(){
        return(`I am driving ${this.name}`)
      }
}

let car1=new CreateCar('baleno','Maruti','white')
console.log(car1, car1.test())
// car1.test()