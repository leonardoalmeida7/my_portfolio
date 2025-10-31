import React from "react";
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
  useScrollAnimation(".contain-contact", {
    fromVars: { opacity: 0, y: 50 },
    toVars: { opacity: 1, y: 0 },
  });

  const { values, errors, isSubmitting, setValue, handleSubmit } = useForm(
    { name: "", email: "", message: "" },
    {
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
    }
  );

  const onSubmit = async (formData) => {
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso!");
  };

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(personalInfo.email);
    if (success) {
      alert("Email copiado para a área de transferência!");
    }
  };

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit);
          }}
        >
          <div className="info-client">
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome completo"
                value={values.name}
                onChange={(e) => setValue("name", e.target.value)}
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
                onChange={(e) => setValue("email", e.target.value)}
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
              onChange={(e) => setValue("message", e.target.value)}
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

export default Contact;
