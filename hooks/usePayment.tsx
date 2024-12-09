import { useState } from "react";
import { toast } from "react-toastify";
import { createPrice } from "@/lib/stripe/createPrice";
import { createSession } from "@/lib/stripe/createSession";

const usePayment = () => {
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async (productName: string) => {
    const priceResponse = await createPrice(productName);

    console.log("ZIAD", priceResponse)
    if (priceResponse.error) {
      toast.error("price creation is failed.");
      return false;
    }
    
    const sessionResponse = await createSession("", priceResponse.id)
    console.log("ZIAD", sessionResponse)
  };

  return {
    loading,
    setLoading,
    createCheckoutSession
  };
};

export default usePayment;
