'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    autoBackup: false,
    theme: 'light'
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="container py-4">

  {/* Header */}
  <div className="d-flex justify-content-between align-items-center mb-4">
    <div>
      <h1 className="h4 fw-bold text-dark mb-1">Settings</h1>
      <p className="text-muted mb-0">Manage your admin panel preferences</p>
    </div>
    <a
      href="/admin"
      className="btn btn-outline-secondary d-flex align-items-center"
    >
      ← Back to Dashboard
    </a>
  </div>

  <div className="row g-4">
    {/* General Settings */}
    <div className="col-12 col-lg-6">
      <div className="card shadow-sm border rounded">
        <div className="card-body">
          <h5 className="card-title h6 fw-semibold mb-3">General Settings</h5>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <label className="fw-medium small text-dark">Notifications</label>
              <p className="text-muted small mb-0">Receive notifications for new form submissions</p>
            </div>
            <div className="form-check form-switch m-0">
              <input
                className="form-check-input"
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleSettingChange('notifications', e.target.checked)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <label className="fw-medium small text-dark">Email Alerts</label>
              <p className="text-muted small mb-0">Send email notifications for important events</p>
            </div>
            <div className="form-check form-switch m-0">
              <input
                className="form-check-input"
                type="checkbox"
                checked={settings.emailAlerts}
                onChange={(e) => handleSettingChange('emailAlerts', e.target.checked)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <label className="fw-medium small text-dark">Auto Backup</label>
              <p className="text-muted small mb-0">Automatically backup form data daily</p>
            </div>
            <div className="form-check form-switch m-0">
              <input
                className="form-check-input"
                type="checkbox"
                checked={settings.autoBackup}
                onChange={(e) => handleSettingChange('autoBackup', e.target.checked)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Appearance Settings */}
    <div className="col-12 col-lg-6">
      <div className="card shadow-sm border rounded">
        <div className="card-body">
          <h5 className="card-title h6 fw-semibold mb-3">Appearance</h5>
          <div className="mb-3">
            <label className="form-label small fw-medium text-dark">Theme</label>
            <select
              className="form-select"
              value={settings.theme}
              onChange={(e) => handleSettingChange('theme', e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    {/* System Information */}
    <div className="col-12 col-lg-6">
      <div className="card shadow-sm border rounded">
        <div className="card-body">
          <h5 className="card-title h6 fw-semibold mb-3">System Information</h5>
          <div className="d-flex justify-content-between small mb-2">
            <span className="text-muted">Version</span>
            <span className="fw-semibold text-dark">1.0.0</span>
          </div>
          <div className="d-flex justify-content-between small mb-2">
            <span className="text-muted">Last Updated</span>
            <span className="fw-semibold text-dark">Today</span>
          </div>
          <div className="d-flex justify-content-between small mb-2">
            <span className="text-muted">Database Status</span>
            <span className="fw-semibold text-success">Connected</span>
          </div>
          <div className="d-flex justify-content-between small">
            <span className="text-muted">Total Forms</span>
            <span className="fw-semibold text-dark">0</span>
          </div>
        </div>
      </div>
    </div>

    {/* Actions */}
    <div className="col-12 col-lg-6">
      <div className="card shadow-sm border rounded">
        <div className="card-body">
          <h5 className="card-title h6 fw-semibold mb-3">Actions</h5>
          <div className="d-grid gap-2">
            <button className="btn btn-primary">Export Data</button>
            <button className="btn btn-success">Backup Now</button>
            <button className="btn btn-warning text-white">Clear Cache</button>
            <button className="btn btn-danger">Reset Settings</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Save Button */}
  <div className="d-flex justify-content-end mt-4">
    <button className="btn btn-primary">Save Settings</button>
  </div>
</div>

  );
}
