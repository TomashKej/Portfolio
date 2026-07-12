'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import { sendEmail } from '@/app/actions/sendEmail';

interface FormState {
    name: string;
    email: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    message?: string;
    server?: string;
}

/**
 * useContactForm centralizes validation, submission state, and input updates for the contact page.
 */
export const useContactForm = () => {
    const [formData, setFormData] = useState<FormState>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Validate required fields before sending the server action request.
    const validate = (): boolean => {
        const newErrors: Errors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Update form state and clear the field-specific error as the user edits.
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof Errors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    // Submit valid form data through the email server action and surface the result in UI state.
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        const result = await sendEmail(formData);

        if (result.success) {
            setIsSuccess(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setIsSuccess(false), 5000);
        } else {
            setErrors(prev => ({ ...prev, message: "Failed to send message. Please try again later." }));
        }
        setIsSubmitting(false);
    };

    return { formData, errors, isSubmitting, isSuccess, handleChange, handleSubmit };
};
