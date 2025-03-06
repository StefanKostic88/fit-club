import { FC, JSX } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

interface OverlayInterface {
  children: JSX.Element;
}

interface ModalInterface {
  email: string | null;
  onModalToggle: () => void;
  isModalOpened: boolean;
}

const Overlay = ({ children }: OverlayInterface) => {
  return <div className={styles.overlay}>{children}</div>;
};

const Modal: FC<ModalInterface> = ({ email, onModalToggle, isModalOpened }) => {
  return (
    isModalOpened && (
      <Overlay>
        <div className={styles.modal}>
          <h2>Thank you for joining</h2>
          <p>
            You have successfully joined our newsletter with email:
            <strong> {email}</strong>
          </p>
          <Button
            text="close"
            clickHandler={onModalToggle}
            additionalStyles={{ zIndex: "100" }}
          />
        </div>
      </Overlay>
    )
  );
};

export default Modal;
