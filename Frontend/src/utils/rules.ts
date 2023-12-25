import type { RegisterOptions } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const rules: Rules = {
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
    }
  }
}
