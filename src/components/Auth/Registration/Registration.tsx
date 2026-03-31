import "../../../css/auth.css";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { registerUserThunk } from "../../../redux/operations/authOperations";

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
        }

        if (!email.trim()) {
            newErrors.email = "це обов'язкове поле";
        }

        if (!password.trim()) {
            newErrors.password = "це обов'язкове поле";
        }

        return newErrors;
    }
    const handleRegister = () => {
        const newErrors = validateForm();
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((err) => err !== "");

        if (hasErrors) return;

        dispatch(registerUserThunk({ name, email, password }));
    }

    useEffect(() => {
        if (authStatus === "succeeded") {
            navigate("/");
        }
    }, [authStatus, navigate]);
  return (
    <>
      <div className="auth-container">
        <div className="main-text">
          <h1 style={{ color: "#000000", fontSize: "102px" }}>InvestIQ</h1>
          <p style={{ color: "#52555F" }}>SMART FINANCE</p>
        </div>
        <div className="auth-form">
          <div className="auth registration">
            <p>
              Зареєструйтесь, ввівши своє ім'я, електронну
              <br />
              пошту та пароль
            </p>
            <form>
              <label>Ім'я:</label>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              {errors.name && <p>{errors.name}</p>}
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
              {errors.email && <p>{errors.email}</p>}
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
              {errors.password && <p>{errors.password}</p>}
            </form>
            <div className="auth-buttons">
              <button className="register-button" onClick={handleRegister}>
                РЕЄСТРАЦІЯ
              </button>
              <button onClick={() => navigate("/")}>УВІЙТИ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
