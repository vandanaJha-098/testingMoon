import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Stack, Paper, Snackbar, Alert, InputAdornment, IconButton
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

const FEEDBACK_API = '/api/send-feedback'; // <-- Replace with your backend endpoint

function FeedbackPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
    file: null,
  });
  const [fileName, setFileName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [snack, setSnack] = useState({ open: false, success: true, message: '' });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowed.includes(file.type)) {
        setSnack({ open: true, success: false, message: 'Only PDF or Word documents are allowed.' });
        return;
      }
      setForm((prev) => ({ ...prev, file }));
      setFileName(file.name);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Prepare form data
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    formData.append('comment', form.comment);
    if (form.file) formData.append('file', form.file);

    // Simulate API call (replace with real API call)
    try {
      // await fetch(FEEDBACK_API, { method: 'POST', body: formData });
      await new Promise((res) => setTimeout(res, 1200)); // Simulate delay
      setSnack({ open: true, success: true, message: 'Feedback sent successfully!' });
      setForm({ name: '', email: '', phone: '', comment: '', file: null });
      setFileName('');
    } catch (err) {
      setSnack({ open: true, success: false, message: 'Failed to send feedback. Try again.' });
    }
    setSubmitting(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(120deg, #f8fafc 0%, #e0eafc 100%)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `radial-gradient(circle at 20% 30%, rgba(138,0,55,0.09) 0%, transparent 60%), 
                       radial-gradient(circle at 80% 70%, rgba(99,3,3,0.08) 0%, transparent 60%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          px: { xs: 2, sm: 5 },
          py: { xs: 3, sm: 5 },
          borderRadius: 5,
          maxWidth: 480,
          width: '100%',
          backdropFilter: 'blur(12px)',
          background: 'rgba(255,255,255,0.60)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.19)',
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 2,
            letterSpacing: 2,
            color: '#8a0037',
            textShadow: '0 2px 12px rgba(138,0,55,0.07)',
          }}
        >
          Feedback Form
        </Typography>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Stack spacing={2}>
            <TextField
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              inputProps={{ pattern: "[0-9]{10,15}" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon color="success" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Comments"
              name="comment"
              value={form.comment}
              onChange={handleChange}
              multiline
              minRows={3}
              required
              InputProps={{
                sx: { background: 'rgba(255,255,255,0.85)' }
              }}
            />

            {/* File Upload */}
            <Box>
              <input
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                style={{ display: 'none' }}
                id="upload-file"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="upload-file">
                <Button
                  variant="outlined"
                  color="secondary"
                  component="span"
                  startIcon={<AttachFileIcon />}
                  sx={{
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: 'none',
                    px: 2,
                    background: 'linear-gradient(90deg, #8a0037 0%, #630303 100%)',
                    color: '#fff',
                    boxShadow: '0 2px 8px 0 #8a003750',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #630303 0%, #8a0037 100%)',
                      color: '#fff',
                    },
                  }}
                >
                  {fileName ? fileName : 'Attach PDF/DOC'}
                </Button>
              </label>
            </Box>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={submitting}
              sx={{
                borderRadius: 3,
                fontWeight: 700,
                fontSize: '1.1rem',
                background: 'linear-gradient(90deg, #8a0037 0%, #630303 100%)',
                color: '#fff',
                boxShadow: '0 2px 12px 0 #8a003740',
                textTransform: 'none',
                py: 1.2,
                mt: 1,
                '&:hover': {
                  background: 'linear-gradient(90deg, #630303 0%, #8a0037 100%)',
                  color: '#fff',
                  transform: 'scale(1.04)',
                },
              }}
              fullWidth
            >
              {submitting ? 'Sending...' : 'Send Feedback'}
            </Button>
          </Stack>
        </form>
      </Paper>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnack({ ...snack, open: false })}
          severity={snack.success ? 'success' : 'error'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snack.message}
        </Alert>
      </Snackbar>

      {/* Footer */}
      <Box
        sx={{
          width: '100vw',
          mt: 8,
          py: 4,
          px: 0,
          background: 'linear-gradient(90deg, #2c003e 0%, #630303 100%)',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 500,
          fontSize: '1.1rem',
          letterSpacing: 1,
          zIndex: 10,
          boxShadow: '0 -2px 24px 0 rgba(99,3,3,0.15)',
          position: 'relative',
        }}
      >
        © 2025 Example Corp. All rights reserved.
      </Box>
    </Box>
  );
}

export default FeedbackPage;
