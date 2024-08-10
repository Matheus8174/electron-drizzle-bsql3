CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`birth_date` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
