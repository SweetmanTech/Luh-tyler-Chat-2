import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { Address } from "viem";

const useUser = () => {
  const { login, user } = usePrivy();
  const address = user?.wallet?.address as Address;
  const email = user?.email?.address;
  const [userData, setUserData] = useState<any>(null);

  const isPrepared = () => {
    if (!address) {
      login();
      return false;
    }

    return true;
  };

  useEffect(() => {
    const init = async () => {
      const req = JSON.stringify({ email });
      const headers = {
        "Content-Type": "application/json", // Specify the content type
      };
      fetch("/api/email", {
        method: "POST",
        body: req,
        headers,
      });
      const response = await fetch("/api/account", {
        method: "POST",
        body: req,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUserData(data);
    };
    if (!email) return;
    init();
  }, [email]);

  return {
    address,
    email,
    login,
    isPrepared,
    userData,
  };
};

export default useUser;
