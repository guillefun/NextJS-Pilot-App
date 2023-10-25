import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { motion } from "framer-motion";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Breadcrumb/>
      {children}
    </div>
  )
}
