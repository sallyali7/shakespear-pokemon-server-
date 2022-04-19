# Pokemon Search #

## Dependencies: ##

• Node V17.2.0

• express: ^4.17.3

• mongoose: ^6.2.10

• mongoose-unique-validator: ^3.0.0

• Insomnia

## Additional Scripts Added: ##
• "dev": "npx nodemon index.js", npm run dev

• "seed": "node db/seed.js", npm run seed


Link to client: https://github.com/sallyali7/shakespear-spokemon-client

### Overview ###

This a MERN full-stack WebApp that enables users to search for pokemons (currently twenty of them) and view their name, description and image. Please find the  repo to the client side above. Once forked and all depencies installed, the server and client should be able to communicate to each other on your local machine through the files. Server side is set up on localhost4000 while client side is set up on localhost3000. I have added a proxy middleware on the client side to facilitate this. 


## Process ##

I began by setting up the enviroment, routes and model schema. In the helper.js file I have also written functions to connect and disconnect mongoose from the database. For this specific task I only needed two routes, /pokemon and /pokemon/:pokemonId and only two get requests. I used mongoose to create the Schema and decided each pokemon will have unique properties which is where I used 'mongoose-unique-validator'. 

I then wrote the async functions found in the controllers folder so that i could use them to make requests from the client-side. 

I then proceeded to populating the database (data/pokemon.js file) and created the seed file.  

I used Insomnia for testing. 






