import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 2
})
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 10
})
export const totalNotificationSelector = selector({
    key: 'totalNotificationSelector',
    get: ({ get }) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messagingAtomCount = get(messagingAtom);
        const notificationAtomCount = get(notificationAtom);

        return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationAtomCount;
    }
})