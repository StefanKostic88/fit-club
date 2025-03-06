import styles from "./Join.module.css";
import Button from "../ui/Button/Button";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  // add modal and remove this
  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    emailjs.sendForm("", "", formRef.current, "").then(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div className={styles.join} id="join">
      <div className={styles["left-j"]}>
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>Your body</span>
          <span className="stroke-text">With us?</span>
        </div>
      </div>
      <div className={styles["right-j"]}>
        <form
          ref={formRef}
          className={styles["email-container"]}
          onSubmit={handleEmailSubmit}
        >
          <input type="text" name="user_email" placeholder="Enter your email" />
          <Button
            text="join now"
            additionalStyles={{
              backgroundColor: "var(--orange)",
              color: "#fff",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Join;
