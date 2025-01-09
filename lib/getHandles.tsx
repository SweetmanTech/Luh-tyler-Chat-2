import { AGENT_API } from "./consts";

const getHandles = async (handle: string) => {
  try {
    const response = await fetch(
      `${AGENT_API}/api/get_social_handles?handle=${encodeURIComponent(handle)}`,
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export default getHandles;
