export default {
  title: 'Bauchschmeichler',
  description: 'Wissenschaftlich fundierte Schonkost bei Krebstherapie',
  base: '/schonkost-kochbuch/',
  themeConfig: {
    sidebar: [
      { text: 'Die Goldenen Regeln', link: '/regeln' },
      { text: '🔴 Stufe Rot: Akute Übelkeit', link: '/stufe-rot' },
      {
        text: '🟡 Stufe Gelb: Beruhigung',
        collapsed: false,
        items: [
          { text: 'Übersicht', link: '/stufe-gelb' },
          { text: 'Haferschleimsuppe mit Ei', link: '/gelb-haferschleimsuppe' }
        ]
      },
      { text: '🟢 Stufe Grün: Sanfter Aufbau', link: '/stufe-gruen' },
      { text: '💧 SOS-Getränke & Hydration', link: '/sos-getraenke' }
    ]
  }
}
