import { useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./atoms";

const Notification = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagesNotificationCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const totalNotificationNumber = useRecoilValue(totalNotificationSelector);
  return (
    <div>
      <button>Home</button>

      <button>
        My Network(
        {networkNotificationCount > 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messaging ({messagesNotificationCount})</button>
      <button>Notifications ({notificationAtomCount})</button>
      <button>ME({totalNotificationNumber})</button>
    </div>
  );
};

export default Notification;
