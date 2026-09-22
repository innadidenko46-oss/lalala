import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { CalculatorSection } from '../components/CalculatorSection.tsx';
import { Calculator } from 'lucide-react';
import { PropertyState } from '../types.ts';

export const CalculatorPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stateParam = searchParams.get('state') as PropertyState | null;

  const [propertyState, setPropertyState] = useState<PropertyState>(
    stateParam && ['deweloperski', 'retro', 'security', 'commercial'].includes(stateParam)
      ? stateParam
      : 'retro'
  );

  useEffect(() => {
    if (stateParam && ['deweloperski', 'retro', 'security', 'commercial'].includes(stateParam)) {
      setPropertyState(stateParam);
    }
  }, [stateParam]);

  const handleStateChange = (newState: PropertyState) => {
    setPropertyState(newState);
    setSearchParams({ state: newState });
  };

  return (
    <div className="bg-[#071822] text-slate-200">
      <PageHeader
        badge="Konfigurator Wyceny 360°"
        title="Skonfiguruj Inwestycję w 60 Sekund: Kosztorys Sprzętu i Montażu"
        description="Wybierz stan nieruchomości, metraż i pożądane funkcje automatyki, monitoringu, sieci Wi-Fi i ładowarki EV. Otrzymasz szacunkowy kosztorys netto/brutto bez ukrytych gwiazdek."
        icon={<Calculator className="w-4 h-4 text-amber-400" />}
        image="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Main Calculator Component */}
      <CalculatorSection
        selectedPropertyState={propertyState}
        onStateChange={handleStateChange}
      />
    </div>
  );
};
