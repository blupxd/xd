import { configureStore } from '@reduxjs/toolkit'
import contactFormReducer from '../reducers/contactFormReducer'

export default configureStore({
  reducer: {
    contactForm: contactFormReducer
  },
})