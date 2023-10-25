'use client'

import Lottie from 'lottie-react'
import homeanim from "./../assets/lotties/homeanim3.json";
import { useState } from 'react';

export default function Home() {
  const [ended, setEnded] = useState(false)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Lottie style={ended ? {display: 'none'} : {}} loop={false} onComplete={() => setEnded(true)} animationData={homeanim} />
    </div>
  )
}
