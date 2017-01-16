'use strict';

const Arrow = require('arrowjs');
//chuyen moi truong chay
process.env.NODE_ENV = 'production';
const application = new Arrow();

application.start({
    passport: true,
    role: true
});