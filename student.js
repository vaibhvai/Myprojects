class students{
    constructor(name,age,id,fees,time){
        this.name=name;
        this.age=age;
        this.id=id;
        this.fees=[];
        this.time=time;
    }
   getDetails(fee_student){
    this.fees.push(fee_student)
   }
   display(){
  console.log(this.fees)
   }
}
const student1=new students('vaibhavi',21, 1234,5000,10)

student1.getDetails('50000');
console.log(student1.display());
console.log(student1);
