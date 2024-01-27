import { useSetRecoilState } from "recoil";
import { notificationAtom } from "./atoms";

const ButtonUpdater = () => {
  const setNotificationAtomCount = useSetRecoilState(notificationAtom);
  return (
    <button
      onClick={() => {
        setNotificationAtomCount((c) => c + 1);
      }}
    >
      Click to increase Notification Count
    </button>
  );
};

export default ButtonUpdater;
