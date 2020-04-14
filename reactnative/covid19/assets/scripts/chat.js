import Base64 from './base64';

export default class WatsonChat {
  constructor() {
    this.url = '';
    this.iam_apikey = '';
    this.workspaceId = '';
    this.shouldSendAnalytics = false;
  }

  init(url, iam_apikey, workspaceId, shouldSendAnalytics = false) {
    this.url = url;
    this.iam_apikey = iam_apikey;
    this.workspaceId = workspaceId;
    this.shouldSendAnalytics = shouldSendAnalytics;
  }

  sendMessage(messages, input, callback) {
    if (input && input.length > 0) {
      const obj = {};

      obj.workspace_id = this.workspaceId;
      obj.input = { text: input };
      // make a fetch POST req here for watson communication
      const iam_apikey_encoded = Base64.btoa(`apikey:${this.iam_apikey}`);
      fetch(
        `${this.url}/v1/workspaces/${
          this.workspaceId
        }/message?version=2018-09-20`,
        {
          headers: {
            Authorization: `Basic ${iam_apikey_encoded}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(obj),
        },
      )
        .then(res => res.json())
        .then((data) => {
          const msg = data.output.text[0];
          let timeNow = new Date().toLocaleTimeString();
          timeNow = timeNow.substr(0, timeNow.lastIndexOf(':'));
          const msgTime = this.convertTimeToAMPM(timeNow);
          if (msg && msg.length > 0) {
            messages.push(Object.assign({}, { msg, isWatson: true, time: msgTime }));
          } else {
            messages.push(Object.assign(
              {},
              {
                msg: " didn't understand can you try again",
                isWatson: true,
                time: msgTime,
              },
            ));
          }
          return callback(null, messages);
        })
        .catch((err) => {
          console.log(err);
          let timeNow = new Date().toLocaleTimeString();
          timeNow = timeNow.substr(0, timeNow.lastIndexOf(':'));
          const msgTime = this.convertTimeToAMPM(timeNow);
          if (this.shouldSendAnalytics) {
            this.sendBotAnalytics(data);
          }
          messages.push(Object.assign(
            {},
            {
              msg: " didn't understand can you try again",
              isWatson: true,
              time: msgTime,
            },
          ));
          return callback(null, messages);
        });
    }
  }
  convertTimeToAMPM(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  sendBotAnalytics(responseData) {
    if (responseData.intents && responseData.intents.length > 0) {
      responseData.intents.map((singleIntent) => {
        WL.Analytics.log({ 'Chat-Intents': singleIntent.intent }, 'BotAnalytics');
        const intentConfidence = {};
        intentConfidence[`intent:${singleIntent.intent}`] = singleIntent.confidence;
        WL.Analytics.log(intentConfidence, 'IntentAnalytics');
      });
    }

    WL.Analytics.send();
  }
}
