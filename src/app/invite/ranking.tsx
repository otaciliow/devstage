import Image from 'next/image';

import medalCopper from '@/assets/medal-cooper.svg';
import medalGold from '@/assets/medal-gold.svg';
import medalSilver from '@/assets/medal-silver.svg';

export function Ranking() {
    return (
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
    )
}