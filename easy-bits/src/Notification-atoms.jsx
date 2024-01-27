import { useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "./atoms";
import ButtonUpdater from "./ButtonUpdater";

const NotificationAtoms = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagesNotificationCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
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
      <ButtonUpdater />
    </div>
  );
};

export default NotificationAtoms;
