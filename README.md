Ruby version: 2.4.0\n
Rails version: 5.1.4\n
Node version: 6.11.0\n
\n
Dependencies:\n
devise\n
activeadmin\n
postgreSQL or pg\n
puma\n
react-on-rails v10.0.2\n
sass\n
bootstrap\n
\n
Configuration:\n
Clone repository\n
$bundle install\n
$yarn\n
$rake db:create\n
$rake db:migrate\n
$rake db:seed (Creates default admin user) in ./db/seeds.rb\n
$foreman start -f Procfile.dev-server\n
go to localhost:3000\n
\n
Deployment:\n
Application is Heroku ready.  Just create a remote and deploy to the branch of your choosing.\n
\n
ex:\n
$git push heroku master\n
