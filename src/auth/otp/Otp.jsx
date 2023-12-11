import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import library axios untuk melakukan permintaan HTTP
import './Otp.css';

const OTPPage = () => {
  const [otp, setOTP] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const [resendTimer, setResendTimer] = useState(60); // Inisialisasi timer dengan 60 detik
  const [otpValid, setOTPValid] = useState(false);
  const [userEmail, setUserEmail] = useState(''); // Tambahkan state untuk menyimpan email

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://easy-class-407401.et.r.appspot.com/api/auth/otp', {
        otp: otp.join(''),
      });

      if (response.data && response.data.success) {
        setOTPValid(true);
        // Lanjutkan ke halaman berikutnya atau tindakan lain yang diinginkan
        // Misalnya, pindah ke halaman lain setelah 2 detik
        setTimeout(() => {
          // TODO: Ganti dengan logika navigasi sesuai kebutuhan
          // history.push('/halaman-berikutnya');
          alert('OTP berhasil diverifikasi');
        }, 2000);
      } else {
        setError('Maaf, kode OTP salah!');
        setOTPValid(false);
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
      setError('Terjadi kesalahan saat memverifikasi OTP.');
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
          <Link to="/auth/register">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </span>
        <h4>Masukkan OTP</h4>
        <p id="p1">Ketik 6 digit kode yang dikirimkan ke {userEmail}</p>
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
