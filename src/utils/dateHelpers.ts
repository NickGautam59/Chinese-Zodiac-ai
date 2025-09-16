export const validateDate = (dateString: string): { isValid: boolean; message: string } => {
  if (!dateString) {
    return { isValid: true, message: '' };
  }

  const date = new Date(dateString);
  const today = new Date();
  const minDate = new Date(1900, 0, 1);

  if (isNaN(date.getTime())) {
    return { isValid: false, message: 'Please enter a valid date' };
  }

  if (date > today) {
    return { isValid: false, message: 'Birth date cannot be in the future' };
  }

  if (date < minDate) {
    return { isValid: false, message: 'Please enter a date after 1900' };
  }

  return { isValid: true, message: '' };
};

export const formatDateForDisplay = (dateString: string): string => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
};

export const getAge = (birthDate: Date): number => {
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1;
  }
  
  return age;
};