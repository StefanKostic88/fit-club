import { FC, JSX } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import Blur from "../Blur/Blur";

interface OverlayInterface {
  children: JSX.Element;
}

interface ModalInterface {
  email: string | null;
  onModalToggle: () => void;
  isModalOpened?: boolean;
}

const Overlay = ({ children }: OverlayInterface) => {
  return <div className={styles.overlay}>{children}</div>;
};

const Modal: FC<ModalInterface> = ({ email, onModalToggle }) => {
  return (
    <div className={styles.modal}>
      <Blur additionalStyle="modal-blur" />
      <h2>Thank you for joining</h2>
      <p>
        You have successfully joined our newsletter with email:
        <strong> {email}</strong>
      </p>
      <Button
        text="Close"
        clickHandler={onModalToggle}
        additionalStyles={{
          zIndex: "100",
          backgroundColor: "var(--orange)",
          color: "#fff",
          padding: "0.5rem 2rem",
        }}
      />
    </div>
  );
};

const ModalWithOverlay: FC<ModalInterface> = ({
  email,
  onModalToggle,
  isModalOpened,
}) => {
  return (
    isModalOpened && (
      <Overlay>
        <Modal {...{ email, onModalToggle, isModalOpened }} />
      </Overlay>
    )
  );
};

export default ModalWithOverlay;
