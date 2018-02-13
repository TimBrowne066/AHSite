## Dependencies:
##### Ruby version: 2.4.0
##### Rails version: 5.1.4
##### Node version: 6.11.0
##### devise
##### activeadmin
##### postgreSQL or pg
##### puma
##### react-on-rails v10.0.2
##### sass
##### bootstrap

## Configuration:
##### Clone repository
`$bundle install`

`$yarn`

`$rake db:create`

`$rake db:migrate`

`$rake db:seed (Creates default admin user) in ./db/seeds.rb`

`$foreman start -f Procfile.dev-server`

go to localhost:3000


## Deployment:

Application is Heroku ready.  Just create a remote and deploy to the branch of your choosing.

##### ex:

`$git push heroku master`
