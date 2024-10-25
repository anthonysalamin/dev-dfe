// functions/proxy.js
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const response = await fetch("https://usebasin.com/f/03d955e3a8b4", {
    method: event.httpMethod,
    headers: { "Content-Type": "application/json" },
    body: event.body,
  });

  return {
    statusCode: response.status,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allows any origin
      "Content-Type": "application/json",
    },
    body: await response.text(),
  };
};