import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PostUsername.css";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function ResetPaswd() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setNewConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!token) {
        console.error("Token not found in the URL.");
        return;
      }

      const data = {
        newPassword,
        confirmPassword,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/resetPassword?token=${token}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Full Response:", response);

      if (response.status === 200) {
        console.log("Password changed successfully!");
        navigate("/auth/login", { replace: true });
      } else {
        console.error("Unexpected response status:", response.status);
        toast.error("Unexpected response status");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response?.data.message || "Unknown error");
        toast.error(error.response?.data.message || "Unknown error");
      } else {
        console.error("General Error:", error.message || "Unknown error");
        toast.error(error.message || "Unknown error");
      }
    }
  };

  return (
    <>
      <main>
        <div className="box-forgot">
          <div className="inner-forgot">
            <div className="forms-username">
              <Form autoComplete="off" className="form" onSubmit={handleSubmit}>
                <div className="icon-username">
                  <FontAwesomeIcon icon={faCircleUser} />
                </div>
                <div className="heading-username">
                  <h2>Trouble logging in ?</h2>
                  <p>Enter your new password, and we'll reset your account.</p>
                </div>
                <div className="actual-form">
                  <div className="input-password">
                    <input
                      type="password"
                      className="input-field"
                      autoComplete="off"
                      required
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="input-password">
                    <input
                      type="password"
                      className="input-field"
                      autoComplete="off"
                      required
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setNewConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="sign-btn">
                    Update
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ResetPaswd;
