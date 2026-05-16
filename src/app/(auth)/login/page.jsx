'use client';
import { authClient } from '@/lib/auth-client';
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

const loginPage = () => {
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email(user);
console.log(error)
    if (data) {
      alert('Login successful');
      redirect('/');
    }
    if (error) {
      alert(error.message);
    }
  };

  const googleHendler = async() => {
      const data = await authClient.signIn.social({
      provider: "google",
      });
    }
  return (
    <div className="min-h-screen max-w-7xl mx-auto my-5">
      {/* Title */}
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold">Welcome Back</h2>
        <p className="">Resume your adventure with Wanderlust</p>
      </div>
      <Card className="bg-base-100">
        {/* Form */}
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={value => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address';
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter Your Email" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={value => {
              if (value.length < 8) {
                return 'Password must be at least 8 characters';
              }
              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter';
              }
              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number';
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center">
            <Button type="submit" className="rounded-none w-full bg-cyan-500">
              Create Account
            </Button>
          </div>
        </Form>

        <div className="space-y-3 mt-2">
          {/* Dibider */}
          <div className="divider">Or continue with</div>

          {/* Google */}
          <button
            onClick={googleHendler}
            className="btn btn-outline w-full mt-2"
          >
            <FcGoogle size={20} /> Sign Up With Google
          </button>

          {/* Login Link */}
          <p className="text-center text-sm">
            Don’n have an account? {''}
            <Link href="/signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default loginPage;
