'use client'

import { Button } from '@/components/button';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { ArrowRight, Mail, User } from 'lucide-react';

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const subscriptionSchema = z.object({
    name: z.string().min(2, 'Digite seu nome completo'),
    email: z.string().email('Digite um e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<SubscriptionSchema>({
        resolver: zodResolver(subscriptionSchema),
    });

    function onSubscribe(data: SubscriptionSchema) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubscribe)} className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440]">
            <h2 className="font-heading font-bold text-gray-200 text-xl">Inscrição</h2>
            <div className="space-y-3">
                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                        <User />
                        </InputIcon>
                        <InputField {...register('name')} type="text" placeholder="Nome completo" />
                    </InputRoot>

                    { errors.name && (
                        <p className="text-danger text-xs font-semibold">{errors.name.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                        <Mail />
                        </InputIcon>
                        <InputField {...register('email')} type="email" placeholder="E-mail" />
                    </InputRoot>

                    { errors.email && (
                        <p className="text-danger text-xs font-semibold">{errors.email.message}</p>
                    )}
                </div>
            </div>

            <Button>
            Confirmar
            <ArrowRight />
            </Button>
        </form>
    )
}