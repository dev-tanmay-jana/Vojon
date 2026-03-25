import React, { useState, useEffect, useRef } from 'react';
import { RxCross2 } from "react-icons/rx";
 import { toast } from 'react-toastify';
const Login = ({ setShowLogin }) => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timer, setTimer] = useState(0);
  const [verified, setVerified] = useState(false);

  const inputRefs = useRef([]);

  // ⏱ Timer
  useEffect(() => {
    let interval;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  // 📲 Send OTP
  const handleSendOtp = () => {
    if (mobile.length === 10) {
      setOtpSent(true);
      setTimer(120);
      toast.success('OTP sent successfully!');
    } else {
      toast.error('Enter valid mobile number');
    }
  };

  // 🔢 Handle OTP Input
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // ⌫ Backspace handling
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // ✅ Verify OTP
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 6) {
      setVerified(true);
    //   toast.success('OTP verified successfully!');
      setShowLogin(false);
        toast.success('OTP verified successfully!');
    } else {
      toast.error('Enter valid OTP');
    }
  };

  // ⏱ Format Timer
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* 🔥 Background Blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={() => setShowLogin(false)}
      ></div>

      {/* 🔥 Login Box */}
      <div className="relative w-full max-w-sm bg-white p-6 rounded-xl shadow-lg z-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Login</h2>
          <RxCross2
            className="text-gray-500 cursor-pointer text-xl"
            onClick={() => {
              setShowLogin(false);
            //   console.log('Login closed');
            }}
          />
        </div>

        {/* Mobile Input */}
        <label className="block mb-2 text-gray-700">Mobile Number</label>

        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter Mobile"
          maxLength={10}
          className="w-full border p-2 mb-4 rounded focus:outline-none"
        />

        {/* OTP Section */}
        {otpSent && (
          <>
            <label className="block mb-2 text-gray-700">Enter OTP</label>

            <div className="flex justify-between mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  maxLength={1}
                  className="w-10 h-10 text-center border rounded"
                />
              ))}
            </div>

            <div className="text-center mb-4">
              <p>Time left: {formatTime(timer)}</p>

              <p className="text-sm text-gray-600 mt-2">
                Didn't receive OTP?{" "}
                <span
                  onClick={handleSendOtp}
                  className="text-blue-500 cursor-pointer"
                >
                  Resend
                </span>
              </p>
            </div>
          </>
        )}

        {/* Button */}
        <button
          onClick={otpSent ? handleVerifyOtp : handleSendOtp}
          className="w-full bg-orange-500 text-white p-2 rounded-lg"
        >
          {otpSent ? "Verify OTP" : "Send OTP"}
        </button>
      </div>
    </div>
  );
};

export default Login;