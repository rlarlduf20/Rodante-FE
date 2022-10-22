import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTokenContext } from "../context/tokenState";

const LoginDelay = () => {
  const router = useRouter();
  const { setAccessToken } = useTokenContext();
  const access_token: any = router.query.accessToken;
  useEffect(() => {
    localStorage.setItem("access_token", access_token);
    setAccessToken(access_token);
    router.push("/");
  }, [router.query.accessToken]);

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        margin: "200px auto",
        fontSize: "144px",
      }}
    >
      ...
    </div>
  );
};
export default LoginDelay;
