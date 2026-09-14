'use client';

import { useEffect } from 'react';

/**
 * 广告贴片组件
 * 使用 profitableratecpmnetwork.com 脚本
 */
export default function AdBanner() {
  useEffect(() => {
    // 避免重复加载
    if (document.getElementById('prcpm-ad-script')) return;

    const script = document.createElement('script');
    script.id = 'prcpm-ad-script';
    script.src =
      'https://pl31161880.profitableratecpmnetwork.com/44/da/2c/44da2c859ff7529b5d903a3f34b1dde7.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById('prcpm-ad-script');
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    };
  }, []);

  return null;
}
