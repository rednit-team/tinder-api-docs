# Documentation

## API Details

Host     | api.gotinder.com
-------- | ----------------
Protocol | SSL

## Required Headers

**Note: Don't send the `platform` header. This might affect the responses you get**

Header       | Example
------------ | ---------------------------------------------
X-Auth-Token | Can be found in Dev tools                     |
Content-type | application/json
User-agent   | Tinder/7.5.3 (iPhone; iOS 10.3.2; Scale/2.00) |

--------------------------------------------------------------------------------

## Authentication

--------------------------------------------------------------------------------

## Self User

### Get User match recommendations (v1)

- Route: /user/recs
- Method: GET
- Request Body: {}

### Get User match recommendations (v2)

- Route: /v2/recs/core
- Method: GET
- Request Body: {}

### Count Likes

- Route: /v2/fast-match/count
- Method: GET
- Request Body: {}

### Get own metadata (v1)

- Route: /meta
- Method: GET
- Request Body: {}

### Get own metadata (v2)

- Route: /v2/meta
- Method: GET
- Request Body: {}

### Get own userdata

- Route: /profile
- Method: GET
- Request Body: {}

### Get matches

- Route: /v2/matches
- Method: GET
- Parameter: ?count=[int]

  - Note: The integer needs to be from 1-100

### Update Interests

- Route: /v2/profile/userinterests
- Method: DELETE
- Request Body:

  ```json
   {
    "user": {
       "user_interests": {
           "selected_interests": [
               {
                   "id": id,
                   "name": name
               }
           ]
       }
    }
  }
  ```

- Response Body:

  ```json
  {
    "meta": {
        "status": 200
    },
    "data": {
        "user": {...}
    }
  }
  ```

### Delete Interests

- Route: /v2/profile/userinterests
- Method: POST
- Request Body: {}

### Update Search preferences

- Route: /v2/profile
- Method: POST
- Request Body:

  ```json
  {
    "user": {
        "age_filter_min": age_filter_min,
        "gender_filter": gender_filter,
        "gender": gender,
        "age_filter_max": age_filter_max,
        "distance_filter": distance_filter
    }
  }
  ```

- Response Body:

  ```json
  {
    "meta": {
      "status": 200
    },
    "data": {
      "user": {...}
    }
  }
  ```

### Update Job

- Route: /v2/profile/job
- Method: POST
- Request Body:

  ```json
  {
    "jobs": {
        "company": {
            "displayed": boolean,
            "name": company
        },
        "title": {
            "displayed": boolean,
            "name": title
        }
    }
  }
  ```

- Response Body:

  ```json
  {
    "meta": {
        "status": 200
    },
    "data": {
        "user": {...}
    }
  }
  ```

### Update Bio

- Route: /v2/profile
- Method: POST
- Request Body:

  ```json
  {
    "user": {
        "bio": bio
    }
  }
  ```

- Response Body:

  ```json
  {
    "meta": {
        "status": 200
    },
    "data": {
        "user": {...}
    }
  }
  ```

### Update Gender

- Route: /v2/profile
- Method: POST
- Request Body

  ```json
  {
    "user": {
        "show_gender_on_profile": boolean,
        "gender": gender
    }
  }
  ```

  - Note: 0 is Male 1 is Female

- Response Body:

  ```json
  {
    "meta": {
        "status": 200
    },
    "data": {
        "user": {...}
    }
  }
  ```

### Update School

- Route: /v2/profile/school
- Method: POST
- Request Body:

  ```json
  {
    "schools": {
        "displayed": boolean,
        "name": name,
        "school_id": school_id
    }
  }
  ```

- Response Body:

  ```json
  {
    "meta": {
        "status": 200
    },
    "data": {
        "user": {...}
    }
  }
  ```

### Reset school

- Route: /v2/profile/school
- Method: POST
- Request Body:

  ```json
  {
    "meta": {
        "status": 200
    },
    "data": {
        "user": {...}
    }
  }
  ```

- Response Body:

  ```json
  {
    "meta": {
        "status": 200
    },
    "data": {
        "user": {...}
    }
  }
  ```

### Update City

- Route: /v2/profile/city
- Method: POST
- Request Body:

  ```json
  {
    "name": city,
    "region": country,
    "coords": {
        "lat": lat,
        "lon": long
    }
  }
  ```

- Response Body:

  ```json
  {
    "meta": {
        "status": 200
    }
  }
  ```

### Reset City

- Route: /v2/profile/city
- Method: DELETE
- Request Body: {}
- Response Body:

  ```json
  {
    "meta": {
        "status": 200
    }
  }
  ```

--------------------------------------------------------------------------------

## Tinder User

### Report User

- Route: /report/_id
- Method: POST
- Request Body:

  ```json
  {"cause": cause, "text": explanation}
  ```

### Get match from id

- Route: /matches/{match id}
- Method: GET
- Request Body: {}

### Get message by id

- Route: /message/{message id}
- Method: GET
- Request Body: {}

### Get User Profile info

- Route: /user/_id
- Method: GET
- Request Body: {}

### Pass/Swipe left

- Route: /pass/_id
- Method: GET
- Request Body: {}

### Like / Swipe right

- Route: /like/_id
- Method: GET
- Request Body: {}

### Super Like / Swipe up

- Route: /like/_id/super
- Method: POST
- Request Body: {}

--------------------------------------------------------------------------------

## Match

### Unmatch Person

- Route: /user/matches/match_id
- Method: DELETE
- Request Body: {}

### Like message by id

- Route: /message/{message_id}/like
- Method: POST
- Request Body: {}

### Send message

- Route: /user/matches/_id
- Method: POST
- Request Body:

  ```json
  {"message": TEXT GOES HERE}
  ```
