const OSS = require("ali-oss");

const ossConfig = {
    accessKeyId: process.env.ACCESS_KEY_ID || "XXXXXXXXXXXXXXXX",
    accessKeySecret: process.env.ACCESS_KEY_SECRET || "XXXXXXXXXXXXXXXXXXXXX",
    bucket: process.env.BUCKET || "MyBucket",
    region: process.env.REGION || "oss-ap-southeast-5",
};

const ossClient = new OSS(ossConfig);

module.exports = { ossClient,ossConfig }
