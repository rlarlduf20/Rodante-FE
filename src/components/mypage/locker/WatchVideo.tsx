import { useEffect, useState } from "react";
import {
  WatchVideoBox,
  WatchVideoCard,
} from "../../../styles/mypage/mypageBox";
import axios from "axios";
import Loading from "../../common/etc/Loading";
import Link from "next/link";

interface WatchVideoType {
  myInfo: any;
}

const WatchVideo = ({ myInfo }: WatchVideoType) => {
  const [w_video, setWVideo] = useState<any>();
  const [loading, setLoading] = useState(true);
  const getJJimWork = async () => {
    const access = localStorage.getItem("access_token");
    console.log("myid", myInfo.id);
    try {
      const res = await axios.get(
        `http://localhost:8080/user/jjim/view/${myInfo.id}`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
      setWVideo(res.data);
      console.log("jjim", res.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getJJimWork();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <WatchVideoBox>
          {w_video &&
            w_video.map((list: any, index: number) => (
              <WatchVideoCard key={index} thumbnail={list.coverImg}>
                <Link href={`/eachWork/${list.workId}`}>
                  <div className="thumbnail"></div>
                </Link>
                <p>{list.title}</p>
              </WatchVideoCard>
            ))}
        </WatchVideoBox>
      )}
    </>
  );
};

export default WatchVideo;
