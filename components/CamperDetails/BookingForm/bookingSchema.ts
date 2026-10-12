import * as Yup from 'yup';

export const bookingSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(/^[A-Za-z]+(?:[ '\-][A-Za-z]+)*$/, 'Please enter your name.')
    .required('Please enter your name.'),
  email: Yup.string()
    .trim()
    .email('Please enter your email.')
    .matches(/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/, 'Please enter your email.')
    .required('Please enter your email.'),
});

export type BookingValues = Yup.InferType<typeof bookingSchema>;
