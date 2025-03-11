drop table if exists "like";
drop table if exists commitment;
drop table if exists comment;
drop table if exists act;
drop table if exists suggestion;
drop table if exists profile;

create table if not exists profile(
  profileId uuid not null,
  profileActivationToken char (32),
  profileBio varchar (500),
  profileEmail varchar (128) not null unique,
  profileHash char (97) not null,
  profileJoinDate timestamp with time zone,
  profileName varchar (32) not null,
  profilePictureUrl varchar (128),
  profileUserName varchar (32) not null unique,
  primary key (profileId)
);

create table if not exists suggestion(
  suggestionId uuid not null,
  suggestionContent varchar (500),
  suggestionDate timestamp with time zone,
  primary key (suggestionId)
);

create table if not exists act (
  actId uuid not null,
  actProfileId uuid,
  actAddress varchar (128),
  actContent varchar (500) not null,
  actDateTime timestamp with time zone,
  actImageUrl varchar (128),
  actLat float,
  actLng float,
  primary key (actId),
  foreign key (actProfileId) references profile(profileId)
);
create index on act(actProfileId);

create table if not exists comment (
  commentId uuid not null,
  commentActId uuid,
  commentProfileId uuid,
  commentContent varchar (500) not null,
  commentDateTime timestamp with time zone not null,
  primary key (commentId),
  foreign key (commentActId) references act(actId)
);
create index on comment(commentActId);

create table if not exists commitment (
  commitmentSuggestionId uuid,
  commitmentProfileId uuid,
  commitmentCompleted boolean,
  commitmentDateTime timestamp with time zone not null,
  foreign key (commitmentSuggestionId) references suggestion (suggestionId),
  foreign key (commitmentProfileId) references profile (profileId)
);
create index on commitment(commitmentSuggestionId);
create index on commitment(commitmentProfileId);

create table if not exists "like"(
  likeActId uuid,
  likeProfileId uuid,
  likeDateTime timestamp with time zone not null,
  primary key (likeActId, likeProfileId),
  foreign key (likeActId) references act (actId),
  foreign key (likeProfileId) references profile (profileId)
);
create index on "like"(likeActId);
create index on "like"(likeProfileId);
