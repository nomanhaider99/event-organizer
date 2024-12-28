import {
    timestamp,
    pgTable,
    text,
    integer,
    pgEnum,
} from "drizzle-orm/pg-core";

export const userRole = pgEnum("user_role", ["ORGANIZER", "VISITOR", "ADMIN"]);

export const users = pgTable("users", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email"),
    phoneNumber: text("phone_number"),
    userRole: userRole("user_role"),
    address: text("address"),
    createdAt: timestamp("created_at").defaultNow(),
});

export const events = pgTable("events", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),  
    name: text("name").notNull(),  
    description: text("description"),  
    organizer: text("organizer").notNull(), 
    location: text("location"),  
    date: timestamp("date").notNull(),  
    duration: integer("duration"),  
    capacity: integer("capacity"),  
    contactEmail: text("contact_email"),  
    contactPhone: text("contact_phone"),  
    createdAt: timestamp("created_at").defaultNow(), 
});

