import Header from "./Header";
import "../../css/Home.css";
import Model from "../Auth/Model";
import Login from "../Auth/Login";
import Signin from "../Auth/Signin";
import Container from "../Auth/Container";
import { useState } from "react";
const Home = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isSign, setIsSign] = useState(false);
  const [isContaier, setisContaier] = useState(true);

  const openLogin = () => {
    setIsSign(false);
    setIsLogin(true);
  };

  const openSign = () => {
    setIsLogin(false);
    setIsSign(true);
  };
  return (
    <div>
      <Header setIsModelOpen={setIsModelOpen} />

      <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}></Model>
    </div>
  );
};

export default Home;
