import { useUserProvider } from "@/providers/UserProvder";
import Image from "next/image";
import Icon from "../Icon";
import AccountModal from "../AccountModal";

const UserInfo = ({
  toggleMenuExpanded,
}: {
  toggleMenuExpanded: () => void;
}) => {
  const { email, toggleModal, userData } = useUserProvider();

  return (
    <>
      <div
        className={`w-full px-3 flex gap-3 items-center ${email ? "justify-between" : "justify-start"}`}
      >
        {email && (
          <button
            className="flex gap-2 items-center"
            type="button"
            onClick={toggleModal}
          >
            <div className="relative w-6 h-6 md:w-8 md:h-8 rounded-md overflow-hidden">
              <Image
                src={userData?.image || "https://i.imgur.com/QCdc8Ai.jpg"}
                layout="fill"
                alt="not found icon"
              />
            </div>
            <div>
              <p className="text-xs md:text-sm">{email}</p>
              <p className="text-xs md:text-sm text-left">
                {userData?.organization}
              </p>
            </div>
          </button>
        )}
        <button type="button" onClick={toggleMenuExpanded}>
          <Icon name="exit" />
        </button>
      </div>
      <AccountModal />
    </>
  );
};

export default UserInfo;
