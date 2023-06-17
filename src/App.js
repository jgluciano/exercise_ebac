import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={5}
          messages={23}
          shares={12}

          name="jgluciano"
          description="❤️🥰"
          music="som original - jgluciano"

          url="https://webapp-va.tiktok.com/73ac50cf176341805d9910595e8845cd/648e4de2/kmoat/tos-useast2a-ve-0068c004/oMqeMADoQBQkWFibPh8JKCShQSUeEEAKnBoRZK?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=2120&bt=1060&cs=0&ds=2&ft=Ap6JtBiTq8ZmoFv8Wc_vjPdW8AhLrus&mime_type=video_mp4&qs=0&rc=NXZpTGRTaFBnKXVmZXpud2xAKWg6ZDVoZWU8aTc4MzRpZGVnKTc0eWt4Om1kOGYzM2o3PHl5U2xrdmlxRDpqYmwrYitsaHFgMV5gNGE2Yi0wLzRgYjQyYDpjLTNxNS80YDI1Zi0tMTEtLTo%3D&btag=200080000&dpk=gcmWJ2NoBrQZTHwNW0ilDDeuOD3sYtdyuhHBX0e3TpGBT8yGSZGeX%2BeKUUHNtU9XBRhU%2F6VT9UBjFAxdcE%2BNYxU%2F9Qgl3JRLFc7RJQ%3D%3D&dpm=cenc-aes-ctr&l=202306171820435AC9F53D9F1731BD5F77&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNjk4MzEwNzIwMTEyNjA3MzM1MCJ9"
        />
        <Video 
          likes={10}
          messages={42}
          shares={4}

          name="jgluciano"
          description="🥰💍"
          music="som original - jgluciano"

          url="https://webapp-va.tiktok.com/6ecd19ef250069d2fe5a3515cdde87ec/648e6029/tos-useast2a-ve-0068c002/os7cJQjonQWuTBdxQDb2AZg8Nek1HkBErNsRfi?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=2182&bt=1091&cs=0&ds=3&ft=Ap6JtBiTq8Zmo88cWc_vj~sOPAhLrus&mime_type=video_mp4&qs=0&rc=NXZpTGRTaFBnKXVmZXpud2xAKWU7Z2gzO2g7OTc0OTM5PGRnKXVnb3N4OnVxcmYzM2o3PHl5U2xrdmlxRDpqYmwrYitsaHFgNDAuXzQxXzReMC1gNS80YDpjLWwtMzM0YDVnZS0tMTEtLTo%3D&l=202306171938185DDDEDBC40B261C43751&btag=200080000&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNjk4MzEwNzIwMTEyNjA3MzM1MCJ9"
        />
      </div>
    </div>
  );
}

export default App;
