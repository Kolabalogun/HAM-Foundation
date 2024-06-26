/**
 * showToast Utility Function
 *
 * This utility function is used to display toast notifications using the Chakra UI `toast` component.
 * It takes parameters for the toast instance, title, status, description, and other optional settings.
 *
 * @param {object} toast - Chakra UI `toast` instance
 * @param {string} title - Title for the toast notification
 * @param {string} status - Status color of the toast (e.g., "success", "error", "warning")
 * @param {string} description - Description message for the toast
 */

import { UseToastOptions, Toast } from "@chakra-ui/react";

const showToast = (
  toast: (options?: UseToastOptions | undefined) => ReturnType<typeof Toast>,
  title: string,
  status: "success" | "error" | "warning" | "info",
  description: string
) => {
  toast({
    position: "top",
    title: title,
    description,
    status: status,
    duration: 5000,
    isClosable: true,
  });
};

export default showToast;
