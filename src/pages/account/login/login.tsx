import InputField from "../../../components/common/input/input";
import style from "./login.module.sass";

export default function Login() {
  return (
    <>
      <div className={style.custom_shape}></div>

      <div className={style.container_video}>
        <video
          src="https://assets.mixkit.co/videos/23450/23450-720.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className={style.container_login}>
        <div className={style.container_form}>
          <div className={style.text_container}>
            <h1>Welcome back! </h1>
          </div>
          <form action="">
            <InputField
              label="E-mail:"
              placeholder="Enter your email:"
              type="email"
              iconClass="fi fi-rs-envelope"
            />
            <InputField
              label="Password:"
              placeholder="Enter your password:"
              type="password"
              iconClass="fi fi-rs-lock"
            />
            <button>Continue</button>
          </form>
        </div>
      </div>
    </>
  );
}
