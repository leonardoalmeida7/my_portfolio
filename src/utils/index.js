// Utilitários para manipulação de classes CSS
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Utilitários para scroll suave
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.offsetTop - offset;
  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  });
};

// Utilitário para formatação de texto
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

// Utilitário para debounce
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Utilitário para throttle
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Utilitário para validação de email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Utilitário para formatação de telefone
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `+55 (${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

// Utilitário para copiar texto para clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Erro ao copiar texto:", err);
    return false;
  }
};

// Utilitário para verificar se está em dispositivo móvel
export const isMobile = () => {
  return window.innerWidth <= 768;
};

// Utilitário para delay/sleep
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
