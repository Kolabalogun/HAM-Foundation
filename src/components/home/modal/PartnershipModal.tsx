// Import Chakra UI components, Firebase Firestore functions, and custom utility functions
import { Button, useToast } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useState } from "react";
import showToast from "../../common/Toast";

type PartnershipType = {
  onClose: () => void;
  isOpen: boolean;
};

// Initial state for the Partnership form
const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  type: "",
  description: "",
  comment: "",
};

// Functional React component for the PartnershipModal
const PartnershipModal: React.FC<PartnershipType> = ({ onClose, isOpen }) => {
  // Chakra UI Toast hook
  const toast = useToast();

  // State to manage form input values
  const [form, setForm] = useState(initialState);

  // Loading state for handling button loading state
  const [Loading, setLoading] = useState(false);

  // Destructure form input values
  const { name, email, description, phoneNumber, type, comment } = form;

  // Function to handle form submission
  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      showToast(toast, "HAM.", "success", "Received form submission");
    }, 3000);
  };

  // Return the JSX structure of the PartnershipModal component
  return (
    <Modal
      blockScrollOnMount={false}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Partnership Form</ModalHeader> */}
        <ModalCloseButton />

        <ModalBody>
          <div className="flex w-full flex-col py-7">
            <h1 className="text-3xl mb-4 text-center">Partnership Form</h1>
            <p className="text-center">
              Please fill this form, and we will reach out to you.{" "}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-5">
              {/* Input field for name */}
              <div className="flex flex-col ">
                <input
                  id="name"
                  placeholder="Organization/Company Name"
                  className="bg-inherit border-[#acacac] p-3   border-2 outline-none"
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              {/* Input field for  email */}
              <div className="flex flex-col ">
                <input
                  id="email"
                  className="bg-inherit border-[#acacac] p-3   border-2 outline-none"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col ">
                <input
                  id="name"
                  placeholder="Phone"
                  className="bg-inherit border-[#acacac] p-3   border-2 outline-none"
                  type="number"
                  value={phoneNumber}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col ">
                <input
                  id="name"
                  placeholder="Nature of Organization/Company"
                  className="bg-inherit border-[#acacac] p-3   border-2 outline-none"
                  value={type}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      type: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col ">
                <textarea
                  id="name"
                  className="bg-inherit border-[#acacac] p-3   border-2 outline-none"
                  rows={4}
                  value={description}
                  placeholder="Brief Statement of Interest/Reason for Joining"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col ">
                <textarea
                  id="name"
                  className="bg-inherit border-[#acacac] p-3   border-2 outline-none"
                  rows={4}
                  value={comment}
                  placeholder="Additional Comments or Questions"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      comment: e.target.value,
                    })
                  }
                />
              </div>
            </form>
          </div>
        </ModalBody>

        {/* Modal footer with buttons */}
        <ModalFooter>
          <div className="flex gap-5">
            {/* Withdraw button with loading semailner */}
            <Button
              isLoading={Loading}
              onClick={() => {
                handleSubmit();
              }}
              isDisabled={!name || Loading || !email || !description || !type}
              colorScheme="#0a0a32"
              className={`bg-primary text-white`}
            >
              Submit Now
            </Button>
            {/* Close button */}
            <Button
              onClick={() => {
                setForm(initialState);
                onClose();
              }}
            >
              Close
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

// Export the PartnershipModal component
export default PartnershipModal;
