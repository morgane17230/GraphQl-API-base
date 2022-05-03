
const bunyan = require('bunyan');

const streams = [];

if (!['production', 'test'].includes(process.env.NODE_ENV)) {
    streams.push({
        level: 'error',
        stream: process.stdout,
    });
} else {
    streams.push({
        level: 'error',
        path: './log/error.log',
        type: 'rotating-file',
        period: '1d',
        count: 3,
    });
}

const logger = bunyan.createLogger({
    name: 'base-rest-api',
    streams,
});

module.exports = logger;
