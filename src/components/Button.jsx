import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  href,
  download,
  target,
  rel,
  ...props
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const combinedClasses = `${baseClass} ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        download={download}
        target={target ?? (download ? undefined : '_blank')}
        rel={rel ?? (download ? undefined : 'noopener noreferrer')}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
