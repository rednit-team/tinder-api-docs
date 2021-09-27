# Inconsistencies

The Tinder API is full of inconsistencies, duplicated features and odd behavior. This is a curated list of such inconsistencies I stumbled upon while writing this documentation.

---

## Two API versions

Besides from authentication, which already uses `v3`, Tinder uses two API versions:

- `v1` paths that have no versioning, e.g. `/profile` 
- `v2` paths that use versioning, e.g. `/v2/profile`

This results in many problems: 

### Updating Profile Information


|             | `/profile` | `/v2/profile` |             own  endpoint      |
|:-----------:|:----------:|:---------------:|:----------------------------:|
|     Bio     |    yes     |     yes         |             no               |
| Preferences |    yes     |     yes         |             no               |
|    Gender   |    yes     |     yes         |             no               |
|  Interests  |    no      |     no          | `/v2/profile/user_interests` |
|     Job     |    no      |     no          |       `/v2/profile/job`      |
|    School   |    no      |     no          |     `/v2/profile/school`     |
|     City    |    no      |     no          |      `/v2/profile/city`      |


### Different User Objects

Each endpoint that returns user information returns slightly different data. This results in 6 different user objects: 

- Recommendation `v1`
- Recommendation `v2`
- User
- User I Liked
- User that liked me
- Matched User


### Duplicated Methods

- Recommendations
  - `/recs`
  - `/user/recs`
  - `/v2/recs/core`

- Metadata
  - `/meta`
  - `/v2/meta`

- Profile
  - `/profile`
  - `/v2/profile`

- Match
  - to get a match: `GET /v2/match/{id}` *`GET /match/{id}` still exists but only returns `200 OK`*

  - to delete a match: `DELETE /match/{id}` 

---

## Optional Fields

Similar to the versiong, Tinder has two different ways of dealing with optional fields. Using empty values or just completely leaving fields out if no value is present.

### Empty Values

The following fields will be empty in the response if the value is ment to be empty.

- Profile Object
  - `jobs`
  - `schools`
  - `badges`
  - `photos` *inside Instagram object*

- User Object
  - `jobs`
  - `schools`
  - `badges`
  - `teasers`
  - `common_likes`
  - `common_like_count`
  - `common_interests`
  - `common_friends`
  - `common_friend_count`

### Missing Fields

The following fields will not be present in the response if the value is ment to be empty.

- Profile Object
  - `city`

- User Object
  - `city`
  - `selected_descriptors`
  - `experiment_info`
  
- Photo Object 

  inside the `crop_info` field the following fields are missing if no face was recognized    in the photo:
    - `user`
    - `algo`
    - `faces`

---

## Useless Arrays

The following fields are arrays but never have more then one value in it:

- `jobs`
- `schools`
- `badges`