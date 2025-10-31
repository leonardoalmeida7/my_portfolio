import { useState } from "react";
import { FORM_CONFIG } from "../constants";

export const useForm = (initialValues, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    const rules = validationRules[name];
    if (!rules) return "";

    if (rules.required && !value.trim()) {
      return rules.requiredMessage || `${name} é obrigatório`;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return (
        rules.minLengthMessage ||
        `${name} deve ter pelo menos ${rules.minLength} caracteres`
      );
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return (
        rules.maxLengthMessage ||
        `${name} deve ter no máximo ${rules.maxLength} caracteres`
      );
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return rules.patternMessage || `${name} tem formato inválido`;
    }

    return "";
  };

  const setValue = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    // Validar campo em tempo real
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName] || "");
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (onSubmit) => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } catch (error) {
      console.error("Erro no envio do formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    setValue,
    handleSubmit,
    validateForm,
    reset,
  };
};
