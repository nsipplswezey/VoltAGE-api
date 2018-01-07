# VoltAGE API 

## Adding Models

Add model to `predictors` directory. Clear and update seed with.

```
nodal task clear_seed
nodal task update_seed
```

## Push To Live Server 

```
git push heroku master
heroku run nodal db:compose
```

## Fetch models

GET https://evening-falls-93288.herokuapp.com/v1/detectors/1

## Running Locally

```sh
nodal s
```

VoltAGE server should now be running on [localhost:3000](http://localhost:3000/).
