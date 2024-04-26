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
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../utils/Firebase";

type MembershipType = {
  onClose: () => void;
  isOpen: boolean;
};

// Initial state for the Membership form
const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  fieldOfIntrest: "",
  description: "",
};

// Functional React component for the MembershipModal
const MembershipModal: React.FC<MembershipType> = ({ onClose, isOpen }) => {
  // Chakra UI Toast hook
  const toast = useToast();

  // State to manage form input values
  const [form, setForm] = useState(initialState);

  // Loading state for handling button loading state
  const [Loading, setLoading] = useState(false);

  // Destructure form input values
  const { name, email, description, phoneNumber, fieldOfIntrest } = form;

  // Function to handle form submission

  const handleSubmit = async () => {
    if (name && email && description && phoneNumber && fieldOfIntrest) {
      setLoading(true);

      try {
        await addDoc(collection(db, "memberships"), {
          ...form,

          timestamp: serverTimestamp(),
        });
        showToast(toast, "HAM.", "success", "Received form submission");
        setForm(initialState);

        setLoading(false);
      } catch (error) {
        console.log(error);
        showToast(toast, "HAM.", "error", "Form submission failed");
        setLoading(false);
      }
    } else {
      return showToast(toast, "HAM.", "error", "Please fill all fields");
    }
  };

  // Return the JSX structure of the MembershipModal component
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
        {/* <ModalHeader>Membership Form</ModalHeader> */}
        <ModalCloseButton />

        <ModalBody>
          <div className="flex w-full flex-col py-7">
            <h1 className="text-3xl mb-4 text-center">Membership Form</h1>
            <p className="text-center">
              Please fill this form, and we will reach out to you.{" "}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-5">
              {/* Input field for name */}
              <div className="flex flex-col ">
                <input
                  id="name"
                  placeholder="Name"
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
                  placeholder="Phone Number"
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
                  placeholder=" Field Of Interest"
                  className="bg-inherit border-[#acacac] p-3   border-2 outline-none"
                  value={fieldOfIntrest}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      fieldOfIntrest: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col ">
                <textarea
                  id="name"
                  className="bg-inherit border-[#acacac] p-3   border-2 outline-none"
                  rows={6}
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
              isDisabled={
                !name || Loading || !email || !description || !fieldOfIntrest
              }
              colorScheme="#0a0a32"
              className={`bg-primary text-white`}
            >
              {Loading ? "Loading..." : "Submit Now"}
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

// Export the MembershipModal component
export default MembershipModal;
