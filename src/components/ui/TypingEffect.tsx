
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  erasingSpeed = 50,
  delayBetweenTexts = 1500,
  className = '',
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, delayBetweenTexts);
      return () => clearTimeout(timeout);
    }

    const currentFullText = texts[currentTextIndex];

    if (isTyping) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, erasingSpeed);
      } else {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [texts, currentTextIndex, displayText, isTyping, isPaused, typingSpeed, erasingSpeed, delayBetweenTexts]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className="inline-block w-0.5 h-5 ml-1 bg-purple-500 animate-blink align-middle">
        &nbsp;
      </span>
    </span>
  );
};

export default TypingEffect;
