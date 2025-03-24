drop table if exists "like";
drop table if exists commitment;
drop table if exists comment;
drop table if exists act;
drop table if exists suggestion;
drop table if exists profile;

create table if not exists profile(
  profile_id uuid not null,
  profile_activation_token char (32),
  profile_bio varchar (500),
  profile_email varchar (128) not null unique,
  profile_hash char (97) not null,
  profile_join_date timestamp with time zone,
  profile_name varchar (32) not null,
  profile_picture_url varchar (128),
  profile_username varchar (32) not null unique,
  primary key (profile_id)
);

create table if not exists suggestion(
  suggestion_id uuid not null,
  suggestion_content varchar (500),
  suggestion_date date,
  primary key (suggestion_id)
);

create table if not exists act (
  act_id uuid not null,
  act_profile_id uuid,
  act_address varchar (128),
  act_content varchar (500) not null,
  act_date_time timestamp with time zone,
  act_image_url varchar (128),
  act_lat float,
  act_lng float,
  primary key (act_id),
  foreign key (act_profile_id) references profile(profile_id)
);
create index on act(act_profile_id);

create table if not exists comment (
  comment_id uuid not null,
  comment_act_id uuid,
  comment_profile_id uuid,
  comment_content varchar (500) not null,
  comment_date_time timestamp with time zone not null,
  primary key (comment_id),
  foreign key (comment_act_id) references act(act_id)
);
create index on comment(comment_act_id);

create table if not exists commitment (
  commitment_suggestion_id uuid,
  commitment_profile_id uuid,
  commitment_completed boolean,
  commitment_date_time timestamp with time zone not null,
  foreign key (commitment_suggestion_id) references suggestion (suggestion_id),
  foreign key (commitment_profile_id) references profile (profile_id)
);
create index on commitment(commitment_suggestion_id);
create index on commitment(commitment_profile_id);

create table if not exists "like"(
  like_act_id uuid,
  like_profile_id uuid,
  like_date_time timestamp with time zone not null,
  primary key (like_act_id, like_profile_id),
  foreign key (like_act_id) references act (act_id),
  foreign key (like_profile_id) references profile (profile_id)
);
create index on "like"(like_act_id);
create index on "like"(like_profile_id);

-- Profile seed data
INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)
VALUES ('a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d', 'abcdef1234567890abcdef1234567890', 'Nature enthusiast and avid hiker.', 'john.doe@example.com', '$argon2i$v=19$m=16,t=2,p=1$cUNBcUZIWXdHU2ZWUlVMdQ$Cpa9YtR1XPYkBQZ+iWK1GQ', '2023-01-15 10:30:00-07', 'John Doe', 'https://example.com/profiles/johndoe.jpg', 'johndoe');

INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)
VALUES ('b2c3d4e5-f6a7-5b6c-9d0e-2f3a4b5c6d7e', 'bcdef1234567890abcdef1234567890a', 'Passionate about community service and volunteering.', 'jane.smith@example.com', '$argon2i$v=19$m=16,t=2,p=1$cUNBcUZIWXdHU2ZWUlVMdQ$DpaByTr1XPYkBQZ+iWK1GQ', '2023-02-20 14:45:00-07', 'Jane Smith', 'https://example.com/profiles/janesmith.jpg', 'janesmith');

INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)
VALUES ('c3d4e5f6-a7b8-6c7d-0e1f-3a4b5c6d7e8f', 'cdef1234567890abcdef1234567890ab', 'Software developer by day, environmental activist by night.', 'mike.wilson@example.com', '$argon2i$v=19$m=16,t=2,p=1$cUNBcUZIWXdHU2ZWUlVMdQ$EpaCzTr1XPYkBQZ+iWK1GQ', '2023-03-10 09:15:00-07', 'Mike Wilson', 'https://example.com/profiles/mikewilson.jpg', 'mikewilson');

INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)
VALUES ('d4e5f6a7-b8c9-7d0e-1f2a-4b5c6d7e8f9a', 'def1234567890abcdef1234567890abc', 'Teacher and education advocate working to improve local schools.', 'sarah.johnson@example.com', '$argon2i$v=19$m=16,t=2,p=1$cUNBcUZIWXdHU2ZWUlVMdQ$FpaDzTr1XPYkBQZ+iWK1GQ', '2023-04-05 16:20:00-07', 'Sarah Johnson', 'https://example.com/profiles/sarahjohnson.jpg', 'sarahjohnson');

INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)
VALUES ('e5f6a7b8-c9d0-8e1f-2a3b-5c6d7e8f9a0b', 'ef1234567890abcdef1234567890abcd', 'Local business owner committed to sustainable practices.', 'david.brown@example.com', '$argon2i$v=19$m=16,t=2,p=1$cUNBcUZIWXdHU2ZWUlVMdQ$GpaEzTr1XPYkBQZ+iWK1GQ', '2023-05-12 11:10:00-07', 'David Brown', 'https://example.com/profiles/davidbrown.jpg', 'davidbrown');

INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)
VALUES ('f6a7b8c9-d0e1-9f2a-3b4c-6d7e8f9a0b1c', 'f1234567890abcdef1234567890abcde', 'Fitness coach and nutrition expert helping people live healthier lives.', 'emily.davis@example.com', '$argon2i$v=19$m=16,t=2,p=1$cUNBcUZIWXdHU2ZWUlVMdQ$HpaFzTr1XPYkBQZ+iWK1GQ', '2023-06-18 08:40:00-07', 'Emily Davis', 'https://example.com/profiles/emilydavis.jpg', 'emilydavis');

-- Suggestion seed data
INSERT INTO suggestion (suggestion_id, suggestion_content, suggestion_date)
VALUES ('a7b8c9d0-e1f2-3a4b-5c6d-7e8f9a0b1c2d', 'Plant a tree in your neighborhood', '2023-01-20');

INSERT INTO suggestion (suggestion_id, suggestion_content, suggestion_date)
VALUES ('b8c9d0e1-f2a3-4b5c-6d7e-8f9a0b1c2d3e', 'Organize a community cleanup day at a local park', '2023-02-15');

INSERT INTO suggestion (suggestion_id, suggestion_content, suggestion_date)
VALUES ('c9d0e1f2-a3b4-5c6d-7e8f-9a0b1c2d3e4f', 'Volunteer at a local food bank for a day', '2023-03-10');

INSERT INTO suggestion (suggestion_id, suggestion_content, suggestion_date)
VALUES ('d0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a', 'Start a small community garden', '2023-04-05');

INSERT INTO suggestion (suggestion_id, suggestion_content, suggestion_date)
VALUES ('e1f2a3b4-c5d6-7e8f-9a0b-1c2d3e4f5a6b', 'Host a neighborhood book exchange event', '2023-05-12');

INSERT INTO suggestion (suggestion_id, suggestion_content, suggestion_date)
VALUES ('f2a3b4c5-d6e7-8f9a-0b1c-2d3e4f5a6b7c', 'Organize a donation drive for a local shelter', '2023-06-18');

-- Act seed data
INSERT INTO act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng)
VALUES ('a8b9c0d1-e2f3-4a5b-6c7d-8e9f0a1b2c3d', 'a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d', '123 Main St, Anytown, USA', 'Planted 5 oak trees in the community park today!', '2023-01-25 14:30:00-07', 'https://example.com/acts/tree_planting.jpg', 35.6895, -105.9378);

INSERT INTO act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng)
VALUES ('b9c0d1e2-f3a4-5b6c-7d8e-9f0a1b2c3d4e', 'b2c3d4e5-f6a7-5b6c-9d0e-2f3a4b5c6d7e', '456 Oak Ave, Sometown, USA', 'Led a team of volunteers to clean up Riverside Park. Collected over 20 bags of trash!', '2023-02-18 10:15:00-07', 'https://example.com/acts/park_cleanup.jpg', 40.7128, -74.0060);

