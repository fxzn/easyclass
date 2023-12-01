import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Otp.css';

const OTPPage = () => {
  const [otp, setOTP] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const [resendTimer, setResendTimer] = useState(60); // Inisialisasi timer dengan 60 detik
  const [otpValid, setOTPValid] = useState(false);

  const handleOTPChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      setError('');
      setOTPValid(false); // Reset status valid saat ada perubahan OTP
    } else {
      setError('Harap masukkan angka.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Tambahkan logika untuk memeriksa kecocokan OTP dengan yang diharapkan
    const expectedOTP = '123456';

    if (otp.join('') === expectedOTP) {
      setOTPValid(true);
      // TODO: Tambahkan logika untuk melanjutkan ke halaman berikutnya
    } else {
      setError('Maaf, kode OTP salah!');
      setOTPValid(false);
    }
  };

  useEffect(() => {
    // Pengaturan interval untuk mengurangi timer setiap detik
    const intervalId = setInterval(() => {
      setResendTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Membersihkan interval saat komponen dibongkar
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="otp">
      <div className="otp-container">
        <span className="arrow">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </span>
        <h4>Masukkan OTP</h4>
        <p id="p1">Ketik 6 digit kode yang dikirimkan ke J*****@gmail.com</p>
        <form onSubmit={handleSubmit}>
          <div className="otp-input-container">
            {otp.map((digit, index) => (
              <input
                className="input"
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleOTPChange(e, index)}
                maxLength="1"
              />
            ))}
          </div>
          <p>Kirim Ulang OTP dalam {resendTimer} detik</p>
          <div className="submit-button-container">
            <button className="tombol" type="submit">
              Simpan
            </button>
            <div className="atention">
              {otpValid && (
                <p className="success-message">Registrasi berhasil</p>
              )}
              {error && !otpValid && <p className="error-message">{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPPage;
