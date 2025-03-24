INSERT INTO public.profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)
VALUES ('0195903e-1b42-7ee3-b9c3-c61bd85e9fa4', null, null, 'amyeseibert@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$zU9eaQf35UlFdDvHcls+EA$KysVXGMH3Qmco0gYtzS2xjH21VN9MFPSwk+OwGci7FA', null, 'Amy', 'http://placekitten.com/300/300', 'AmyUsername');

INSERT INTO public.profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)
VALUES ('0234603f-2c53-8ff4-c1d4-e71de95f2fb5', null, 'Love hiking and coding.', 'john.doe@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$abcde12345UlFdDvHcls+EA$12345GMH3Qmco0gYtzS2xjH21VN9MFPSwk+OwGci7FA', null, 'John', 'http://placekitten.com/301/301', 'JohnDoe');

INSERT INTO public.profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)
VALUES ('0345704g-3d64-9gg5-d2e5-f82ef06g3gc6', null, 'Solar energy enthusiast.', 'jane.smith@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$xyz12345UlFdDvHcls+EA$67890GMH3Qmco0gYtzS2xjH21VN9MFPSwk+OwGci7FA', null, 'Jane', 'http://placekitten.com/302/302', 'JaneSmith');

INSERT INTO public.profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)
VALUES ('0456805h-4e75-ahh6-e3f6-g93fg17h4hd7', null, 'Building Kind-Space!', 'kate.wilson@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$lkjhg98765UlFdDvHcls+EA$54321GMH3Qmco0gYtzS2xjH21VN9MFPSwk+OwGci7FA', null, 'Kate', 'http://placekitten.com/303/303', 'KateWilson');

INSERT INTO public.profile (profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username)
VALUES ('0567906i-5f86-bii7-f4g7-h04gh28i5ie8', null, 'Web developer & solar pro.', 'michael.jones@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$mnopq67890UlFdDvHcls+EA$98765GMH3Qmco0gYtzS2xjH21VN9MFPSwk+OwGci7FA', null, 'Michael', 'http://placekitten.com/304/304', 'MichaelJones');

INSERT INTO public.suggestion (suggestion_id, suggestion_content, suggestion_date)
VALUES ('123e4567-e89b-12d3-a456-426614174000', 'Share a compliment with a stranger today.', '2025-03-24');

INSERT INTO public.suggestion (suggestion_id, suggestion_content, suggestion_date)
VALUES ('123e4567-e89b-12d3-a456-426614174001', 'Leave a kind note for a coworker.', '2025-03-25');

INSERT INTO public.suggestion (suggestion_id, suggestion_content, suggestion_date)
VALUES ('123e4567-e89b-12d3-a456-426614174002', 'Donate unused clothes to charity.', '2025-03-26');

INSERT INTO public.suggestion (suggestion_id, suggestion_content, suggestion_date)
VALUES ('123e4567-e89b-12d3-a456-426614174003', 'Help someone carry their groceries.', '2025-03-27');

INSERT INTO public.suggestion (suggestion_id, suggestion_content, suggestion_date)
VALUES ('123e4567-e89b-12d3-a456-426614174004', 'Volunteer for a local community event.', '2025-03-28');

INSERT INTO public.act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng)
VALUES ('789e4567-e89b-12d3-a456-426614174010', '0195903e-1b42-7ee3-b9c3-c61bd85e9fa4', '123 Main St, Kindtown', 'Planted trees at the park.', '2025-03-10 14:00:00', 'http://placekitten.com/310/310', 40.7128, -74.0060);

INSERT INTO public.act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng)
VALUES ('789e4567-e89b-12d3-a456-426614174011', '0234603f-2c53-8ff4-c1d4-e71de95f2fb5', '456 Elm St, Kindville', 'Gave out free coffee to strangers.', '2025-03-11 09:30:00', 'http://placekitten.com/311/311', 34.0522, -118.2437);

INSERT INTO public.act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng)
VALUES ('789e4567-e89b-12d3-a456-426614174012', '0345704g-3d64-9gg5-d2e5-f82ef06g3gc6', '789 Oak St, Kindville', 'Organized a community cleanup.', '2025-03-12 10:00:00', 'http://placekitten.com/312/312', 37.7749, -122.4194);

