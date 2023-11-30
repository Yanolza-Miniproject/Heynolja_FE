import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useAuthAlert = () => {
  const nvaigate = useNavigate();

  const alert = () => {
    Swal.fire({
      title: "인증이 만료되었습니다.",
      text: "다시 로그인하시겠습니까?",
      padding: "50px",
      confirmButtonColor: "#FF5100",
      confirmButtonText: "로그인",
      showDenyButton: true,
      denyButtonText: "회원가입",
      denyButtonColor: "#001650",
    }).then((result) => {
      if (result.isConfirmed) {
        nvaigate("/signin");
      } else if (result.isDenied) {
        nvaigate("/signup");
      }
    });
  };

  return alert;
};
