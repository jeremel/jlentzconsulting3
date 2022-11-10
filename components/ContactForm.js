import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

const Container = styled.section`
  min-height: 50vh;
  width: 100%;
  background: var(--lighterBlue);
  color: var(--darkerBlue);
  font-weight: 400;
  line-height: 1.25;
  padding: 2rem clamp(1rem, -0.5rem + 6.6667vw, 3rem);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 1fr));
  gap: clamp(0.5rem, -0.625rem + 5vw, 2rem);
  place-items: center;

  .formText {
    p {
      margin: 4rem 0;
      font-size: clamp(2rem, 0.5rem + 6.6667vw, 4rem);
    }
  }

  .formArea {
    form {
      display: flex;
      flex-direction: column;
      width: 75vw;
      background: var(--darkerBlue);
      color: var(--lighterBlue);
      padding: 0rem 0.75rem 1.05rem;
      border-radius: 0.4rem;

      @media (max-width: 700px) {
        width: 90vw;
      }

      label {
        margin: 0.5rem 0 1rem 0;
        font-size: clamp(1.5rem, 0.75rem + 3.3333vw, 2.5rem);
        font-weight: 300;

        &:first-of-type {
          margin: 0 0 0.5rem 0;
        }
      }

      input[type="text"],
      input[type="tel"] {
        width: 100%;
        min-height: 3.75rem;
        border: none;
        border-radius: 0.3rem;
        background: var(--white);
        color: var(--darkerBlue);
        font-size: clamp(1.5rem, 0.75rem + 3.3333vw, 2.5rem);
        padding: 0.25rem;
        font-weight: 300;
        transition: all 0.15s linear;

        &::placeholder {
          color: var(--darkerBlue);
          opacity: 0.4;
          font-weight: 300;
          margin: 2rem 0;
          padding-left: 0.25rem;
        }

        &:focus {
          padding: 0.25rem;
          font-size: 2rem;
        }
      }

      textarea {
        min-height: 20vh;
        width: 100%;
        transition: all 0.15s linear;
        padding: 0 0.5rem;
        font-size: clamp(1.5rem, 0.75rem + 3.3333vw, 2.5rem);

        &::placeholder {
          color: var(--darkerBlue);
          opacity: 0.4;
          font-weight: 300;
          margin: 2rem 0;
          padding-left: 0.25rem;
        }

        &:focus {
          font-size: 2rem;
          padding: 0 0.5rem;
        }
      }

      input[type="submit"] {
        margin-top: 1rem;
        width: 100%;
        padding: 0.5rem;
        border-radius: 0.3rem;
        border: none;
        background: var(--lighterBlue);
        color: var(--darkerBlue);
        font-weight: 700;
        font-size: 2.5rem;
        cursor: pointer;
        letter-spacing: 1.25px;

        &:hover {
          filter: brightness(110%);
        }
      }
    }

    .form-item-wrapper {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      /* flex-wrap: wrap; */

      @media (max-width: 700px) {
        flex-wrap: wrap;
      }
    }

    .form-item {
      width: 49%;
      display: flex;
      flex-direction: column;
      margin-top: 0.5rem;

      @media (max-width: 700px) {
        width: 100%;
      }
    }

    .form-message-submit {
      display: flex;
      flex-direction: column;
      margin-top: 0.5rem;
    }

    .submitted {
      background: var(--darkerBlue);
      color: var(--lighterBlue);
      /* width: 75%; */
      padding: 2rem clamp(2rem, -0.6667rem + 11.8519vw, 10rem);
      display: grid;
      place-items: center;
      border-radius: 0.9rem;

      p {
        margin-bottom: 1rem;
        font-weight: 300;
        text-align: center;
        font-size: clamp(1.75rem, 1.3333rem + 1.8519vw, 3rem);
      }

      p:last-of-type {
        font-size: clamp(1.75rem, 1.5rem + 1.1111vw, 2.5rem);
      }
    }
  }
`;

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useRef(null);

  const ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(ref.current, {
        autoAlpha: 0,
        opacity: 0,
        y: 25,
        duration: 0.6,
        delay: 0.25,
        scrub: true,
        ease: "power1",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (formData, e) => {
    console.log(formData);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setFormSubmitted(true);
  };

  // {
  //   errors && console.log(errors);
  // }

  return (
    <Container id="contact">
      <div className="formText" ref={ref}>
        <p className="text">
          Find out how we can help bring order to your accounting systems and
          processes:
        </p>
      </div>

      <div className="formArea">
        {formSubmitted === false ? (
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <div className="form-item-wrapper">
              <div className="form-item">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  aria-invalid={errors.name ? "true" : "false"}
                  placeholder="Name"
                  {...register("name", {
                    required: true,
                    max: 50,
                    min: 3,
                    maxLength: 50,
                  })}
                />
                {errors.name && (
                  <div style={{ color: "red", marginTop: "0.25rem" }}>
                    *Field required
                  </div>
                )}
              </div>
              <div className="form-item">
                <label htmlFor="company">Company:</label>
                <input
                  type="text"
                  name="company"
                  aria-invalid={errors.company ? "true" : "false"}
                  placeholder="Company"
                  {...register("company", { required: true, max: 50, min: 3 })}
                />
                {errors.company && (
                  <div style={{ color: "red", marginTop: "0.25rem" }}>
                    *Field required
                  </div>
                )}
              </div>
            </div>
            <div className="form-item-wrapper">
              <div className="form-item">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    max: 50,
                    min: 3,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <div style={{ color: "red", marginTop: "0.25rem" }}>
                    *Field required
                  </div>
                )}
              </div>
              <div className="form-item">
                <label htmlFor="telephone">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  aria-invalid={errors.phone ? "true" : "false"}
                  placeholder="Phone"
                  {...register("phone", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                {errors.phone && (
                  <div style={{ color: "red", marginTop: "0.25rem" }}>
                    *Field required
                  </div>
                )}
              </div>
            </div>
            <div className="form-message-submit">
              <label htmlFor="message">Message (optional):</label>
              <textarea
                name="message"
                placeholder="Message"
                {...register("message", { max: 300, min: 3 })}
              />

              <input type="submit" value="Submit" />
            </div>
          </form>
        ) : (
          <div className="submitted">
            <p>Form Submitted!</p>
            <p>
              We will respond to you within the next 24 to 48 hours to schedule
              a consultation.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}
