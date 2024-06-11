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
import { useState, useEffect } from "react";
import showToast from "../../common/Toast";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../utils/Firebase";
import * as NigerianStates from "nigerian-states-and-lgas";

// other code remains unchanged

type DonationType = {
  onClose: () => void;
  isOpen: boolean;
};

// Initial state for the Donation form
const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  typeOfDonation: "",
  state: "",
  lga: "",
};

// Functional React component for the DonationModal
const DonationModal: React.FC<DonationType> = ({ onClose, isOpen }) => {
  // Chakra UI Toast hook
  const toast = useToast();

  // State to manage form input values
  const [form, setForm] = useState(initialState);

  // Loading state for handling button loading state
  const [Loading, setLoading] = useState(false);

  // State to manage list of LGAs based on selected state
  const [lgas, setLgas] = useState<string[]>([]);

  // Destructure form input values
  const { name, email, state, phoneNumber, typeOfDonation, lga } = form;

  const typeOfDonations = [
    "Sponsorships",
    "Grants",
    "Corporate Donations",
    "Gifts",
    "Others",
  ];

  // Fetch LGAs when state changes
  useEffect(() => {
    if (state) {
      const stateData = NigerianStates.lgas(state);
      setLgas(stateData || []);
    } else {
      setLgas([]);
    }
  }, [state]);

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (name && email && state && phoneNumber && typeOfDonation && lga) {
      setLoading(true);

      try {
        await addDoc(collection(db, "Donations"), {
          ...form,
          timestamp: serverTimestamp(),
        });
        showToast(toast, "HAM.", "success", "Received form submission");
        setForm(initialState);
        setLoading(false);
        onClose();
      } catch (error) {
        console.log(error);
        showToast(toast, "HAM.", "error", "Form submission failed");
        setLoading(false);
      }
    } else {
      showToast(toast, "HAM.", "error", "Please fill all fields");
    }
  };

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
        <ModalCloseButton />

        <ModalBody>
          <div className="flex w-full flex-col py-7">
            <h1 className="text-3xl mb-4 text-center">Donate</h1>
            <p className="text-center">
              Please fill this form, and we will reach out to you.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-5">
              {/* Input field for name */}
              <div className="flex flex-col">
                <input
                  id="name"
                  placeholder="Name of Person/Organization"
                  className="bg-inherit border-[#acacac] p-3 border-2 outline-none"
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
              {/* Input field for email */}
              <div className="flex flex-col">
                <input
                  id="email"
                  className="bg-inherit border-[#acacac] p-3 border-2 outline-none"
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
              {/* Input field for phone number */}
              <div className="flex flex-col">
                <input
                  id="phoneNumber"
                  placeholder="Phone Number"
                  className="bg-inherit border-[#acacac] p-3 border-2 outline-none"
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
              {/* Input field for type of donation */}
              <div className="flex flex-col">
                <select
                  id="typeOfDonation"
                  placeholder="Select Type Of Donation"
                  className="bg-inherit border-[#acacac] p-3 border-2 outline-none"
                  value={typeOfDonation}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      typeOfDonation: e.target.value,
                    })
                  }
                >
                  <option key="" value="">
                    Select Type Of Donation
                  </option>
                  {typeOfDonations.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              {/* Dropdown for state */}
              <div className="flex flex-col">
                <select
                  id="state"
                  placeholder="Select State"
                  className="bg-inherit border-[#acacac] p-3 border-2 outline-none"
                  value={state}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      state: e.target.value,
                    })
                  }
                >
                  <option key="" value="">
                    Select State
                  </option>
                  {NigerianStates.states().map((stateName: string) => (
                    <option key={stateName} value={stateName}>
                      {stateName}
                    </option>
                  ))}
                </select>
              </div>
              {/* Dropdown for LGA */}
              {state && (
                <div className="flex flex-col">
                  <select
                    id="lga"
                    placeholder="Select LGA"
                    className="bg-inherit border-[#acacac] p-3 border-2 outline-none"
                    value={lga}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        lga: e.target.value,
                      })
                    }
                  >
                    <option key="" value="">
                      Select LGA
                    </option>
                    {lgas.map((lgaName) => (
                      <option key={lgaName} value={lgaName}>
                        {lgaName}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </form>
          </div>
        </ModalBody>

        {/* Modal footer with buttons */}
        <ModalFooter>
          <div className="flex gap-5">
            {/* Submit button with loading spinner */}
            <Button
              isLoading={Loading}
              onClick={handleSubmit}
              isDisabled={
                !name ||
                Loading ||
                !email ||
                !state ||
                !typeOfDonation ||
                !lga ||
                lga.length > 0 ||
                state.length > 0 ||
                typeOfDonation.length > 0
              }
              colorScheme="#0a0a32"
              className="bg-primary text-white"
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

// Export the DonationModal component
export default DonationModal;
