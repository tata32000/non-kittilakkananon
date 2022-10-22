import { useState } from "react";
import { send } from "@emailjs/browser";

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Non Kittilakkananon",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_15c8l47", "template_cs307xg", toSend, "4nMOFWJfLJDWb8TKG")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="from name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        Email: <a href="mailto: tata32000@hotmail.com">tata32000@hotmail.com</a>
      </p>
    </>
  );
}
