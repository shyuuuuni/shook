'use client';

import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import { useEffect, useState } from 'react';
import { API_URL } from '@/configs/env';
import useUsername from '../../_hooks/useUsername';
import * as styles from './StarredAnalysis.css';

export default function FavoriteAnalysisStream() {
  const username = useUsername();
  const [sseLog, setSseLog] = useState<string>('');
  const [analysis, setAnalysis] = useState<string>('');

  const connectEventSource = () => {
    const EventSource = NativeEventSource || EventSourcePolyfill;
    const eventSource = new EventSource(`${API_URL}/favorite/${username}`);

    // Handle an open event
    eventSource.onopen = (e) => {
      console.log('Connection to server opened', e);
    };

    // Handle a message event
    eventSource.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data?.type === 'system') {
        console.log('System message from server:', data);
        setSseLog(data.message);
      } else if (data?.type === 'data' && data?.progress === 'analysis') {
        console.log('Analysis from server:', data);
        setAnalysis(data.message);
      } else {
        console.log('New message from server:', data);
      }
    };

    // Handle an error event (or close)
    eventSource.onerror = (e) => {
      console.log('EventSource closed:', e);
      eventSource.close(); // Close the connection if an error occurs
    };

    // Cleanup function
    return () => {
      eventSource.close();
    };
  };

  useEffect(() => {
    const clearEventSource = connectEventSource();

    return () => {
      clearEventSource();
    };
  }, []);

  return (
    <section className={styles.container}>
      <div>
        {sseLog && <p className={styles.p}>Current State: [{sseLog}]</p>}
        {analysis && <div className={styles.analysis}>{analysis}</div>}
      </div>
    </section>
  );
}
