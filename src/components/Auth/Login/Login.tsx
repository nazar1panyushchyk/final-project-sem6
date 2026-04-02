import "../../../css/auth.css";
import google from "../../../../public/img/google.png";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { loginUserThunk } from "../../../redux/operations/authOperations";
import { clearAuthState } from "../../../redux/slice/authSlice";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const authError = useAppSelector((state) => state.auth.error);
  const authStatus = useAppSelector((state) => state.auth.status);
  const dispatch = useAppDispatch();
  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
    };

    if (!email.trim()) {
      newErrors.email = "це обов'язкове поле";
    }

    if (!password.trim()) {
      newErrors.password = "це обов'язкове поле";
    }

    return newErrors;
  };
  const handleLogin = () => {
    const newErrors = validateForm();
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");

    if (hasErrors) return;

    dispatch(loginUserThunk({ email, password }));
  };

  useEffect(() => {
    if (authStatus === "succeeded") {
      navigate("/expenses");
    }
  }, [authStatus, navigate]);

  useEffect(() => {
    dispatch(clearAuthState());
  }, [dispatch])
  return (
    <>
      <div className="auth-container">
        <div className="main-text">
          <h1 style={{ color: "#000000", fontSize: "102px" }}>InvestIQ</h1>
          <p style={{ color: "#52555F" }}>SMART FINANCE</p>
        </div>
        <div className="auth-form">
          <div className="auth">
            <p>
              Ви можете авторизуватися за допомогою
              <br />
              акаунта Google
            </p>
            <div className="button-google">
              <button className="google">
                <img
                  src={google}
                  alt="google"
                  style={{ width: "18px", height: "18px" }}
                />
                Google
              </button>
            </div>
            <p>
              Або увійти за допомогою ел. пошти та
              <br />
              паролю після реєстрації
            </p>
            <form>
              <label>Електронна пошта:</label>
              <TextField
                id="outlined-basic"
                label="your@email.com"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  width: 269,
                  height: 54,

                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
                    backgroundColor: "#f6f7fb",

                    "& fieldset": {
                      border: "none",
                    },

                    "&:hover fieldset": {
                      borderColor: "blue",
                    },
                  },
                }}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
              <label>Пароль</label>
              <TextField
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  width: 269,
                  height: 54,

                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",

                    "& fieldset": {
                      border: "none",
                    },

                    "&:hover fieldset": {
                      borderColor: "blue",
                    },
                  },
                }}
                slotProps={{
                  input: {
                    sx: {
                      backgroundColor: "#f6f7fb",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </form>
            {authError && <p>{authError}</p>}
            <div className="auth-buttons">
              <button onClick={handleLogin} type="button">
                УВІЙТИ
              </button>
              <button onClick={() => navigate("/register")} type="button">
                РЕЄСТРАЦІЯ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
