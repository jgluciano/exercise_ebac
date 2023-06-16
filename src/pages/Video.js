import React, { useRef, useState } from "react";
import "./video.css"
import VideoFooter from "./components/footer/VideoFooter"

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://webapp-va.tiktok.com/8637902264d61946fb8b690318869046/648d3ff5/kmoat/tos-useast2a-ve-0068c004/oMqeMADoQBQkWFibPh8JKCShQSUeEEAKnBoRZK?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=2120&bt=1060&cs=0&ds=2&ft=Ap6JtBiTq8Zmog81Wc_vjyGUKAhLrus&mime_type=video_mp4&qs=0&rc=NXZpTGRTaFBnKXVmZXpud2xAKWg6ZDVoZWU8aTc4MzRpZGVnKTc0eWt4Om1kOGYzM2o3PHl5U2xrdmlxRDpqYmwrYitsaHFgMV5gNGE2Yi0wLzRgYjQyYDpjLTNxNS80YDI1Zi0tMTEtLTo%3D&btag=200080000&dpk=rW%2BxAd7sKhUBklHwQRt3HO9wo%2B2e2B%2FNGErK4A3v94E3nCvAqYJI5RdM5mazoXuijz45tyu3qFFGc%2FcUa4aVKvSCEa7T037MqLYLbA%3D%3D&dpm=cenc-aes-ctr&l=202306162309027701349F2207575A7960&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNjk4MzEwNzIwMTEyNjA3MzM1MCJ9"
        //src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
      ></video>
      <VideoFooter />
    </div>
  );
}

export default Video;
