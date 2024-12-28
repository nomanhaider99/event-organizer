'use client'
import { GET_USERS } from "@/app/api/graphql/queries";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useQuery } from "@apollo/client"
import Button from "../Button";
import Loader from "./Loader";
import UserOpt from "./UserOpt";
import UserDetails from "./UserDetails";

export function UsersTable() {
    const { data, loading } = useQuery(GET_USERS);
    console.log(data);
    if (loading) {
        return <Loader />
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.getUsers.map((user: any, index: number) => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium">{index+1}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.userRole}</TableCell>
                        <TableCell className="text-right">
                            <UserOpt
                                trigger={<Button content="delete" />}
                                content={<UserDetails user={user} />}
                             />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
