// const dbConfig = require("../config/db.config.js");

// const mongoose = require("mongoose");

import dbConfig from '../config/db.config';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

export default{};db