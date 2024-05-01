Building a Paytm Project

Steps->

1. Initialize the turborepo
    npx create-turbo@latest

2. Add tailwind to project

move to user-app

run command

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

change global css
@tailwind base;
@tailwind components;
@tailwind utilities;


3. Add prisma to our project
    a. create a db folder inside packages dir
    b. npm init -y
    c. npx install prisma
    d. make model
    e. migrate prisma with npx prisma migrate dev --name init
    f. npx generate client
    g. make src/index.ts
    f. export * from @prisma/client
    g. add exports in package.json
        exports:{
            "./client":"./src/index.ts",
        }

