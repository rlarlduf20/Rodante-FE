import { useEffect, useState } from "react";
import { SearchSection } from "../../../styles/workSearchPage/workSearchBox";
import Loading from "../../common/etc/Loading";
import axios from "axios";
import { useRouter } from "next/router";
const WorkSearchMain = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    (async () => {
      let body = {
        searchWord: "인재",
      };
      const access = localStorage.getItem("access_token");
      try {
        console.log(body);
        const res = await axios.post(
          "http://localhost:8080/work/search",
          body,
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          }
        );
        console.log("res", res.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return <>{loading ? <Loading /> : <SearchSection></SearchSection>}</>;
};

export default WorkSearchMain;
