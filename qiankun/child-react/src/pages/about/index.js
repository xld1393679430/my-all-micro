import style from "./index.module.css";

const About = () => {
  return (
    <div>
      <p className={style.title}>About页面</p>
      <p className={style['title-tips']}>我的title的提示内容</p>
    </div>
  );
};

export default About;
