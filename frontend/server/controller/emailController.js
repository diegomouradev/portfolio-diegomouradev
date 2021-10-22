exports.sendEmail = async (req, res, next) => {
  const newEmail = req.body;

  res.status(201).json({
    status: "success",
    data: {
      email: newEmail,
    },
  });
  //   const request = mailjet.post("send", { version: "v3.1" }).request({
  //     Messages: [
  //       {
  //         From: {
  //           Email: "diegoo.demoura@gmail.com",
  //           Name: "Me",
  //         },
  //         To: [
  //           {
  //             Email: "diegoo.demoura@gmail.com",
  //             Name: "You",
  //           },
  //         ],
  //         Subject: "test 1",
  //         TextPart: "Greetings from Mailjet!",
  //         HTMLPart: `${eventString}`,
  //       },
  //     ],
  //   });
  //   request
  //     .then((result) => {
  //       console.log(result.body);
  //     })
  //     .catch((err) => {
  //       console.log(err.statusCode);
  //     });
};
