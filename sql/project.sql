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