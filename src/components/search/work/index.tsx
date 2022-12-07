import { useEffect, useState } from "react";
import {
  SearchSection,
  SearchVideoCard,
} from "../../../styles/workSearchPage/workSearchBox";
import Loading from "../../common/etc/Loading";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const WorkSearchMain = () => {
  const [loading, setLoading] = useState(true);
  const [searchList, setSearchList] = useState<any>();

  const router = useRouter();
  useEffect(() => {
    const search = router.query;
    (async () => {
      let body = {
        searchWord: search.title,
      };
      try {
        const res = await axios.post("http://localhost:8080/work/search", body);
        console.log(res.data);
        setSearchList(res.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [router.query]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SearchSection>
          <div className="title">
            <span>'{router.query.title}'</span>의 검색 결과입니다.
          </div>
          <div className="content">
            {searchList.length === 0 ? (
              <span style={{ color: "#ccc", fontSize: "24px" }}>
                검색 결과가 없습니다.
              </span>
            ) : (
              searchList.map((item: any) => (
                <SearchVideoCard imgUri={item.coverImg}>
                  <Link href={`/eachWork/${item.workId}`}>
                    <div className="cardImg"></div>
                  </Link>
                  <div className="cardTitle">{item.title}</div>
                </SearchVideoCard>
              ))
            )}
          </div>
        </SearchSection>
      )}
    </>
  );
};

export default WorkSearchMain;
