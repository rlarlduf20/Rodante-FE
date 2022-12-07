// import { useState, useEffect } from "react";
// import { VideoRegiFormBox } from "../../styles/videoRegipage/videoRegiBox";
// import axios from "axios";
// import Image from "next/image";
// import AWS from "aws-sdk";
// import ReactS3Client from "react-aws-s3-typescript";

// const VideoRegiForm = () => {
//   const [imgSrc, setImgSrc] = useState("");
//   const encodeFileToBase64 = (fileBlob: any) => {
//     setFile(fileBlob);
//     const reader: any = new FileReader();
//     reader.readAsDataURL(fileBlob);
//     return new Promise<void>((resolve) => {
//       reader.onload = () => {
//         setImgSrc(reader.result);
//         resolve();
//       };
//     });
//   };
//   const [title, setTitle] = useState("");
//   const [genre, setGenre] = useState("");
//   const [description, setDescription] = useState("");
//   const [dayOfWeek, setDayOfWeek] = useState("");
//   const [isNext, setIsNext] = useState(false);
//   const [workId, setWorkId] = useState(0);
//   const [file, setFile] = useState<any>();
//   const [me, setMe] = useState<any>();

//   const onChangeTitle = (e: any) => {
//     setTitle(e.target.value);
//   };
//   const onChangeDes = (e: any) => {
//     setDescription(e.target.value);
//   };
//   const onChangeDayOfWeek = (e: any) => {
//     setDayOfWeek(e.target.value);
//   };

//   const onSubmit = async (e: any) => {
//     e.preventDefault();
//     const access = localStorage.getItem("access_token");
//     let data = {
//       title,
//       genre,
//       description,
//       dayOfWeek,
//     };
//     if (
//       title === "" ||
//       genre === "" ||
//       description === "" ||
//       dayOfWeek === ""
//     ) {
//       alert("모든 입력란을 채워주세요");
//       return;
//     }
//     console.log(data);

//     try {
//       const res = await axios.post(
//         `http://localhost:8080/user/work/${me.id}`,
//         data,
//         {
//           headers: {
//             Authorization: `Bearer ${access}`,
//           },
//         }
//       );
//       console.log(res.data);
//       setWorkId(res.data);
//       setIsNext(true);
//       alert("썸네일 이미지를 등록해주세요");
//       // window.location.replace("/");
//     } catch (e) {
//       console.error(e);
//       alert("로그인이 필요한 서비스입니다.");
//       // window.location.replace("/signin");
//     }
//   };

//   const s3config = {
//     bucketName: "rodanthe-s3",
//     dirName: "UserImg",
//     region: "ap-northeast-2",
//     accessKeyId: `${process.env.NEXT_PUBLIC_S3_ACCESS}`,
//     secretAccessKey: `${process.env.NEXT_PUBLIC_S3_SECRET}`,
//   };

//   const onRegi = async () => {
//     const s3 = new ReactS3Client(s3config);
//     const filename = `${workId}/${workId}`;
//     const access = localStorage.getItem("access_token");
//     try {
//       const res = await s3.uploadFile(file, filename);
//       console.log(res);
//       console.log(workId);
//       const res2 = await axios.post(
//         `http://localhost:8080/work/get/workId/${workId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${access}`,
//           },
//         }
//       );
//       console.log(res2);
//       alert("모든 등록 절차를 완료하였습니다.");
//       window.location.replace("/");
//     } catch (e) {
//       console.error(e);
//       alert("다시한번 시도해주세요");
//     }
//   };
//   const getMe = async () => {
//     const access = localStorage.getItem("access_token");

//     try {
//       const res = await axios.get("http://localhost:8080/user/me", {
//         headers: {
//           Authorization: `Bearer ${access}`,
//         },
//       });
//       setMe(res.data);
//       console.log(me);
//     } catch (e) {
//       console.error(e);
//     }
//   };
//   useEffect(() => {
//     getMe();
//   }, []);
//   return (
//     <VideoRegiFormBox>
//       {isNext ? (
//         <div className="thumbnail">
//           <p>썸네일 이미지</p>
//           <input
//             className="imgInput"
//             type="file"
//             accept="image/png"
//             onChange={(e: any) => {
//               encodeFileToBase64(e.target.files[0]);
//             }}
//           />
//           <div className="imgBox">
//             {imgSrc && <Image width={256} height={192} src={imgSrc} />}
//           </div>
//         </div>
//       ) : (
//         <>
//           <div className="title">
//             <p>작품 제목</p>
//             <input
//               placeholder="제목"
//               className="titleInput"
//               onChange={onChangeTitle}
//             />
//           </div>
//           <div className="genre">
//             <p>장르</p>
//             <label>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="comedy"
//                 className="radio"
//                 onChange={() => setGenre("comedy")}
//               />
//               코미디
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="mood"
//                 className="radio"
//                 onChange={() => setGenre("mood")}
//               />
//               감성
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="romance"
//                 className="radio"
//                 onChange={() => setGenre("romance")}
//               />
//               로맨스
//             </label>
//           </div>
//           <div className="description">
//             <p>작품 설명</p>
//             <textarea
//               placeholder="설명"
//               className="desInput"
//               onChange={onChangeDes}
//             />
//           </div>
//           <div className="dayOfWeek">
//             <p>요일</p>
//             <select
//               className="daySelect"
//               onChange={onChangeDayOfWeek}
//               defaultValue={""}
//             >
//               <option value="">요일</option>
//               <option value="mon">월</option>
//               <option value="tue">화</option>
//               <option value="wed">수</option>
//               <option value="thu">목</option>
//               <option value="fri">금</option>
//               <option value="sat">토</option>
//               <option value="sun">일</option>
//             </select>
//           </div>
//         </>
//       )}
//       {isNext ? (
//         <div className="btn">
//           <div className="prevBtn" onClick={() => setIsNext((prev) => !prev)}>
//             이전 단계로
//           </div>
//           <div className="regiBtn" onClick={onRegi}>
//             등록하기
//           </div>
//         </div>
//       ) : (
//         <div className="btn">
//           <div className="regiBtn" onClick={onSubmit}>
//             다음 단계로
//           </div>
//         </div>
//       )}
//     </VideoRegiFormBox>
//   );
// };

