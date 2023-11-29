import React, { useState, useEffect } from 'react';
import './Otp.css'; // Pastikan mengganti dengan nama file yang benar

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
      setError('OTP tidak valid. Silakan coba lagi.');
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
    <div className="otp-container">
      <h2>Masukkan Kode OTP</h2>
      <p>Ketik 6 digit kode yang dikirimkan ke J*****@gmail.com</p>
      <form onSubmit={handleSubmit}>
        <div className="otp-input-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleOTPChange(e, index)}
              maxLength="1"
            />
          ))}
        </div>
        <div className="submit-button-container">
          <button type="submit">Verifikasi OTP</button>
        </div>
      </form>
      <p>Kirim Ulang OTP dalam {resendTimer} detik</p>
      {otpValid && <p className="success-message">OTP Valid! Anda dapat melanjutkan.</p>}
      {error && !otpValid && <p className="error-message">{error}</p>}
    </div>
  );
};

export default OTPPage;
