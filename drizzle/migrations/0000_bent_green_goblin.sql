CREATE TYPE "public"."user_role" AS ENUM('ORGANIZER', 'VISITOR', 'ADMIN');--> statement-breakpoint
CREATE TABLE "events" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"organizer" text NOT NULL,
	"location" text,
	"date" timestamp NOT NULL,
	"duration" integer,
	"capacity" integer,
	"contact_email" text,
	"contact_phone" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"phone_number" text,
	"user_role" "user_role",
	"address" text,
	"created_at" timestamp DEFAULT now()
);
