/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email không được để trống'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Email không được vượt quá 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Email phải có tối thiểu 5 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Mật khẩu không được để trống'
    },
    maxLength: {
      value: 160,
      message: 'Mật khẩu không được vượt quá 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu phải có tối thiểu 6 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại mật khẩu không được để trống'
    },
    maxLength: {
      value: 160,
      message: 'Nhập lại mật khẩu không được vượt quá 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Nhập lại mật khẩu phải có tối thiểu 6 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại mật khẩu không khớp'
        : undefined
  }
})

export const schema = yup
  .object({
    email: yup
      .string()
      .email('Email không đúng định dạng')
      .required('Email không được để trống')
      .min(5, 'Email phải có tối thiểu 5 ký tự')
      .max(160, 'Email không được vượt quá 160 ký tự'),
    password: yup
      .string()
      .required('Mật khẩu không được để trống')
      .min(6, 'Mật khẩu phải có tối thiểu 6 ký tự')
      .max(160, 'Mật khẩu không được vượt quá 160 ký tự'),
    confirm_password: yup
      .string()
      .required('Nhập lại mật khẩu không được để trống')
      .min(6, 'Nhập lại mật khẩu phải có tối thiểu 6 ký tự')
      .max(160, 'Nhập lại mật khẩu không được vượt quá 160 ký tự')
      .oneOf([yup.ref('password')], 'Nhập lại mật khẩu không khớp')
  })
  .required()

export type Schema = yup.InferType<typeof schema>
