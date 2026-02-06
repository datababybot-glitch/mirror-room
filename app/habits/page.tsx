'use client';

import { useState, useEffect } from 'react';
import PageLayout from '../components/PageLayout';

interface MeditationData {
  [date: string]: number; // date as YYYY-MM-DD, value is minutes
}

export default function Habits() {
  const [meditationData, setMeditationData] = useState<MeditationData>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Load data from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('meditation-data');
    if (stored) {
      setMeditationData(JSON.parse(stored));
    }
  }, []);

  // Get opacity based on duration
  const getOpacity = (minutes: number) => {
    if (minutes === 0) return 0;
    if (minutes >= 30) return 1; // 100% opacity for 30+ mins
    if (minutes >= 20) return 0.7; // 70% opacity for 20-29 mins
    if (minutes >= 10) return 0.4; // 40% opacity for 10-19 mins
    return 0.2; // 20% opacity for <10 mins
  };

  // Generate all days of current year
  const generateYearDays = () => {
    const year = new Date().getFullYear();
    const days = [];
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }
    return days;
  };

  const yearDays = generateYearDays();
  const year = new Date().getFullYear();

  // Group days by week
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];
  
  yearDays.forEach((day, index) => {
    if (index === 0) {
      // Add empty cells for days before the first day of the year
      const dayOfWeek = day.getDay();
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push(new Date(0)); // placeholder
      }
    }
    
    currentWeek.push(day);
    
    if (day.getDay() === 6 || index === yearDays.length - 1) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });

  const formatDate = (date: Date) => {
    if (date.getTime() === 0) return '';
    return date.toISOString().split('T')[0];
  };

  const getMonthLabel = (weekIndex: number) => {
    const date = weeks[weekIndex]?.[0];
    if (!date || date.getTime() === 0) return '';
    const prevWeekDate = weeks[weekIndex - 1]?.[0];
    if (!prevWeekDate || prevWeekDate.getMonth() !== date.getMonth()) {
      return date.toLocaleString('default', { month: 'short' });
    }
    return '';
  };

  const handleSquareClick = (date: Date) => {
    if (date.getTime() === 0) return;
    setSelectedDate(formatDate(date));
  };

  const logMeditation = (minutes: number) => {
    if (!selectedDate) return;
    const newData = { ...meditationData, [selectedDate]: minutes };
    setMeditationData(newData);
    localStorage.setItem('meditation-data', JSON.stringify(newData));
    setSelectedDate(null);
  };

  return (
    <PageLayout>
      <div className="min-h-screen px-4 py-12 md:px-8">
        <div className="mx-auto" style={{ maxWidth: '1050px', width: '100%' }}>
          <div className="mb-16" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '32px'
          }}>
            <h1 
              className="text-4xl md:text-6xl font-bold mb-4 tracking-wide bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent" 
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              HABITS
            </h1>
            <p className="text-lg text-white/70">
              Track your daily meditation practice
            </p>
          </div>

          {/* Meditation Tracker */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-orbitron)' }}>
              MEDITATION {year}
            </h2>

            {/* Grid */}
            <div style={{ overflowX: 'auto', paddingBottom: '20px' }}>
              <div style={{ minWidth: '800px' }}>
                {/* Month labels */}
                <div style={{ display: 'flex', gap: '2px', marginBottom: '8px', paddingLeft: '40px' }}>
                  {weeks.map((week, i) => {
                    const label = getMonthLabel(i);
                    return (
                      <div key={i} style={{ width: '12px', fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>
                        {label}
                      </div>
                    );
                  })}
                </div>

                {/* Days grid */}
                {[0, 1, 2, 3, 4, 5, 6].map(dayOfWeek => (
                  <div key={dayOfWeek} style={{ display: 'flex', gap: '2px', marginBottom: '2px' }}>
                    {/* Day label */}
                    <div style={{ width: '35px', fontSize: '11px', color: 'rgba(255,255,255,0.5)', paddingTop: '2px' }}>
                      {dayOfWeek === 1 ? 'Mon' : dayOfWeek === 3 ? 'Wed' : dayOfWeek === 5 ? 'Fri' : ''}
                    </div>
                    
                    {weeks.map((week, weekIndex) => {
                      const day = week[dayOfWeek];
                      if (!day || day.getTime() === 0) {
                        return <div key={weekIndex} style={{ width: '12px', height: '12px' }} />;
                      }
                      
                      const dateKey = formatDate(day);
                      const minutes = meditationData[dateKey] || 0;
                      const opacity = getOpacity(minutes);
                      
                      return (
                        <div
                          key={weekIndex}
                          onClick={() => handleSquareClick(day)}
                          style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '2px',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.8)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                          }}
                          title={`${dateKey}: ${minutes} minutes`}
                        />
                      );
                    })}
                  </div>
                ))}

                {/* Legend */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                  <span>Less</span>
                  <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2px' }} />
                  <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2px' }} />
                  <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2px' }} />
                  <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 1)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2px' }} />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Log Entry Modal */}
          {selectedDate && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10001
              }}
              onClick={() => setSelectedDate(null)}
            >
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '20px',
                  padding: '32px',
                  maxWidth: '400px',
                  width: '90%'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  LOG MEDITATION
                </h3>
                <p className="text-white/70 mb-6">{selectedDate}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[10, 15, 20, 25, 30, 40, 50, 60].map(minutes => (
                    <button
                      key={minutes}
                      onClick={() => logMeditation(minutes)}
                      style={{
                        background: 'rgba(168, 85, 247, 0.1)',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        borderRadius: '8px',
                        padding: '12px',
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        fontSize: '16px'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)';
                        e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                      }}
                    >
                      {minutes} minutes
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setSelectedDate(null)}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      padding: '12px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      cursor: 'pointer',
                      marginTop: '8px'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