// export default VideoRegiForm;

import { useState, useEffect, useCallback } from "react";
import { VideoRegiFormBox } from "../../styles/videoRegipage/videoRegiBox";
import axios from "axios";
import Image from "next/image";
import ReactS3Client from "react-aws-s3-typescript";

const VideoRegiForm = () => {
  const [imgSrc, setImgSrc] = useState("");
  const encodeFileToBase64 = (fileBlob: any) => {
    setFile(fileBlob);
    console.log(fileBlob);
    const reader: any = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImgSrc(reader.result);

        resolve();
      };
    });
  };
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [workId, setWorkId] = useState(0);
  const [file, setFile] = useState<any>();
  const [fileName, setFileName] = useState("");
  const [me, setMe] = useState<any>();
  console.log(imgSrc);
  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const onChangeDes = (e: any) => {
    setDescription(e.target.value);
  };
  const onChangeDayOfWeek = (e: any) => {
    setDayOfWeek(e.target.value);
  };

  const s3config = {
    bucketName: "rodanthe-s3",
    dirName: "UserImg",
    region: "ap-northeast-2",
    accessKeyId: `${process.env.NEXT_PUBLIC_S3_ACCESS}`,
    secretAccessKey: `${process.env.NEXT_PUBLIC_S3_SECRET}`,
  };
  const onRegi = async () => {
    const access = localStorage.getItem("access_token");
    let data = {
      title,
      genre,
      description,
      dayOfWeek,
    };
    if (
      title === "" ||
      genre === "" ||
      description === "" ||
      dayOfWeek === ""
    ) {
      alert("모든 입력란을 채워주세요");
      return;
    }
    try {
      const res = await axios.post(
        `http://localhost:8080/user/work/${me.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );

      const s3 = new ReactS3Client(s3config);
      const fileName = `${res.data}/${res.data}`;
      await axios.post(`http://localhost:8080/work/get/workId/${res.data}`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      await s3.uploadFile(file, fileName);
      alert("모든 등록 절차를 완료하였습니다.");
      window.location.replace("/");
    } catch (e) {
      console.error(e);
      alert("로그인이 필요한 서비스입니다.");
      // window.location.replace("/signin");
    }
  };

  // const imageRegi = async () => {
  //   const s3 = new ReactS3Client(s3config);
  //   const access = localStorage.getItem("access_token");
  //   try {
  //     console.log("filename2", fileName);
  //     await axios.post(`http://localhost:8080/work/get/workId/${workId}`, {
  //       headers: {
  //         Authorization: `Bearer ${access}`,
  //       },
  //     });
  //     await s3.uploadFile(file, fileName);
  //     console.log("filename3", fileName);
  //     console.log(workId);
  //     alert("모든 등록 절차를 완료하였습니다.");
  //     window.location.replace("/");
  //   } catch (e) {
  //     console.error(e);
  //     alert("다시한번 시도해주세요");
  //   }
  // };

  const getMe = async () => {
    const access = localStorage.getItem("access_token");

    try {
      const res = await axios.get("http://localhost:8080/user/me", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      setMe(res.data);
      console.log(me);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getMe();
  }, []);
  return (
    <VideoRegiFormBox>
      <div className="title">
        <p>작품 제목</p>
        <input
          placeholder="제목"
          className="titleInput"
          onChange={onChangeTitle}
        />
      </div>
      <div className="genre">
        <p>장르</p>
        <label>
          <input
            type="radio"
            name="genre"
            value="comedy"
            className="radio"
            onChange={() => setGenre("comedy")}
          />
          코미디
        </label>
        <label>
          <input
            type="radio"
            name="genre"
            value="mood"
            className="radio"
            onChange={() => setGenre("mood")}
          />
          감성
        </label>
        <label>
          <input
            type="radio"
            name="genre"
            value="romance"
            className="radio"
            onChange={() => setGenre("romance")}
          />
          로맨스
        </label>
      </div>
      <div className="description">
        <p>작품 설명</p>
        <textarea
          placeholder="설명"
          className="desInput"
          onChange={onChangeDes}
        />
      </div>
      <div className="dayOfWeek">
        <p>요일</p>
        <select
          className="daySelect"
          onChange={onChangeDayOfWeek}
          defaultValue={""}
        >
          <option value="">요일</option>
          <option value="mon">월</option>
          <option value="tue">화</option>
          <option value="wed">수</option>
          <option value="thu">목</option>
          <option value="fri">금</option>
          <option value="sat">토</option>
          <option value="sun">일</option>
        </select>
      </div>
      <div className="thumbnail">
        <p>썸네일 이미지</p>
        <p className="warning">
          (png파일, 1024 X 768 비율이 아닐 경우 사진이 깨질 수 있습니다.)
        </p>
        <input
          className="imgInput"
          type="file"
          accept="image/png"
          onChange={(e: any) => {
            encodeFileToBase64(e.target.files[0]);
          }}
        />
        <div className="imgBox">
          {imgSrc && <Image width={256} height={192} src={imgSrc} />}
        </div>
      </div>
      <div className="btn">
        <div className="regiBtn" onClick={onRegi}>
          등록하기
        </div>
      </div>
    </VideoRegiFormBox>
  );
};

export default VideoRegiForm;
