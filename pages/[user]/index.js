import { useEffect } from "react";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { user } = router.query;
  useEffect(() => {
    window.location.href = `https://dev.to/${user}`;
  }, [user]);
};

export default User;
