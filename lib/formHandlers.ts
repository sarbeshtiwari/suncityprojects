export interface FormSubmissionResult {
  success: boolean;
  message: string;
  data?: any;
}

export async function submitContactForm(formData: FormData): Promise<FormSubmissionResult> {
  try {
    const response = await fetch('/api/forms/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        enquiryType: formData.get('con_enquiry_type'),
        name: formData.get('con_name'),
        email: formData.get('con_email'),
        mobile: formData.get('con_isd'),
        project: formData.get('con_project'),
        message: formData.get('con_message')
      })
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
        data: result
      };
    } else {
      return {
        success: false,
        message: result.error || 'Something went wrong. Please try again.'
      };
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
}

export async function submitCareerForm(formData: FormData): Promise<FormSubmissionResult> {
  try {
    // Handle file uploads
    const resumeFile = formData.get('resume') as File;
    const coverLetterFile = formData.get('coverLetter') as File;
    
    let resumeFileName = '';
    let coverLetterFileName = '';

    // Upload resume if provided
    if (resumeFile && resumeFile.size > 0) {
      const resumeFormData = new FormData();
      resumeFormData.append('file', resumeFile);
      const resumeResponse = await fetch('/api/upload', {
        method: 'POST',
        body: resumeFormData
      });
      if (resumeResponse.ok) {
        const resumeResult = await resumeResponse.json();
        resumeFileName = resumeResult.filename;
      }
    }

    // Upload cover letter if provided
    if (coverLetterFile && coverLetterFile.size > 0) {
      const coverLetterFormData = new FormData();
      coverLetterFormData.append('file', coverLetterFile);
      const coverLetterResponse = await fetch('/api/upload', {
        method: 'POST',
        body: coverLetterFormData
      });
      if (coverLetterResponse.ok) {
        const coverLetterResult = await coverLetterResponse.json();
        coverLetterFileName = coverLetterResult.filename;
      }
    }

    const response = await fetch('/api/forms/career', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.get('crfirstname'),
        lastName: formData.get('crlastname'),
        mobile: formData.get('crmobile'),
        email: formData.get('cremail'),
        experience: formData.get('experience'),
        jobPosition: formData.get('jobPosition'),
        resume: resumeFileName,
        coverLetter: coverLetterFileName
      })
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Thank you for your application. We will review it and get back to you soon!',
        data: result
      };
    } else {
      return {
        success: false,
        message: result.error || 'Something went wrong. Please try again.'
      };
    }
  } catch (error) {
    console.error('Career form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
}

export async function submitChannelPartnerForm(formData: FormData): Promise<FormSubmissionResult> {
  try {
    // Handle file uploads
    const reraCertificateFile = formData.get('reraCertificate') as File;
    let reraCertificateFileName = '';

    // Upload RERA certificate if provided
    if (reraCertificateFile && reraCertificateFile.size > 0) {
      const reraFormData = new FormData();
      reraFormData.append('file', reraCertificateFile);
      const reraResponse = await fetch('/api/upload', {
        method: 'POST',
        body: reraFormData
      });
      if (reraResponse.ok) {
        const reraResult = await reraResponse.json();
        reraCertificateFileName = reraResult.filename;
      } else {
        console.error('RERA certificate upload failed:', await reraResponse.text());
      }
    }

    const response = await fetch('/api/forms/channel-partner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('con_name'),
        email: formData.get('con_email'),
        mobile: formData.get('con_isd'),
        companyName: formData.get('companyName'),
        companyAddress: formData.get('companyAddress'),
        teamSize: formData.get('teamSize'),
        reraRegNumber: formData.get('reraRegNumber'),
        reraCertificate: reraCertificateFileName,
        locationOfInterest: formData.get('rebuyers'),
        otherLocation: formData.get('otherLocation'),
        message: formData.get('con_message')
      })
    });

    const result = await response.json();
    
    if (response.ok && (result.message || result.id)) {
      return {
        success: true,
        message: result.message || 'Thank you for your interest in becoming a channel partner. We will review your application and get back to you soon!',
        data: result
      };
    } else {
      return {
        success: false,
        message: result.error || 'Something went wrong. Please try again.'
      };
    }
  } catch (error) {
    console.error('Channel partner form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
}

export async function submitGrievanceForm(formData: FormData): Promise<FormSubmissionResult> {
  try {
    const response = await fetch('/api/forms/grievance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('con_name'),
        email: formData.get('con_email'),
        mobile: formData.get('con_isd'),
        projectName: formData.get('rebuyers'),
        flatNumber: formData.get('flatNumber'),
        message: formData.get('con_message'),
        image: formData.get('image')
      })
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Thank you for submitting your grievance. We will address it promptly and get back to you soon!',
        data: result
      };
    } else {
      return {
        success: false,
        message: result.error || 'Something went wrong. Please try again.'
      };
    }
  } catch (error) {
    console.error('Grievance form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
}

export async function submitProjectEnquiryForm(formData: FormData): Promise<FormSubmissionResult> {
  try {
    // Filter out empty values
    const enquiryType = formData.get('con_enquiry_type') as string;
    const visitDate = formData.get('mdate') as string;
    const pageName = formData.get('mpagename') as string;

    const response = await fetch('/api/forms/project-enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('mname'),
        email: formData.get('memail'),
        mobile: formData.get('mmobile'),
        enquiryType: enquiryType && enquiryType.trim() !== '' ? enquiryType : undefined,
        visitDate: visitDate && visitDate.trim() !== '' ? visitDate : undefined,
        source: formData.get('msource'),
        pageName: pageName && pageName.trim() !== '' ? pageName : undefined,
        keepUpdated: formData.get('update') === 'on'
      })
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Thank you for your interest. We will get back to you soon!',
        data: result
      };
    } else {
      return {
        success: false,
        message: result.error || 'Something went wrong. Please try again.'
      };
    }
  } catch (error) {
    console.error('Project enquiry form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
}
