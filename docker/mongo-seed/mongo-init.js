// creating user
db.auth(process.env["MONGO_INITDB_ROOT_USERNAME"], process.env["MONGO_INITDB_ROOT_PASSWORD"]);

db = db.getSiblingDB(process.env["MONGO_INITDB_DATABASE"]);
db.createUser({
  user: process.env["MONGODB_USER"],
  pwd: process.env["MONGODB_PASSWORD"],
  roles: [
    {
      role: 'dbOwner',
      db: process.env["MONGODB_DB_NAME"],
    },
  ],
});
