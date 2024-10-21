"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type PasswordStrength = "Weak" | "Medium" | "Strong" | "Very Strong" | "";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [idnumber, setIdNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const checkPasswordStrength = (pwd: string): PasswordStrength => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) strength++;
    if (pwd.match(/\d/)) strength++;
    if (pwd.match(/[^a-zA-Z\d]/)) strength++;

    switch (strength) {
      case 0:
      case 1:
        return "Weak";
      case 2:
        return "Medium";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      default:
        return "";
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
    setPasswordsMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordsMatch(password === newConfirmPassword);
  };

  const getPasswordStrengthColor = (): string => {
    switch (passwordStrength) {
      case "Weak":
        return "text-red-500";
      case "Medium":
        return "text-yellow-500";
      case "Strong":
        return "text-green-500";
      case "Very Strong":
        return "text-green-700";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!passwordsMatch || passwordStrength === "Weak") {
      alert("Please ensure the passwords match and are strong enough.");
      return;
    }

    let { data, err } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (data){

      // Save form data using Supabase
      const { error } = await supabase
      .from("user") // Replace with your actual table name
      .insert({
        first_name: name,
        last_name: surname,
        id_no: idnumber,
        email: email
      });
      
      if (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting the form");
      } else {
        console.log("Form submitted successfully");
        
        alert("Registration successful");
      }
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Create account</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="surname">Surname</Label>
              <Input
                id="surname"
                type="text"
                placeholder="Surname"
                required
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="idnumber">ID/Passport number</Label>
              <Input
                id="idnumber"
                type="text"
                placeholder="ID/Passport number"
                required
                value={idnumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordStrength && (
                <p className={`text-sm ${getPasswordStrengthColor()}`}>
                  Password strength: {passwordStrength}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            {!passwordsMatch && password && confirmPassword && (
              <Card className="bg-red-100 text-red-800 p-2">
                <p>Passwords do not match.</p>
              </Card>
            )}
            <Button
              type="submit"
              className="w-full"
              disabled={!passwordsMatch || passwordStrength === "Weak"}
            >
              Register
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="#" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
