"use client"

import { useEffect, useRef } from "react"

export default function SnowfallBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const snowflakes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      wobble: number
    }> = []

    for (let i = 0; i < 100; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: Math.random() * 2 + 1,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        wobble: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number

    const animate = () => {
      // Clear with semi-transparent overlay for trail effect
      ctx.fillStyle = "rgba(8, 8, 12, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw snowflakes
      snowflakes.forEach((flake) => {
        // Apply wobble effect
        flake.wobble += 0.05
        flake.x += Math.sin(flake.wobble) * 0.5 + flake.vx

        flake.y += flake.vy

        // Reset position when snowflake falls off screen
        if (flake.y > canvas.height) {
          flake.y = -10
          flake.x = Math.random() * canvas.width
        }

        // Wrap around sides
        if (flake.x > canvas.width) flake.x = 0
        if (flake.x < 0) flake.x = canvas.width

        // Draw snowflake with glow
        ctx.fillStyle = `rgba(220, 230, 255, ${flake.opacity})`
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2)
        ctx.fill()

        // Add subtle glow
        ctx.strokeStyle = `rgba(102, 204, 255, ${flake.opacity * 0.3})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, rgb(8, 8, 12), rgb(12, 12, 20))" }}
    />
  )
}
