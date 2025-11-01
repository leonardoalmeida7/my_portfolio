import React, { useCallback, useState, useMemo } from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { personalInfo, contactInfo } from "../../data/portfolio";
import { useForm } from "../../hooks/useForm";
import { FORM_CONFIG } from "../../constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { copyToClipboard } from "../../utils";
import "./Contact.css";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  // Memoizar configuração de animação
  const scrollConfig = useMemo(
    () => ({
      fromVars: { opacity: 0, y: 50 },
      toVars: { opacity: 1, y: 0 },
    }),
    []
  );

  useScrollAnimation(".contain-contact", scrollConfig);

  // Memoizar as regras de validação para evitar re-criação
  const validationRules = useMemo(
    () => ({
      name: {
        required: true,
        minLength: 2,
        requiredMessage: "Nome é obrigatório",
        minLengthMessage: "Nome deve ter pelo menos 2 caracteres",
      },
      email: {
        required: true,
        pattern: FORM_CONFIG.emailRegex,
        requiredMessage: "Email é obrigatório",
        patternMessage: "Email deve ter um formato válido",
      },
      message: {
        required: true,
        minLength: FORM_CONFIG.minMessageLength,
        maxLength: FORM_CONFIG.maxMessageLength,
        requiredMessage: "Mensagem é obrigatória",
        minLengthMessage: "Mensagem deve ter pelo menos 10 caracteres",
      },
    }),
    []
  );

  const { values, errors, isSubmitting, setValue, handleSubmit, reset } =
    useForm({ name: "", email: "", message: "" }, validationRules);

  const onSubmit = useCallback(
    async (formData) => {
      try {
        setSubmitStatus({ type: "", message: "" });

        const response = await fetch(
          "https://api-portfolio-moc8.onrender.com/send",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const result = await response.json();
        setSubmitStatus({
          type: "success",
          message:
            "Mensagem enviada com sucesso! Entrarei em contato em breve.",
        });
        reset(); // Limpar formulário após sucesso
      } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
        setSubmitStatus({
          type: "error",
          message:
            "Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.",
        });
      }
    },
    [reset]
  );

  const handleCopyEmail = useCallback(async () => {
    const success = await copyToClipboard(personalInfo.email);
    if (success) {
      setSubmitStatus({
        type: "info",
        message: "Email copiado para a área de transferência!",
      });
      setTimeout(() => setSubmitStatus({ type: "", message: "" }), 3000);
    }
  }, []);

  // Handlers memoizados para os inputs
  const handleNameChange = useCallback(
    (e) => {
      setValue("name", e.target.value);
    },
    [setValue]
  );

  const handleEmailChange = useCallback(
    (e) => {
      setValue("email", e.target.value);
    },
    [setValue]
  );

  const handleMessageChange = useCallback(
    (e) => {
      setValue("message", e.target.value);
    },
    [setValue]
  );

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleSubmit(onSubmit);
    },
    [handleSubmit, onSubmit]
  );

  return (
    <section className="contain-contact" id="contact">
      <div className="title">
        <h1 className="text-effect">{contactInfo.title}</h1>
      </div>
      <div className="details">
        <h2>{contactInfo.subtitle}</h2>
        <p>{contactInfo.description}</p>
        <div className="boxs-contact">
          <div className="box-contact" onClick={handleCopyEmail}>
            <MdOutlineEmail className="icon" id="icon-email" />
            <div className="infos">
              <span className="title">Email</span>
              <span className="info">{personalInfo.email}</span>
            </div>
          </div>
          <div className="box-contact">
            <LuPhone className="icon" />
            <div className="infos">
              <span className="title">Telefone</span>
              <span className="info">{personalInfo.phone}</span>
            </div>
          </div>
        </div>
        <div className="links-social">
          <div
            className="btn-link"
            onClick={() => window.open(personalInfo.github, "_blank")}
          >
            <FiGithub className="icon" />
          </div>
          <div
            className="btn-link"
            onClick={() => window.open(personalInfo.linkedin, "_blank")}
          >
            <FiLinkedin className="icon" />
          </div>
        </div>
      </div>
      <div className="form-box">
        {submitStatus.message && (
          <div className={`form-status form-status--${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="info-client">
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome completo"
                value={values.name}
                onChange={handleNameChange}
              />
              {errors.name && (
                <span style={{ color: "red", fontSize: "0.8rem" }}>
                  {errors.name}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="seu@email.com"
                value={values.email}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <span style={{ color: "red", fontSize: "0.8rem" }}>
                  {errors.email}
                </span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              placeholder="Sobre o que você gostaria de falar?"
              rows={6}
              value={values.message}
              onChange={handleMessageChange}
            />
            {errors.message && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.message}
              </span>
            )}
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default React.memo(Contact);
