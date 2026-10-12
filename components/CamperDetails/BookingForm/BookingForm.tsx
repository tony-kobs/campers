'use client';

import { useState } from 'react';
import { Form, Formik } from 'formik';
import { createBookingRequest } from '@/services/campers';
import TextField from './TextField';
import { bookingSchema, type BookingValues } from './bookingSchema';
import css from './BookingForm.module.css';

type BookingFormProps = {
  camperId: string;
};

const initialValues: BookingValues = {
  name: '',
  email: '',
};

export default function BookingForm({ camperId }: BookingFormProps) {
  const [serverMessage, setServerMessage] = useState('');

  return (
    <section className={css.card}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={bookingSchema}
        onSubmit={async (values, { resetForm }) => {
          setServerMessage('');

          try {
            const result = await createBookingRequest(
              camperId,
              bookingSchema.cast(values),
            );
            setServerMessage(result.message);
            resetForm();
          } catch {
            setServerMessage(
              'Could not send the booking request. Please try again.',
            );
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className={css.form} noValidate>
            <TextField name="name" label="Name*" autoComplete="name" />
            <TextField
              name="email"
              label="Email*"
              type="email"
              autoComplete="email"
            />
            <button
              className={css.button}
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>

      {serverMessage && <p className={css.serverMessage}>{serverMessage}</p>}
    </section>
  );
}
