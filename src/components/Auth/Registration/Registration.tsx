import "../../../css/auth.css";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { registerUserThunk } from "../../../redux/operations/authOperations";
import { clearAuthState } from "../../../redux/slice/authSlice";

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const authError = useAppSelector((state) => state.auth.error);
  const authStatus = useAppSelector((state) => state.auth.status);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    if (!name.trim()) {
      newErrors.name = "це обов'язкове поле";
    } else if (name.trim().length < 2) {
      newErrors.name = "мінімум 2 символи";
    }

    if (!email.trim()) {
      newErrors.email = "це обов'язкове поле";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
       newErrors.email = "некоректна пошта";
    }

    if (!password.trim()) {
      newErrors.password = "це обов'язкове поле";
    } else if (password.length < 6) {
      newErrors.password = "мінімум 6 символів";
    }

    return newErrors;
  };
  const handleRegister = () => {
    const newErrors = validateForm();
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");

    if (hasErrors) return;

    dispatch(registerUserThunk({ name, email, password }));
  };

  useEffect(() => {
    if (authStatus === "succeeded") {
      navigate("/");
      dispatch(clearAuthState());
    }
  }, [authStatus, navigate, dispatch]);

  useEffect(() => {
    dispatch(clearAuthState());
  }, [dispatch]);
  return (
    <>
      <div className="auth-container">
        <div className="main-text">
          <h1 style={{ color: "#000000", fontSize: "102px" }}>InvestIQ</h1>
          <p style={{ color: "#52555F" }}>SMART FINANCE</p>
        </div>
        <div className="auth-form form-registration-container">
          <div className="auth registration">
            <p>
              Зареєструйтесь, ввівши своє ім'я, електронну
              <br />
              пошту та пароль
            </p>
            <form className="register-form">
              <label>Ім'я:</label>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                error={!!errors.name}
                helperText={errors.name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  width: 269,
                  "& .MuiOutlinedInput-root": {
                    height: 54,
                    borderRadius: "30px",
                    backgroundColor: "#f6f7fb",
                    "& fieldset": {
                      border: "none",
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "11px",
                    lineHeight: "12px",
                    marginTop: "4px",
                  },
                }}
              />
              <label>Електронна пошта:</label>
              <TextField
                id="outlined-basic"
                label="your@email.com"
                variant="outlined"
                value={email}
                error={!!errors.email}
                helperText={errors.email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  width: 269,
                  "& .MuiOutlinedInput-root": {
                    height: 54,
                    borderRadius: "30px",
                    backgroundColor: "#f6f7fb",
                    "& fieldset": {
                      border: "none",
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "11px",
                    lineHeight: "12px",
                    marginTop: "4px",
                  },
                }}
              />
              <label>Пароль</label>
              <TextField
                type={showPassword ? "text" : "password"}
                value={password}
                error={!!errors.password}
                helperText={errors.password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  width: 269,
                  "& .MuiOutlinedInput-root": {
                    height: 54,
                    borderRadius: "30px",
                    backgroundColor: "#f6f7fb",
                    "& fieldset": {
                      border: "none",
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "11px",
                    lineHeight: "12px",
                    marginTop: "4px",
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
            </form>
            <div className="auth-error-wrapper">
              {authError && (
                <p className="auth-error register-error">{authError}</p>
              )}
            </div>
            <div className="auth-buttons register-buttons">
              <button
                className="register-button"
                onClick={handleRegister}
                type="button"
              >
                РЕЄСТРАЦІЯ
              </button>
              <button onClick={() => navigate("/")} type="button">
                УВІЙТИ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
