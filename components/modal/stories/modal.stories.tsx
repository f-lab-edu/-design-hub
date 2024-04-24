import { useState } from "react";
import { Modal } from "../";
import Button from "components/button/Button";
import { ModalSizeSet } from "../types";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

const Template = ({ size }: { size: ModalSizeSet }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Content size={size}>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Controls />
          </Modal.Header>
          <Modal.Body>
            <p>Modal Body</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              size="sm"
              colorScheme="green"
              onClick={() => alert("you clicked ok")}
            >
              ok
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              size="sm"
              colorScheme="gray"
            >
              close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export const Size = Template.bind({});

export const WithControlElement = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Content size="lg">
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Controls
              controlElements={[
                <button
                  onClick={() => window.history.back()}
                  aria-label="뒤로 가기"
                >
                  뒤로 가기
                </button>,
              ]}
            />
          </Modal.Header>
          <Modal.Body>
            <p>Modal Body</p>
          </Modal.Body>
          <Modal.Footer>
            <Button>ok</Button>
            <Button onClick={() => setIsOpen(false)}>close</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};
