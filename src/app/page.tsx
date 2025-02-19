import { ArrowRight, Mail, Radio, User } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/button';
import { InputField, InputIcon, InputRoot } from '@/components/input';

import logo from '@/assets/logo.svg';

export default function Home() {
  return (
      <div className="min-h-dvh flex items-center justify-center gap-16 flex-col md:flex-row">
        
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Image src={logo} alt="logo devstage" width={108.5} height={30} />
          <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
            <span className="text-blue">CodeCraft </span>
            Summit 2025
          </h1>
          <div className="flex gap-5 items-stretch flex-col md:flex-row">
            <div className="bg-gray-700 flex-1 border border-gray-600 rounded-2xl p-8 space-y-6">
              
              <div className="flex items-center justify-between">
                <h2 className="font-heading font-bold text-gray-200 text-xl">Sobre o Evento</h2>
                <span className="text-purple font-semibold text-xs flex items-center gap-2">
                  <Radio className="size-5" />
                  AO VIVO
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas tendências mais recentes em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e hackathons.
                <br /><br />
                Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito 
              </p>

            </div>

            <form action="" className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440]">
              <h2 className="font-heading font-bold text-gray-200 text-xl">Inscrição</h2>
              <div className="space-y-3">
                <InputRoot>
                  <InputIcon>
                    <User />
                  </InputIcon>
                  <InputField type="text" placeholder="Nome completo" />
                </InputRoot>

                <InputRoot>
                  <InputIcon>
                    <Mail />
                  </InputIcon>
                  <InputField type="email" placeholder="E-mail" />
                </InputRoot>
              </div>

              <Button>
                Confirmar
                <ArrowRight />
              </Button>
            </form>

          </div>
        </div>

      </div>
  );
}
