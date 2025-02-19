import Image from "next/image";

import logo from '@/assets/logo.svg';
import medalCopper from '@/assets/medal-cooper.svg';
import medalGold from '@/assets/medal-gold.svg';
import medalSilver from '@/assets/medal-silver.svg';

import { IconButton } from '@/components/icon-button';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from "lucide-react";

export default function InvitePage() {
    return (
        <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
            <div className="flex flex-col gap-10 w-full max-w-[550]">
                <Image src={logo} alt="logo devstage" width={108.5} height={30} />
                <div className="space-y-2">
                    <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">Inscrição confirmada!</h1>
                    <p className="text-gray-300">Para entrar no evento, acesse o link enviado para seu e-mail.</p>
                </div>
                
                <div className="space-y-6">

                    <div className="space-y-3">
                        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">Indique e ganhe</h2>
                        <p className="text-gray-300">Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link abaixo e acompanhar as inscrições:</p>
                    </div>

                    <InputRoot>
                        <InputIcon>
                            <Link className="size-5" />
                        </InputIcon>
                        <InputField defaultValue="https://localhost:3000/invite/ji3j1o2i3jo2ijo1" readOnly />
                        <IconButton className="-mr-2">
                            <Copy className="size-5" />
                        </IconButton>
                    </InputRoot>

                    <div className="gap-3 grid md:grid-cols-3">
                        <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">1042</span>
                            <span className="text-small text-gray-300 leading-none text-center">Acessos ao link</span>
                            <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
                        </div>

                        <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">42</span>
                            <span className="text-small text-gray-300 leading-none text-center">Inscrições feitas</span>
                            <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
                        </div>

                        <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">2</span>
                            <span className="text-small text-gray-300 leading-none text-center">Posição no ranking</span>
                            <Medal className="size-5 text-purple absolute top-3 left-3" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[440] space-y-5">
                <h2 className="text-xl text-gray-200 font-heading font-semibold leading-none">Ranking de Indicações</h2>
                <div className="space-y-4">
                    <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
                        <span className="text-sm text-gray-300 leading-none">
                            <span className="font-semibold">1&deg;</span> | 
                            Nome Sujeito
                            </span>
                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">1030</span>
                        <Image src={medalGold} alt="medalha de ouro" className="absolute top-0 right-8" />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
                        <span className="text-small text-gray-300 leading-none">
                            <span className="font-semibold">2&deg;</span> | 
                            Nome Sujeito
                            </span>
                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">1030</span>
                        <Image src={medalSilver} alt="medalha de prata" className="absolute top-0 right-8" />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
                        <span className="text-small text-gray-300 leading-none">
                            <span className="font-semibold">3&deg;</span> | 
                            Nome Sujeito
                            </span>
                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">1030</span>
                        <Image src={medalCopper} alt="medalha de bronze" className="absolute top-0 right-8" />
                    </div>
                </div>
            </div>
        </div>
    )
}