'use client';

import { Form, Formik } from 'formik';
import { createBookingRequest } from '@/services/campers';
import TextField from './TextField';
import { bookingSchema, type BookingValues } from './bookingSchema';
import css from './BookingForm.module.css';
import { toast } from 'sonner';

type BookingFormProps = {
  camperId: string;
};

const initialValues: BookingValues = {
  name: '',
  email: '',
};

export default function BookingForm({ camperId }: BookingFormProps) {
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
          try {
            const result = await createBookingRequest(
              camperId,
              bookingSchema.cast(values),
            );
            toast.success(result.message);
            resetForm();
          } catch {
            toast.error(
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
    </section>
  );
}
