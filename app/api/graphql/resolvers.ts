import { db } from "@/drizzle/client";
import { events, users } from '@/drizzle/schema'
import { UserRole } from "@/types/userRole";
import { eq } from "drizzle-orm";

type CreateUserArgs = {
    name: string;
    email?: string;
    phoneNumber?: string;
    userRole?: UserRole;
    address?: string;
};

export const resolvers = {
    Query: {
        getEvents: async () => {
            const allEvents = await db.select().from(events);
            return allEvents;
        },
        getUser: async (_: unknown, {name}: CreateUserArgs) => {
            const user = await db.select().from(users).where(eq(users.name, name));
            return user;
        },
        getUsers: async () => {
            const allUsers = await db.select().from(users);
            return allUsers;
        },
    },
    Mutation: {
        createUser: async (
            _: unknown,
            { name, email, phoneNumber, userRole, address }: CreateUserArgs
        ) => {
            if (!name || !email || !phoneNumber || !userRole || !address) {
                throw new Error("All Fields are required.");
            }
            const newUser = await db.insert(users).values({
                name,
                email,
                phoneNumber,
                userRole,
                address,
            } as any).returning();

            return newUser[0];
        }
    }
}   