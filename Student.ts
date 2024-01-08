export class Student{
    id: number;
    name: string;
    age: number;
    address: string;

    constructor(id: number,name: string, age: number, address: string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
    }
    public showInfo(): void{
        console.log(`ID: ${this.id} - Tên: ${this.name} - Tuổi: ${this.age} - Địa chỉ : ${this.address}`)
    }
}