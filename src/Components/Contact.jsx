import { useState } from "react";
import { send } from "@emailjs/browser";
import { Paper, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import "./index.css";

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Non Kittilakkananon",
    message: "",
    reply_to: "",
  });
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_15c8l47", "template_cs307xg", toSend, "4nMOFWJfLJDWb8TKG")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <h1 style={{ margin: 4 }}>Contact Me</h1>
      {isSent ? (
        <div id="Home">
          <h1>Thank you for your message!</h1>
        </div>
      ) : (
        <div id="contact" className="container mt-5">
          <Paper sx={{ padding: 4, margin: 3 }}>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="form-control"
                  placeholder="Enter full name..."
                  label="Name"
                  name="from_name"
                  value={toSend.from_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  placeholder="Enter email..."
                  label="Email"
                  name="reply_to"
                  value={toSend.reply_to}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  required
                  label="Message"
                  name="message"
                  placeholder="Enter message..."
                  value={toSend.message}
                  onChange={handleChange}
                />
              </div>
              <Button variant="contained" endIcon={<SendIcon />} type="submit">
                Send
              </Button>
            </form>
          </Paper>
          <p>
            Email:{" "}
            <a
              href="mailto:tata32000@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              tata32000@hotmail.com
            </a>
          </p>
        </div>
      )}
    </motion.div>
  );
}
