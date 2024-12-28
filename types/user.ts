import { UserRole } from "./userRole";

export interface UserTypes {
    id: string,
    name: string,
    email: string,
    address: string,
    phoneNumber: string,
    userRole: UserRole,
    password: string,
    created_At: string
}