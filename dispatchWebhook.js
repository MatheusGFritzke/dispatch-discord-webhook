function dispatchWebhookDiscord({ message, hookUrl }, cb) {

    const postData = {
      content: message,
    };
  
    const headers = {
      "Content-Type": "application/json; charset=UTF-8",
    };
  
    axios
      .post(hookUrl, postData, { headers })
      .then((response) => {
        console.error("🥶 --> Response:", response.data);
        return cb(undefined, "Sent with success");
      })
      .catch((error) => {
        console.error("🥶 --> Error:", error.response.data);
        return cb(undefined, undefined, JSON.stringify(error.response.data));
      });
  }
  
  dispatchWebhookDiscord(
    {
      message: "Message to send",
      hookUrl: "https://discord.com/api/webhooks/",
    },
    (err, ret) => console.error(err, ret)
  );