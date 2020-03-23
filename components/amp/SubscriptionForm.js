import React from 'react';

export default function SubscriptionForm ({children}) {
  return (
    <form method="post" action-xhr="/contact#contact_form" id="contact_form" acceptCharset="UTF-8" className="contact-form">
      <input type="hidden" name="form_type" value="customer" />
      <input type="hidden" name="utf8" value="✓" />
      <div className="input-group">
        <input type="hidden" name="contact[tags]" value="newsletter" />
        <input type="email" placeholder="email@example.com" name="contact[email]" id="Email" value="" aria-label="email@example.com" className="input-group-field" />
        <span className="input-group-btn">
          <input type="submit" className="btn" name="commit" value="❯" />
        </span>
      </div>
    </form>
  );
}
