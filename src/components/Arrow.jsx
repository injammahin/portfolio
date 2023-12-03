import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const ExclamationSign = () => {
  const canvasRef = useRef(null);
  let ctx, mx, my, exclamationArr, animationFrameId;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    exclamationArr = [];

    document.addEventListener("mousemove", handleMouseMove, false);
    window.addEventListener("resize", handleResize);

    for (let y = 0; y < canvas.height / 20; y++) {
      for (let x = 0; x < canvas.width / 80; x++) {
        const exclamation = new Exclamation(new Point(x * 25, y * 25));
        exclamationArr.push(exclamation);
      }
    }

    animationFrameId = requestAnimationFrame(main);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [animationFrameId]);

  const handleMouseMove = (e) => {
    mx = e.clientX;
    my = e.clientY;
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  function Point(x, y) {
    this.x = x || 20;
    this.y = y || 20;
  }

  function Exclamation(position) {
    this.pos = position;
    this.dx = 0;
    this.dy = 0;
    this.angle = 0;
    this.dist = 0;

    this.update = function () {
      this.dx = mx - this.pos.x;
      this.dy = my - this.pos.y;
      this.dist = Math.sqrt(Math.pow(this.dx, 2) + Math.pow(this.dy, 2));
      this.angle = Math.atan2(this.dy, this.dx);
    };

    this.draw = function () {
      ctx.save();
      ctx.translate(this.pos.x, this.pos.y);
      ctx.rotate(this.angle);
      ctx.beginPath();

      ctx.moveTo(0, 0);
      ctx.lineTo(0, 20); // Change this to adjust the length of the line
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#27005D";
      ctx.stroke();

      ctx.restore();
    };
  }

  function main() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#31304D";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < canvas.height / 20; y++) {
      for (let x = 0; x < canvas.width / 50; x++) {
        exclamationArr[y * 10 + x].update();
        exclamationArr[y * 10 + x].draw();
      }
    }
    animationFrameId = requestAnimationFrame(main);
  }

  return <canvas ref={canvasRef} className="bg-gray-800 exclamation"></canvas>;
};

export default ExclamationSign;
