"use client";

import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  url: string;
  title: string;
  variant?: "horizontal" | "vertical";
}

export default function SocialShare({ url, title, variant = "horizontal" }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-[#1DA1F2] hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      color: "hover:bg-[#0A66C2] hover:text-white",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const containerClass = variant === "vertical"
    ? "flex flex-col gap-2"
    : "flex items-center gap-2";

  return (
    <div className={containerClass}>
      <span className="text-gray-600 text-sm font-medium mr-2">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-all ${link.color}`}
          aria-label={`Share on ${link.name}`}
        >
          <link.icon size={18} />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
          copied
            ? "bg-green-500 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        aria-label="Copy link"
      >
        {copied ? <Check size={18} /> : <Link2 size={18} />}
      </button>
    </div>
  );
}
