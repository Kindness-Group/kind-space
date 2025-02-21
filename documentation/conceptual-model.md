# Entities and Attributes
## 1. Profile
* profileId (primary key)
* profileActivationToken
* profileName
* profileUserName
* profileEmail
* profilePassword
* profilePicture
* profileBio
* profileJoinDate

## 2. Post
* postId (primary key)
* postProfileId (foreign key)
* postContent
* postDate
* postImage
* postLocation
* postLikeCount?
* postCommentCount?
* postDateTime

## 3. Likes
* likeId (primary key)
* likeProfileId (foreign key)
* likePostId (foreign key)
* likeDateTime

## 4. Comments
* commentId (primary key)
* commentProfileId (foreign key)
* commentPostId (foreign key)
* commentContent
* commentDateTime

## 5. Map Markers
* markerId (primary key)
* markerPostLocation
* markerPostId (foreign key)

## 6. Daily Suggestions
* suggestionId (primary key)
* suggestionContent
* suggestionImage
* suggestionDate
* category

## 7. Profile-Suggestion Interactions? (Weak Entity)
* profileSuggestionSaved
* profileSuggestionsCompletedCount (total count for all users)?
* profileSuggestionsCompletedCount (count for single user)?
* profileSuggestionsReminders
* profileSuggestionDateTime

Profile, Post, Likes, Comments, Map Markers, Daily Suggestions, Profile-Suggestion Interactions

### One Profile can make Many Posts
### One Profile can make Many Likes
### One Profile can make Many Comments
### One Profile can save One Daily Suggestion
### One Profile can complete many Daily Suggestions
### Many Profiles can complete many Daily Suggestions (number of ppl who have completed count)
### One Post can have Many Likes
### One Post can have Many Comments
### One Post can have one Map Marker
