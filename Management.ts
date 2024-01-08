
import { Student } from './Student';
import { promises as fs } from 'fs';
import * as readline from 'readline';
export class Management extends Student {
    StudentList: Student[] = [];
    rl: readline.Interface;

    constructor() {
        super(0, '', 0, '');
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    public async question(prompt: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(prompt, resolve);
        });
    }

    public async addStudent(): Promise<void>{
        let id = Number(await this.question('Nhập id: '));
        let name = String(await this.question('Nhập tên: '));
        let age = Number(await this.question('Nhập tuổi: '));
        let address = String(await this.question('Nhập địa chỉ: '));
        let student = new Student(id, name, age, address);
        this.StudentList.push(student);   
}


    public async showStudent(): Promise<void>{
        this.StudentList.forEach(student => {
            student.showInfo();
        });
    }

    // tim kiem theo id
    public async searchStudent(): Promise<void>{
        let id = Number(await this.question('Nhập id sinh viên cần tìm: '));
        const foundStudent = this.StudentList.find(student => student.id === id);
        if (foundStudent) {
            foundStudent.showInfo();
        } else {
            console.log('Không có sinh viên này');
        }
        return;
    }
    
    // đóng
    public close(): void{
        this.rl.close();
    }
    // lưu file
    public async saveFile(): Promise<void> {
        try {
            await fs.writeFile('student.txt', this.StudentList.map(x => {
                return `${x.id},${x.name},${x.age},${x.address}`;
            }));
            console.log('File saved successfully.');
        } catch (error) {
            console.error('Error saving file:', error);
        }
    }
    

    
   
    
}