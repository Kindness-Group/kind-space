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
  profile_name varchar (32),
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
  act_image_url varchar (255),
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
  foreign key (commitment_profile_id) references profile (profile_id),
  primary key (commitment_profile_id, commitment_suggestion_id)
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



INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)

VALUES

 ('0196202d-ea2c-7a03-be4c-dba2ca986d06', 'b1c3d7a592f84a61e5db47fc96ae21c9', 'Passionate about making others smile through random acts of kindness.', 'miguel.ross@example.com', '43addae7-0d8d-49f1-b97c-eae5fea51566', '2024-01-14 12:30:00', 'Miguel Ross', 'https://randomuser.me/api/portraits/men/42.jpg', 'MiguelR');

INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)

VALUES
                                                                                                                                                                    ('0196202d-ea2c-7c9a-8f04-a91afc71ade0', 'a47c15f9b82ed3619c5d3ab6f1e8972d', 'Kindness advocate and community volunteer. Love brightening someone''s day!', 'sophia.chen@example.com', '734d24b9-0af0-4ba6-ab74-1686807e3678', '2024-03-11 09:15:22', 'Sophia Chen', 'https://randomuser.me/api/portraits/women/28.jpg', 'SophiaShares');

INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)

VALUES
                                                                                                                                                                    ('0196202d-ea2c-74cd-a132-bf36b1587732', '19fca8e3d7b56abf4c21d9657ae3b2f6', 'Believe in the ripple effect of kindness. One small act can change someone''s world.', 'james.taylor@example.com', 'ec56a51d-53b7-4541-a979-e3a149d7708d', '2024-04-12 14:45:30', 'James Taylor', 'https://randomuser.me/api/portraits/men/91.jpg', 'James234');

INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)

VALUES
                                                                                                                                                                    ('0196202d-ea2c-7e32-94d7-f400d72d5c42', '57a6fb2c9e8413d5a91cd7f326eb4af3', 'Spreading joy through small gestures and thoughtful actions.', 'emma.garcia@example.com', '78a37d5f-5c01-4d80-bbd4-b4948931b67f', '2024-02-21 11:35:50', 'Emma Garcia', 'https://randomuser.me/api/portraits/women/33.jpg', 'redpanda');

INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)

VALUES                                                                  ('0196202d-ea2c-7aca-b71c-1bf00b77e712', '2c9d1ae7fb834a6d5ef1b37c9a5e82d1', 'Kindness enthusiast and community builder. Let''s make the world better together!', 'liam.brown@example.com', 'd1b434d5-824f-475b-9a16-5e9c8dab72b0', '2023-08-08 15:25:10', 'Liam Brown', 'https://randomuser.me/api/portraits/men/55.jpg', 'liambrown');
INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)

VALUES
    ('0196202d-ea2c-79dd-a697-af66c040d8f2', 'b3a59c87d4f1e2a68cf197e4db25a6f3', 'Firm believer that kindness costs nothing but means everything.', 'ava.miller@example.com', '34239215-c001-4291-ae77-677c2c887033', '2023-05-16 10:40:20', 'Ava Miller', 'https://randomuser.me/api/portraits/women/12.jpg', 'avam');
INSERT INTO profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)

VALUES
    ('0196202d-ea2c-7d91-b9db-20f315c7990d', 'c4e27ab5391fd68ae7b13cf58269da1f', 'Software developer using technology to connect people through kindness.', 'ethan.davis@example.com', '0f4ebe02-faf5-4679-81e1-ce252fe158ca', '2024-01-16 08:55:35', 'Ethan Davis', 'https://randomuser.me/api/portraits/men/22.jpg', 'ethan91')