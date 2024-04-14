const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value, maxLength) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }
    return true;
};

exports.sendEmail = async (formData) => {
    const email = formData.get("email");
    const message = formData.get("message");
    
    if (!validateString(email, 320)) {
        return {
            error: "Invalid email"
        };
    }

    if (!validateString(message, 2000)) {
        return {
            error: "Invalid message"
        };
    }

    try {
        await resend.emails.send({
            from: "Contact form <onboarding@resend.dev>",
            to: "barbershop.communities@gmail.com",
            subject: "Message from contact form",
            reply_to: email,
            text: `${message}`
        });
    } catch (error) {
        return {
            error: error.message
        };
    }

    return {
        error: null
    };
};
