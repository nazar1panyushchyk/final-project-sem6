import "../../../css/auth.css";
import google from "../../../../public/img/google.png";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
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
              <label>Пароль</label>
              <TextField
                type={showPassword ? "text" : "password"}
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
            </form>
            <div className="auth-buttons">
              <button>УВІЙТИ</button>
              <button onClick={() => navigate("/register")}>РЕЄСТРАЦІЯ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
