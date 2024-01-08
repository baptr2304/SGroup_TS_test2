import { Management } from "./Management";
async function main(): Promise<void> {
    const management = new Management();
    let exit = false;
    while (!exit) {
        const choice = await management.question(`
            -- Quản lý sinh viên --
            1. Nhập thông tin sinh viên
            2. Hiển thị danh sách sinh viên
            3. Tìm kiếm sinh viên
            4. Thoát 
            Nhập lựa chọn của bạn: `);
        switch (Number(choice)) {
            case 1:
                await management.addStudent();
                break;
            case 2:
                management.showStudent();
                break;
            case 3:
                await management.searchStudent();
                break;
            case 4:
                exit = true;
                break;
            default:
                console.log('Lựa chọn không hợp lệ!!!');
                break;
        }
    }

    management.close();
    await management.saveFile();
}

main();
