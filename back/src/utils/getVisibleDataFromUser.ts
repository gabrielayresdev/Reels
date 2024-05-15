import { User } from "../types/User";

export default function getVisibleDataFromUser(user: User) {
  const { hash, salt, adm, ...visibleData } = user;
  return visibleData;
}
