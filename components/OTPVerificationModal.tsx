'use client';

import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface OTPVerificationModalProps {
  isOpen: boolean;
  mobile: string;
  onVerify: (otp: string) => Promise<boolean>;
  onClose: () => void;
  onCancel?: () => void;
}

export default function OTPVerificationModal({ isOpen, mobile, onVerify, onClose, onCancel }: OTPVerificationModalProps) {
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);
  const [isResending, setIsResending] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleVerify = useCallback(async () => {
    if (otp.length !== 6) return;
    
    setIsVerifying(true);
    setError('');
    
      try {
        const success = await onVerify(otp);
        if (success) {
          setIsClosing(true);
          setTimeout(() => onClose(), 100);
        } else {
          setError('Invalid OTP. Please try again.');
          setOtp('');
        }
      } catch (err) {
        setError('Verification failed. Please try again.');
        setOtp('');
      } finally {
        setIsVerifying(false);
      }
  }, [otp, onVerify, onClose]);

  useEffect(() => {
    if (otp.length === 6) {
      handleVerify();
    }
  }, [otp, handleVerify]);

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        const input = document.getElementById('otp-input') as HTMLInputElement;
        if (input) {
          input.focus();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleResend = async () => {
    if (resendCooldown > 0 || isResending) return;
    
    setIsResending(true);
    setError('');
    
    try {
      let fullMobile = mobile;
      if (typeof window !== 'undefined') {
        const mobileInput = document.getElementById('mmobile') as HTMLInputElement;
        if (mobileInput && (window as any).intlTelInput) {
          const iti = (window as any).intlTelInput.getInstance(mobileInput);
          if (iti) {
            const fullNumber = iti.getNumber();
            if (fullNumber) {
              fullMobile = fullNumber;
            }
          }
        }
      }

      const response = await fetch('/api/otp/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile: fullMobile }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setResendCooldown(30);
        setOtp('');
      } else {
        setError(result.error || 'Failed to resend OTP');
      }
    } catch (err) {
      setError('Failed to resend OTP. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 6) {
      setOtp(value);
      setError('');
    }
  };

  if (!isOpen || isClosing) return null;

  if (typeof window === 'undefined') return null;

  const modalContent = (
    <>
        <div className="modal-backdrop fade show"></div>
        <div className="modal fade show" style={{ display: 'block', zIndex: 1055 }} tabIndex={-1} aria-labelledby="otpModalLabel" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-body p-4">
                <button type="button" className="close" onClick={onCancel || onClose} aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
                
                <div className="text-center mb-4">
                <div className="modal-logo mb-3">
                    <img src="/images/logo.svg" alt="Suncity Projects" />
                </div>
                <h5 className="modal-title">Verify Your Mobile Number</h5>
                <p className="text-muted small">
                    We've sent a 6-digit OTP to <strong>{mobile}</strong>
                </p>
                </div>

                {error && (
                <div className="alert alert-danger small py-2 rounded-0" role="alert">
                    {error}
                </div>
                )}

                <div className="mb-4">
                <div className="form-group">
                    <input
                    type="text"
                    id="otp-input"
                    className="form-control text-center border-primary"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={handleOtpChange}
                    maxLength={6}
                    disabled={isVerifying}
                    style={{ fontSize: '1.5rem', letterSpacing: '0.5rem' }}
                    autoComplete="off"
                    autoFocus
                    onFocus={(e) => {
                        e.target.select();
                    }}
                    onKeyDown={(e) => {
                    }}
                    />
                </div>
                </div>

                <div className="text-center">
                <button
                    type="button"
                    className="btn btn-link text-primary small"
                    onClick={handleResend}
                    disabled={resendCooldown > 0 || isResending}
                >
                    {isResending ? 'Sending...' : resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend OTP'}
                </button>
                </div>

                <div className="text-center mt-3">
                <small className="text-muted">
                    Didn't receive the OTP? Check your SMS or try resending.
                </small>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  );

  return createPortal(modalContent, document.body);
}
