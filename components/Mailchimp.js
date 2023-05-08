import React, {useState, useEffect} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from '../styles/contact.module.css'
import Link from 'next/link'
import validator from 'validator'

import i18n from 'i18next'
import translaionEs from "../locales/es.json"
import translaionFr from "../locales/fr.json"
import translaionEn from "../locales/en.json"
import {initReactI18next, useTranslation} from "react-i18next"

i18n
.use(initReactI18next)
.init({
  resources : {
    es : {translation: translaionEs},
    fr : {translation : translaionFr},
    en : {translation : translaionEn}
  },
  lng: "en",
  fallbackLng : "en",
  interpolation : {escapeValue : false}
})

const CustomForm = ({ status, message, onValidated }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [note, setNote] = useState('');

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
      }
      const { t } = useTranslation();

    const validateEmail = (event) => {
        setEmail(event.target.value);
        if (!validator.isEmail(email)) {
            setEmailError("Please enter a valid Email!");
        } else {
            setEmailError(null);
        }
    };

    useEffect(() => {
        if(status === "success") clearFields();
        }, [status])

    const clearFields = () => {
        setName('');
        setEmail('');
        setNote('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        name &&
        email &&
        onValidated({
            EMAIL: email,
            MERGE1: name,
            MERGE2: note,
        });
    }

    return (
        
        <form 
            className={styles.form}
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className={styles.headingMd}>
                {status === "success" ? t('success') : t('contactUs')}
            </h3>

            {status === "sending" && (
                <div className={styles.blink}>
                {t('sending')}
                </div>
            )}
            {status === "error" && (
                <div 
                className={styles.error}
                dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                className={styles.success}
                dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status !== "success" ? (
                <div className={styles.form_fields}>
                    <label className={styles.label}>
                        {t('name')}
                    <input
                        label="Name"
                        className={styles.input}
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        value={name}
                        placeholder="Jane Doe"                    
                    />
                    </label>
                    <label className={styles.label}>
                        {t('email')}
                    <input
                        label="Email"
                        className={styles.input}
                        onChange={(event) => validateEmail(event)}
                        type="email"
                        value={email}
                        placeholder="jdoe@gmail.com"
                    />
                    {email.length > 0 && emailError && <span style={{color: 'red'}}>{emailError}</span>}
                    </label>
                    <label className={styles.label}>
                        {t('note')}
                    <textarea
                        label="Note"
                        className={styles.textarea}
                        onChange={(event) => setNote(event.target.value)}
                        value={note}
                        placeholder={t('writeYourNote')}
                    />
                    </label>
                </div>
            ) : null}

            {status === 'success' ? 
                <Link href="/" className={styles.button}>
                    {t('close')}
                </Link> : 
                <input
                    className={styles.button}
                    label="subscribe"
                    type="submit"
                    formvalues={[name, email, note]}
                    value={t('subscribe')}
                />
            }
            <div className="language-toggle">
            <select name = "language" onChange={changeLanguage}>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
          </div>
        </form>
        );
};

const MailchimpFormContainer = () => {
    const postUrl = `https://njit.us13.list-manage.com/subscribe/post?u=58e42dc29aadbaa66c7f6fb71&id=48004f334d`;
    return (
        <div>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;