import React, { useState } from 'react';
import { i18n } from '../../translate/i18n'
import './style.sass'

import { ToastNotification } from '../../assets/components/toast-notification'

// Imagens
import contact from '../../assets/images/contact-us.png'
import email from '../../assets/images/email.png'
import phone from '../../assets/images/phone.png'
import wpp from '../../assets/images/whatsapp2.png'

export const Contato = () => {

    const [showToast, setShowToast] = useState(false);

    const copyTextToClipboard = (text) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    };
    
    const handleContactClick = (text) => {
        copyTextToClipboard(text);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 5000); // 5 segundos
    };

    return (
        <div className="contato-page">
            <div className="text-content">
                {showToast && <ToastNotification />}

                <h1>{i18n.t('contato.title')}<span>{i18n.t('contato.span')}</span> {i18n.t('contato.title2')}</h1>
                <p className="phrase">{i18n.t('contato.phrase')}</p>

                <div className="contacts">
                    <div className="contact" onClick={() => handleContactClick('sales@respondai.net')}>
                        <img src={email} alt="email icon" />
                        <p>sales@respondai.net</p>
                    </div>
                    <div className="contact" onClick={() => handleContactClick('+55 (11) 99353-8000')}>
                        <img src={phone} alt="phone icon" />
                        <p>+55 (11) 99353-8000</p>
                    </div>
                    <div className="contact" onClick={() => handleContactClick('+55 (11) 99353-8000')}>
                        <img src={wpp} alt="whatsapp icon" />
                        <p>+55 (11) 99353-8000</p>
                    </div>
                </div>
            </div>
            <div className="illustration">
                <img src={contact} alt="" />
            </div>
        </div>
    )
}