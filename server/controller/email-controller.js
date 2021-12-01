const mailjet = require("node-mailjet").connect(
  `${process.env.MJ_APIKEY_PUBLIC}`,
  `${process.env.MJ_APIKEY_PRIVATE}`
);

exports.sendEmail = async (req, res, next) => {
  const send = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "diegoo.demoura@gmail.com",
          Name: "Diego",
        },
        To: [
          {
            Email: "diegoo.demoura@gmail.com",
            Name: "Diego",
          },
        ],
        Variables: {
          name: `${req.body.name}`,
          email: `${req.body.email}`,
          message: `${req.body.message}`,
          date: `${req.body.date}`,
        },
        TemplateLanguage: true,
        Subject: "Contact message from diegomoura.dev",
        TextPart: "{{var:email}}",
        HTMLPart: `
        
        <p>FROM:{{var:name}}</p>
        <p>EMAIL: {{var:email}}</p>
        <p>{{var:message}}</p>
        <p>{{var:message}}</p>
        `,
      },
    ],
  });
  send
    .then((result) => {
      res.json({
        result,
      });
    })
    .catch((err) => {
      console.log(err.statusCode);
      console.log(err);
    });
};
