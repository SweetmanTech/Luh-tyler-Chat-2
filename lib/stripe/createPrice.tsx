import handleError from "../handleError";

export const createPrice = async (productName: string) => {
  try {
    const response = await fetch(
      `/api/stripe/create_price?productName=${encodeURIComponent(productName)}`,
    );

    const data = await response.json();
    return data.data;
  } catch (error) {
    handleError(error);
    return { error };
  }
};