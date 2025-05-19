"use client"
import React from 'react'
import {  signIn } from "next-auth/react";


export default function LogIn() {
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>{" "}
    </div>
  );
}