INSERT INTO act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng)
VALUES ('c0d1e2f3-a4b5-6c7d-8e9f-0a1b2c3d4e5f', 'c3d4e5f6-a7b8-6c7d-0e1f-3a4b5c6d7e8f', '789 Pine St, Othertown, USA', 'Spent the morning volunteering at the Downtown Food Bank. Helped prepare meals for 50 families.', '2023-03-15 09:00:00-07', 'https://example.com/acts/food_bank.jpg', 37.7749, -122.4194);

INSERT INTO act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng)
VALUES ('d1e2f3a4-b5c6-7d8e-9f0a-1b2c3d4e5f6a', 'd4e5f6a7-b8c9-7d0e-1f2a-4b5c6d7e8f9a', '101 Elm St, Newtown, USA', 'Started a community garden in the vacant lot on Elm Street. Already have 10 neighbors signed up to participate!', '2023-04-10 16:45:00-07', 'https://example.com/acts/community_garden.jpg', 41.8781, -87.6298);

INSERT INTO act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng)
VALUES ('e2f3a4b5-c6d7-8e9f-0a1b-2c3d4e5f6a7b', 'e5f6a7b8-c9d0-8e1f-2a3b-5c6d7e8f9a0b', '202 Maple Ave, Oldtown, USA', 'Hosted a neighborhood book exchange today. Exchanged over 100 books and met so many wonderful neighbors!', '2023-05-20 13:30:00-07', 'https://example.com/acts/book_exchange.jpg', 34.0522, -118.2437);

INSERT INTO act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng)
VALUES ('f3a4b5c6-d7e8-9f0a-1b2c-3d4e5f6a7b8c', 'f6a7b8c9-d0e1-9f2a-3b4c-6d7e8f9a0b1c', '303 Cedar Blvd, Yourtown, USA', 'Organized a winter coat drive for the homeless shelter. Collected 75 coats and 50 pairs of gloves!', '2023-06-25 11:20:00-07', 'https://example.com/acts/coat_drive.jpg', 32.7157, -117.1611);

-- Comment seed data - ensuring comment_act_id and comment_profile_id reference existing IDs
INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
VALUES ('a9b0c1d2-e3f4-5a6b-7c8d-9e0f1a2b3c4d', 'a8b9c0d1-e2f3-4a5b-6c7d-8e9f0a1b2c3d', 'b2c3d4e5-f6a7-5b6c-9d0e-2f3a4b5c6d7e', 'This is amazing! I love seeing more trees in our community.', '2023-01-25 15:45:00-07');

INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
VALUES ('b0c1d2e3-f4a5-6b7c-8d9e-0f1a2b3c4d5e', 'a8b9c0d1-e2f3-4a5b-6c7d-8e9f0a1b2c3d', 'c3d4e5f6-a7b8-6c7d-0e1f-3a4b5c6d7e8f', 'Great initiative! I''ll help maintain these trees.', '2023-01-26 12:30:00-07');

INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
VALUES ('c1d2e3f4-a5b6-7c8d-9e0f-1a2b3c4d5e6f', 'b9c0d1e2-f3a4-5b6c-7d8e-9f0a1b2c3d4e', 'd4e5f6a7-b8c9-7d0e-1f2a-4b5c6d7e8f9a', 'Thank you for organizing this cleanup! The park looks fantastic now.', '2023-02-19 10:20:00-07');

INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
VALUES ('d2e3f4a5-b6c7-8d9e-0f1a-2b3c4d5e6f7a', 'c0d1e2f3-a4b5-6c7d-8e9f-0a1b2c3d4e5f', 'e5f6a7b8-c9d0-8e1f-2a3b-5c6d7e8f9a0b', 'The food bank is such an important resource. Thanks for volunteering!', '2023-03-16 18:15:00-07');

INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
VALUES ('e3f4a5b6-c7d8-9e0f-1a2b-3c4d5e6f7a8b', 'd1e2f3a4-b5c6-7d8e-9f0a-1b2c3d4e5f6a', 'f6a7b8c9-d0e1-9f2a-3b4c-6d7e8f9a0b1c', 'I would love to join this community garden! Do you need more volunteers?', '2023-04-11 15:00:00-07');

INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
VALUES ('f4a5b6c7-d8e9-0f1a-2b3c-4d5e6f7a8b9c', 'e2f3a4b5-c6d7-8e9f-0a1b-2c3d4e5f6a7b', 'a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d', 'What a wonderful idea! I found some great new books to read.', '2023-05-21 13:45:00-07');

-- Commitment seed data - ensuring commitment_suggestion_id and commitment_profile_id reference existing IDs
INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
VALUES ('a7b8c9d0-e1f2-3a4b-5c6d-7e8f9a0b1c2d', 'a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d', true, '2023-01-22 09:30:00-07');

INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
VALUES ('a7b8c9d0-e1f2-3a4b-5c6d-7e8f9a0b1c2d', 'b2c3d4e5-f6a7-5b6c-9d0e-2f3a4b5c6d7e', false, '2023-01-23 14:15:00-07');

INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
VALUES ('b8c9d0e1-f2a3-4b5c-6d7e-8f9a0b1c2d3e', 'c3d4e5f6-a7b8-6c7d-0e1f-3a4b5c6d7e8f', true, '2023-02-17 10:45:00-07');

INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
VALUES ('c9d0e1f2-a3b4-5c6d-7e8f-9a0b1c2d3e4f', 'd4e5f6a7-b8c9-7d0e-1f2a-4b5c6d7e8f9a', true, '2023-03-12 16:00:00-07');

INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
VALUES ('d0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a', 'e5f6a7b8-c9d0-8e1f-2a3b-5c6d7e8f9a0b', false, '2023-04-08 11:30:00-07');

INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
VALUES ('e1f2a3b4-c5d6-7e8f-9a0b-1c2d3e4f5a6b', 'f6a7b8c9-d0e1-9f2a-3b4c-6d7e8f9a0b1c', true, '2023-05-16 13:20:00-07');

INSERT INTO "like" (like_act_id, like_profile_id, like_date_time)
VALUES ('a8b9c0d1-e2f3-4a5b-6c7d-8e9f0a1b2c3d', 'b2c3d4e5-f6a7-5b6c-9d0e-2f3a4b5c6d7e', '2023-01-25 16:10:00-07');

INSERT INTO "like" (like_act_id, like_profile_id, like_date_time)
VALUES ('a8b9c0d1-e2f3-4a5b-6c7d-8e9f0a1b2c3d', 'c3d4e5f6-a7b8-6c7d-0e1f-3a4b5c6d7e8f', '2023-01-26 09:45:00-07');

INSERT INTO "like" (like_act_id, like_profile_id, like_date_time)
VALUES ('b9c0d1e2-f3a4-5b6c-7d8e-9f0a1b2c3d4e', 'd4e5f6a7-b8c9-7d0e-1f2a-4b5c6d7e8f9a', '2023-02-19 11:30:00-07');

INSERT INTO "like" (like_act_id, like_profile_id, like_date_time)
VALUES ('c0d1e2f3-a4b5-6c7d-8e9f-0a1b2c3d4e5f', 'e5f6a7b8-c9d0-8e1f-2a3b-5c6d7e8f9a0b', '2023-03-16 10:15:00-07');

INSERT INTO "like" (like_act_id, like_profile_id, like_date_time)
VALUES ('d1e2f3a4-b5c6-7d8e-9f0a-1b2c3d4e5f6a', 'f6a7b8c9-d0e1-9f2a-3b4c-6d7e8f9a0b1c', '2023-04-11 17:20:00-07');

INSERT INTO "like" (like_act_id, like_profile_id, like_date_time)
VALUES ('e2f3a4b5-c6d7-8e9f-0a1b-2c3d4e5f6a7b', 'a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d', '2023-05-21 14:05:00-07');