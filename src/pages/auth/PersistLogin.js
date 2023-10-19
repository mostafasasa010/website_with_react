import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { User } from "../../context/Context";
import axios from "axios";
import Loading from "../../components/Loading";
import Cookies from "universal-cookie";

function PersistLogin() {
  const [loading, setLoading] = useState(true);
  const user = useContext(User);
  const token = user.auth.token;
  const cookie = new Cookies();
  const getToken = cookie.get("Bearer");
  useEffect(() => {
    async function refresh() {
      try {
        await axios
          .post("http://127.0.0.1:8000/api/refresh", null, {
            headers: {
              Authorization: "Bearer " + getToken,
            },
          })
          .then((data) => {
            cookie.set("Bearer", data.data.token);
            user.setAuth(() => {
              return { userData: data.data.user, token: data.data.token };
            });
          });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    !token ? refresh() : setLoading(false);
  }, []);
  return loading ? <Loading /> : <Outlet />;
}

export default PersistLogin;
