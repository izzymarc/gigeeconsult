import React from "react";
import { Link } from "wouter";
import { useI18n } from "../lib/i18n/i18n-provider";

export default function NotFoundPage() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-4xl font-semibold mt-6 mb-8">{t('common.notFound')}</h2>
        <p className="text-xl mb-10 max-w-md mx-auto">{t('common.notFoundMessage')}</p>
        <Link href="/" className="text-white">
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            {t('common.backToHome')}
          </button>
        </Link>
      </div>
    </div>
  );
} 