import React from 'react';
import styled from 'styled-components';

const Faqform = ({ formData, setFormData, handleChange, handleSubmit, loading }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <h3 className="descr">Ask a different question</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <input
              required
              autoComplete="off"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input">
            <input
              required
              autoComplete="off"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
            />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="input">
            <input
              required
              autoComplete="off"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              id="subject"
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="input">
            <textarea
              required
              cols={30}
              rows={2}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <label htmlFor="message">Your Question</label>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? (
              <span className="loader border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin"></span>
            ) : (
              'Submit Question →'
            )}
          </button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    max-width: 100%;
    min-width:320px;
    height: auto;
    min-height: 400px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 8px;
    border: 1px solidrgb(255, 255, 255);
    background: #036e8d;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 0 2rem;
  }

  .container .descr {
    font-size: 18px;
    font-weight: 500;
    color: #e8e8e8;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .input, textarea {
    margin: 0.8em 0;
    width: 100%;
    position: relative;
  }

  .input input, textarea {
    font-size: 14px;
    padding: 0.6em;
    outline: none;
    color: #e8e8e8;
    border: none;
    border-bottom: 2px solid #e8e8e8;
    background: transparent;
    border-radius: none;
    width: 100%;
  }

  .input label {
    font-size: 14px;
    position: absolute;
    left: 0;
    color: #e8e8e8;
    padding: 0.6em;
    margin-left: 0.1em;
    pointer-events: none;
    transition: all 0.5s ease;
    text-transform: uppercase;
  }

  .input :is(input:focus, input:valid)~label {
    transform: translateY(-50%) scale(0.9);
    margin: 0em;
    padding: 0.3em;
    background: transparent;
  }

  .input textarea:focus ~ label,
  .input textarea:valid ~ label {
    transform: translateY(-50%) scale(0.9);
    margin: 0em;
    padding: 0.3em;
    background: transparent;
  }

  .form button {
    color: #e8e8e8;
    font-size: 14px;
    align-self: flex-end;
    padding: 0.5em 1em;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
    background: transparent;
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
  }

  .form button:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e8e8e8;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .form button:hover:before {
    opacity: 0.2;
  }

  .form button:hover {
    transform: translateX(3px);
    color: #ffd278;
  }

  .form button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .loader {
    display: inline-block;
  }
`;

export default Faqform;