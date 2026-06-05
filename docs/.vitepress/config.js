export default {
  title: 'Bauchschmeichler',
  description: 'Wissenschaftlich fundierte Schonkost bei Krebstherapie',
  base: '/schonkost-kochbuch/',
  themeConfig: {
    sidebar: [
      { text: 'Die Goldenen Regeln', link: '/regeln' },
      {
        text: '🔴 Stufe Rot: Akute Übelkeit',
        collapsed: false,
        items: [
          { text: 'Übersicht', link: '/stufe-rot' },
          { text: 'Elektrolyt-Reiswasser', link: '/rot-elektrolyt-reiswasser' },
          { text: 'Kamillen-Fenchel-Eiswürfel', link: '/rot-kamillen-fenchel-eiswuerfel' },
          { text: 'Samtiger Haferschleim (Pur)', link: '/rot-haferschleim-pur' }
        ]
      },
      {
        text: '🟡 Stufe Gelb: Beruhigung',
        collapsed: false,
        items: [
          { text: 'Übersicht', link: '/stufe-gelb' },
          { text: 'Haferschleimsuppe mit Ei', link: '/gelb-haferschleimsuppe' },
          { text: 'Morosche Möhrensuppe', link: '/gelb-morosche-moehrensuppe' },
          { text: 'Apfelmus mit Heidelbeeren', link: '/gelb-apfelmus-heidelbeere' },
          { text: 'Zwieback-Inseln in Gemüsebrühe', link: '/gelb-zwieback-gemuesesuppe' },
          { text: 'Reismilch-Grießbrei (Kalt)', link: '/gelb-reismilch-griessbrei' }
        ]
      },
      {
        text: '🟢 Stufe Grün: Sanfter Aufbau',
        collapsed: false,
        items: [
          { text: 'Übersicht', link: '/stufe-gruen' },
          { text: 'Kartoffel-Pastinaken-Schnee', link: '/gruen-kartoffel-pastinaken-schnee' },
          { text: 'Geruchlos gedämpfter Varoma-Kabeljau', link: '/gruen-varoma-kabeljau' }
        ]
      },
      {
        text: '🍚 Grundrezepte & Kochtechniken',
        collapsed: false,
        items: [
          { text: 'Reis kochen', link: '/basis-reis' },
          { text: 'Reisbrei kochen', link: '/basis-reisbrei' },
          { text: 'Bulgur kochen', link: '/basis-bulgur' },
          { text: 'Quinoa kochen', link: '/basis-quinoa' },
          { text: 'Nudeln kochen', link: '/basis-nudeln' },
          { text: 'Eier kochen', link: '/basis-eier' },
          { text: 'Grießbrei kochen', link: '/basis-griessbrei' },
          { text: 'Kartoffeln kochen', link: '/basis-kartoffeln' },
          { text: 'Gemüse dämpfen', link: '/basis-gemuese-dampf' }
        ]
      },
      { text: '💧 SOS-Getränke & Hydration', link: '/sos-getraenke' }
    ]
  }
}