INSERT INTO public.act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng)
VALUES ('789e4567-e89b-12d3-a456-426614174013', '0456805h-4e75-ahh6-e3f6-g93fg17h4hd7', '101 Maple St, Kindcity', 'Donated books to a library.', '2025-03-13 15:00:00', 'http://placekitten.com/313/313', 51.5074, -0.1278);

INSERT INTO public.act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng)
VALUES ('789e4567-e89b-12d3-a456-426614174014', '0567906i-5f86-bii7-f4g7-h04gh28i5ie8', '202 Pine St, Kindland', 'Painted a mural promoting kindness.', '2025-03-14 16:30:00', 'http://placekitten.com/314/314', 48.8566, 2.3522);

INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
VALUES ('111e4567-e89b-12d3-a456-426614174100', '789e4567-e89b-12d3-a456-426614174010', '0195903e-1b42-7ee3-b9c3-c61bd85e9fa4', 'What a wonderful act of kindness! Keep it up!', '2025-03-10 14:30:00');

INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
VALUES ('111e4567-e89b-12d3-a456-426614174101', '789e4567-e89b-12d3-a456-426614174011', '0234603f-2c53-8ff4-c1d4-e71de95f2fb5', 'This is such a thoughtful gesture! People need more kindness like this.', '2025-03-11 09:45:00');

INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
VALUES ('111e4567-e89b-12d3-a456-426614174102', '789e4567-e89b-12d3-a456-426614174012', '0345704g-3d64-9gg5-d2e5-f82ef06g3gc6', 'I admire your commitment to making the community better!', '2025-03-12 10:15:00');

INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
VALUES ('111e4567-e89b-12d3-a456-426614174103', '789e4567-e89b-12d3-a456-426614174013', '0456805h-4e75-ahh6-e3f6-g93fg17h4hd7', 'Amazing! A small act like this can make such a big impact.', '2025-03-13 15:30:00');

INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
VALUES ('111e4567-e89b-12d3-a456-426614174104', '789e4567-e89b-12d3-a456-426614174014', '0567906i-5f86-bii7-f4g7-h04gh28i5ie8', 'Your mural is inspiring! I love the message of kindness.', '2025-03-14 17:00:00');

INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
VALUES ('123e4567-e89b-12d3-a456-426614174000', '0195903e-1b42-7ee3-b9c3-c61bd85e9fa4', true, '2025-03-24 14:00:00');

INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
VALUES ('123e4567-e89b-12d3-a456-426614174001', '0234603f-2c53-8ff4-c1d4-e71de95f2fb5', false, '2025-03-25 09:30:00');

INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
VALUES ('123e4567-e89b-12d3-a456-426614174002', '0345704g-3d64-9gg5-d2e5-f82ef06g3gc6', true, '2025-03-26 10:00:00');

INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
VALUES ('123e4567-e89b-12d3-a456-426614174003', '0456805h-4e75-ahh6-e3f6-g93fg17h4hd7', false, '2025-03-27 13:45:00');

INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
VALUES ('123e4567-e89b-12d3-a456-426614174004', '0567906i-5f86-bii7-f4g7-h04gh28i5ie8', true, '2025-03-28 16:30:00');

INSERT INTO "like" (like_act_id, like_profile_id, like_date_time)
VALUES ('789e4567-e89b-12d3-a456-426614174010', '0195903e-1b42-7ee3-b9c3-c61bd85e9fa4', '2025-03-10 14:30:00');

INSERT INTO "like" (like_act_id, like_profile_id, like_date_time)
VALUES ('789e4567-e89b-12d3-a456-426614174011', '0234603f-2c53-8ff4-c1d4-e71de95f2fb5', '2025-03-11 09:45:00');

INSERT INTO "like" (like_act_id, like_profile_id, like_date_time)
VALUES ('789e4567-e89b-12d3-a456-426614174012', '0345704g-3d64-9gg5-d2e5-f82ef06g3gc6', '2025-03-12 10:15:00');

INSERT INTO "like" (like_act_id, like_profile_id, like_date_time)
VALUES ('789e4567-e89b-12d3-a456-426614174013', '0456805h-4e75-ahh6-e3f6-g93fg17h4hd7', '2025-03-13 15:30:00');

INSERT INTO "like" (like_act_id, like_profile_id, like_date_time)
VALUES ('789e4567-e89b-12d3-a456-426614174014', '0567906i-5f86-bii7-f4g7-h04gh28i5ie8', '2025-03-14 17:00:00');
