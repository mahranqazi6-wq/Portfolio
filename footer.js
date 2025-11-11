class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #1e40af;
          color: white;
          padding: 3rem 1rem;
          text-align: center;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }
        
        .footer-link {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          color: #a5b4fc;
          transform: translateY(-2px);
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255,