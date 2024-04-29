This is my first serverless application
i have created this using cloudflare

--> What is serverless server
It is a services which cloud provider provides to deploy or server on the principle of "as you go you pay" in this type of server we dont have to worry about the server because they look after our server on behalf of us

why to choose cloudflare
--> becaue it is free
it provides its own runtime named worker runtime which make it fast
it has desent amout of infrastructure all around the world

compititor 
aws lambda
cloud function and cloud run by google
azure function, azure container instance and azure app services by microsoft


command to create a worker
npm create cloudflare@latest --serverless-application-1

deploying our server to cloudflare
1. npx wrangler login // give wrangler cli rights to access your account
2. npx wrangler whoami  // gives details for your account
3. npm run deploy  -> it will run deploy wrangler deploy 
since wrangler has permission of our account so it will deplot this for us


express in cloudflare
-> cloudflare does not support express library for rout handling because express heavley relies on nodejs and its dependencies so 
we need to swith to hono library which supports cloudflare