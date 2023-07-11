import PermissionType from "./PermissionType";

interface DatabaseItem{
    email: string;
    password: string;
    permission: PermissionType;
}

const Database: DatabaseItem[] = [
    {
        email: "pedro123@gmail.com",
        password: "12345",
        permission: PermissionType.ADMIN
    }, 
    {
        email: "aluno@unicentro.br",
        password: "54321", 
        permission: PermissionType.USER
    }
];

export default Database;