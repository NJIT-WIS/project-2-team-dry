import React, {useState, useEffect} from 'react';
import styles from '../styles/contact.module.css'
import Link from 'next/link'
import validator from 'validator'
import axios from 'axios'

const SubscribeContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [note, setNote] = useState('');
  const [state, setState] = useState('idle');
  const [errorMsg, setErrorMsg] = useState(null);

  const validateEmail = (event) => {
      setEmail(event.target.value);
      if (!validator.isEmail(email)) {
          setEmailError("Please enter a valid Email!");
      } else {
          setEmailError(null);
      }
  };
  useEffect(() => {
    if(state === "success") clearFields();
    }, [state])

  const clearFields = () => {
      setName('');
      setEmail('');
      setNote('');
  }

  const subscribe = async (e) => {
    e.preventDefault()
    setState('sending')

    try {
      const response = await axios.post('/api/subscribe', { email, name, note })
      setState('success')
    } catch (e) {
      setErrorMsg(e.response.data.error)
      setState('error')
    }
  }
  return (
    <form 
    className={styles.form}
    onSubmit={(e) => subscribe(e)}
    >
        <h3 className={styles.headingMd}>
            {state === "success" ? "Success!" : "Contact Us (Subscribe Container)"}
        </h3>

        {state === "sending" && (
            <div className={styles.blink}>
            <span>sending...</span>
            </div>
        )}
        {state === "error" && (
            <div 
            className={styles.error}
            >
            <span>{errorMsg}</span>
            </div>
        )}
        {state === "success" && (
            <div
            className={styles.success}
            >
            <span>Thank you for subscribing!</span>
            </div>
        )}
        {state !== "success" ? (
            <div className={styles.form_fields}>
                <label className={styles.label}>
                    Name:
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
                    Email:
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
                    Note:
                <textarea
                    label="Note"
                    className={styles.textarea}
                    onChange={(event) => setNote(event.target.value)}
                    value={note}
                    placeholder="Write your note..."
                />
                </label>
            </div>
        ) : null}

        {state === 'success' ? 
            <Link href="/" className={styles.button}>
                Close
            </Link> : 
            <input
                className={styles.button}
                label="subscribe"
                type="submit"
                formvalues={[name, email, note]}
            />
        }
    </form>
    );
};

export default SubscribeContainer;