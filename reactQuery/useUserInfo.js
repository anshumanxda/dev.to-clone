import { useQuery } from "@tanstack/react-query";
import { fetchUserInfo } from "../apis";

function useUserInfo(id) {
  return useQuery(["latest"], () => fetchUserInfo(id));
}

export default useUserInfo;
