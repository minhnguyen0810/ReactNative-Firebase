const functions = require("firebase-functions");
var fetch = require("node-fetch");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

module.exports.sendPushNotification = functions.database
  .ref("contacts/{id}")
  .onCreate((event) => {
    const root = event.data.ref.root;
    var messages = [];
    return root
      .child("/users")
      .once("value")
      .then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          messages.push({
            to: expoToken,
            body: "New Note Added",
          });
        });

        return Promise.all(messages);
      })
      .then((messages) => {
        fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messages),
        });
      });
  });
