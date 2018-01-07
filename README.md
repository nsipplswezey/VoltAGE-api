# VoltAGE API 

## Running Locally

```sh
nodal s
```

VoltAGE server should now be running on [localhost:3000](http://localhost:3000/).

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


