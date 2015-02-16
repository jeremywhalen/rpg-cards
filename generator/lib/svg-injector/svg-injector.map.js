{"version":3,"file":"./svg-injector.min.js","sources":["./svg-injector.js"],"names":["window","document","uniqueClasses","list","split","hash","i","length","out","hasOwnProperty","unshift","join","isLocal","location","protocol","hasSvgSupport","implementation","hasFeature","forEach","Array","prototype","fn","scope","this","TypeError","len","call","svgCache","injectCount","injectedElements","requestQueue","ranScripts","cloneSvg","sourceSvg","cloneNode","queueRequest","url","callback","push","processRequestQueue","index","setTimeout","loadSvg","undefined","SVGSVGElement","XMLHttpRequest","httpRequest","onreadystatechange","readyState","status","responseXML","statusText","Document","documentElement","DOMParser","Function","xmlDoc","parser","parseFromString","responseText","e","getElementsByTagName","open","overrideMimeType","send","injectElement","el","evalScripts","pngFallback","imgUrl","getAttribute","test","perElementFallback","setAttribute","pop","replace","indexOf","svg","imgId","imgTitle","classMerge","concat","imgStyle","imgData","filter","attributes","at","name","dataAttr","value","newClipPathName","clipPaths","querySelectorAll","g","clipPathsLen","id","usingClipPath","h","usingClipPathLen","newMaskName","masks","masksLen","usingMask","j","usingMaskLen","removeAttribute","script","scriptType","scripts","scriptsToEval","k","scriptsLen","innerText","textContent","removeChild","l","scriptsToEvalLen","styleTags","styleTag","parentNode","replaceChild","SVGInjector","elements","options","done","eachCallback","each","elementsLoaded","element","module","exports","define","amd"],"mappings":";;;;;;;CAQC,SAAUA,EAAQC,GAEjB,YAMA,SAASC,GAAcC,GACrBA,EAAOA,EAAKC,MAAM,IAMlB,KAJA,GAAIC,MACAC,EAAIH,EAAKI,OACTC,KAEGF,KACAD,EAAKI,eAAeN,EAAKG,MAC5BD,EAAKF,EAAKG,IAAM,EAChBE,EAAIE,QAAQP,EAAKG,IAIrB,OAAOE,GAAIG,KAAK,KAjBlB,GAAIC,GAAuC,UAA7BZ,EAAOa,SAASC,SAC1BC,EAAgBd,EAASe,eAAeC,WAAW,oDAAqD,OAuBxGC,EAAUC,MAAMC,UAAUF,SAAW,SAAUG,EAAIC,GACrD,GAAa,SAATC,MAA4B,OAATA,MAA+B,kBAAPF,GAC7C,KAAM,IAAIG,UAIZ,IAAIlB,GAAGmB,EAAMF,KAAKhB,SAAW,CAG7B,KAAKD,EAAI,EAAOmB,EAAJnB,IAAWA,EACjBA,IAAKiB,OACPF,EAAGK,KAAKJ,EAAOC,KAAKjB,GAAIA,EAAGiB,OAM7BI,KAEAC,EAAc,EACdC,KAGAC,KAGAC,KAEAC,EAAW,SAAUC,GACvB,MAAOA,GAAUC,WAAU,IAGzBC,EAAe,SAAUC,EAAKC,GAChCP,EAAaM,GAAON,EAAaM,OACjCN,EAAaM,GAAKE,KAAKD,IAGrBE,EAAsB,SAAUH,GAClC,IAAK,GAAI9B,GAAI,EAAGmB,EAAMK,EAAaM,GAAK7B,OAAYkB,EAAJnB,EAASA,KAGvD,SAAWkC,GACTC,WAAW,WACTX,EAAaM,GAAKI,GAAOR,EAASL,EAASS,MAC1C,IACF9B,IAKHoC,EAAU,SAAUN,EAAKC,GAC3B,GAAsBM,SAAlBhB,EAASS,GACPT,EAASS,YAAgBQ,eAE3BP,EAASL,EAASL,EAASS,KAI3BD,EAAaC,EAAKC,OAGjB,CAEH,IAAKrC,EAAO6C,eAEV,MADAR,GAAS,4CACF,CAITV,GAASS,MACTD,EAAaC,EAAKC,EAElB,IAAIS,GAAc,GAAID,eAEtBC,GAAYC,mBAAqB,WAE/B,GAA+B,IAA3BD,EAAYE,WAAkB,CAGhC,GAA2B,MAAvBF,EAAYG,QAA8C,OAA5BH,EAAYI,YAM5C,MALAb,GAAS,4BAA8BD,GAEnCxB,GAASyB,EAAS,+IAEtBA,KACO,CAIT,MAA2B,MAAvBS,EAAYG,QAAmBrC,GAAkC,IAAvBkC,EAAYG,QAyCxD,MADAZ,GAAS,0CAA4CS,EAAYG,OAAS,IAAMH,EAAYK,aACrF,CAtCP,IAAIL,EAAYI,sBAAuBE,UAErCzB,EAASS,GAAOU,EAAYI,YAAYG,oBAWrC,IAAIC,WAAcA,oBAAqBC,UAAW,CACrD,GAAIC,EACJ,KACE,GAAIC,GAAS,GAAIH,UACjBE,GAASC,EAAOC,gBAAgBZ,EAAYa,aAAc,YAE5D,MAAOC,GACLJ,EAASb,OAGX,IAAKa,GAAUA,EAAOK,qBAAqB,eAAetD,OAExD,MADA8B,GAAS,6BAA+BD,IACjC,CAIPT,GAASS,GAAOoB,EAAOH,gBAK3Bd,EAAoBH,KAS1BU,EAAYgB,KAAK,MAAO1B,GAIpBU,EAAYiB,kBAAkBjB,EAAYiB,iBAAiB,YAE/DjB,EAAYkB,SAKZC,EAAgB,SAAUC,EAAIC,EAAaC,EAAa/B,GAG1D,GAAIgC,GAASH,EAAGI,aAAa,aAAeJ,EAAGI,aAAa,MAG5D,KAAK,SAAWC,KAAKF,GAEnB,WADAhC,GAAS,wDAA0DgC,EAOrE,KAAKtD,EAAe,CAClB,GAAIyD,GAAqBN,EAAGI,aAAa,kBAAoBJ,EAAGI,aAAa,WAiB7E,aAdIE,GACFN,EAAGO,aAAa,MAAOD,GACvBnC,EAAS,OAGF+B,GACPF,EAAGO,aAAa,MAAOL,EAAc,IAAMC,EAAOjE,MAAM,KAAKsE,MAAMC,QAAQ,OAAQ,SACnFtC,EAAS,OAITA,EAAS,uEAUwB,KAAjCR,EAAiB+C,QAAQV,KAM7BrC,EAAiBS,KAAK4B,GAGtBA,EAAGO,aAAa,MAAO,IAGvB/B,EAAQ2B,EAAQ,SAAUQ,GAExB,GAAmB,mBAARA,IAAsC,gBAARA,GAEvC,MADAxC,GAASwC,IACF,CAGT,IAAIC,GAAQZ,EAAGI,aAAa,KACxBQ,IACFD,EAAIJ,aAAa,KAAMK,EAGzB,IAAIC,GAAWb,EAAGI,aAAa,QAC3BS,IACFF,EAAIJ,aAAa,QAASM,EAI5B,IAAIC,MAAgBC,OAAOJ,EAAIP,aAAa,aAAgB,eAAgBJ,EAAGI,aAAa,cAAgB3D,KAAK,IACjHkE,GAAIJ,aAAa,QAASvE,EAAc8E,GAExC,IAAIE,GAAWhB,EAAGI,aAAa,QAC3BY,IACFL,EAAIJ,aAAa,QAASS,EAI5B,IAAIC,MAAaC,OAAO1D,KAAKwC,EAAGmB,WAAY,SAAUC,GACpD,MAAO,mBAAqBf,KAAKe,EAAGC,OAEtCrE,GAAQQ,KAAKyD,EAAS,SAAUK,GAC1BA,EAASD,MAAQC,EAASC,OAC5BZ,EAAIJ,aAAae,EAASD,KAAMC,EAASC,QAgB7C,KAAK,GADDC,GADAC,EAAYd,EAAIe,iBAAiB,qBAE5BC,EAAI,EAAGC,EAAeH,EAAUpF,OAAYuF,EAAJD,EAAkBA,IAAK,CACtEH,EAAkBC,EAAUE,GAAGE,GAAK,IAAMnE,CAG1C,KAAK,GADDoE,GAAgBnB,EAAIe,iBAAiB,gBAAkBD,EAAUE,GAAGE,GAAK,MACpEE,EAAI,EAAGC,EAAmBF,EAAczF,OAAY2F,EAAJD,EAAsBA,IAC7ED,EAAcC,GAAGxB,aAAa,YAAa,QAAUiB,EAAkB,IAEzEC,GAAUE,GAAGE,GAAKL,EAMpB,IAAK,GADDS,GADAC,EAAQvB,EAAIe,iBAAiB,iBAExBtF,EAAI,EAAG+F,EAAWD,EAAM7F,OAAY8F,EAAJ/F,EAAcA,IAAK,CAC1D6F,EAAcC,EAAM9F,GAAGyF,GAAK,IAAMnE,CAGlC,KAAK,GADD0E,GAAYzB,EAAIe,iBAAiB,WAAaQ,EAAM9F,GAAGyF,GAAK,MACvDQ,EAAI,EAAGC,EAAeF,EAAU/F,OAAYiG,EAAJD,EAAkBA,IACjED,EAAUC,GAAG9B,aAAa,OAAQ,QAAU0B,EAAc,IAE5DC,GAAM9F,GAAGyF,GAAKI,EAIhBtB,EAAI4B,gBAAgB,UAUpB,KAAK,GAFDC,GAAQC,EAFRC,EAAU/B,EAAIe,iBAAiB,UAC/BiB,KAGKC,EAAI,EAAGC,EAAaH,EAAQrG,OAAYwG,EAAJD,EAAgBA,IAC3DH,EAAaC,EAAQE,GAAGxC,aAAa,QAIhCqC,GAA6B,2BAAfA,GAA0D,2BAAfA,IAG5DD,EAASE,EAAQE,GAAGE,WAAaJ,EAAQE,GAAGG,YAG5CJ,EAAcvE,KAAKoE,GAGnB7B,EAAIqC,YAAYN,EAAQE,IAK5B,IAAID,EAActG,OAAS,IAAsB,WAAhB4D,GAA6C,SAAhBA,IAA2BpC,EAAWsC,IAAW,CAC7G,IAAK,GAAI8C,GAAI,EAAGC,EAAmBP,EAActG,OAAY6G,EAAJD,EAAsBA,IAQ7E,GAAI5D,UAASsD,EAAcM,IAAInH,EAIjC+B,GAAWsC,IAAU,EAQvB,GAAIgD,GAAYxC,EAAIe,iBAAiB,QACrC1E,GAAQQ,KAAK2F,EAAW,SAAUC,GAChCA,EAASL,aAAe,KAI1B/C,EAAGqD,WAAWC,aAAa3C,EAAKX,SAIzBrC,GAAiBA,EAAiB+C,QAAQV,IACjDA,EAAK,KAGLtC,IAEAS,EAASwC,OAmBT4C,EAAc,SAAUC,EAAUC,EAASC,GAG7CD,EAAUA,KAMV,IAAIxD,GAAcwD,EAAQxD,aAAe,SAGrCC,EAAcuD,EAAQvD,cAAe,EAGrCyD,EAAeF,EAAQG,IAG3B,IAAwBnF,SAApB+E,EAASnH,OAAsB,CACjC,GAAIwH,GAAiB,CACrB7G,GAAQQ,KAAKgG,EAAU,SAAUM,GAC/B/D,EAAc+D,EAAS7D,EAAaC,EAAa,SAAUS,GACrDgD,GAAwC,kBAAjBA,IAA6BA,EAAahD,GACjE+C,GAAQF,EAASnH,WAAawH,GAAgBH,EAAKG,WAKvDL,GACFzD,EAAcyD,EAAUvD,EAAaC,EAAa,SAAUS,GACtDgD,GAAwC,kBAAjBA,IAA6BA,EAAahD,GACjE+C,GAAMA,EAAK,GACfF,EAAW,OAITE,GAAMA,EAAK,GAOC,iBAAXK,SAAiD,gBAAnBA,QAAOC,QAC9CD,OAAOC,QAAUA,QAAUT,EAGF,kBAAXU,SAAyBA,OAAOC,IAC9CD,OAAO,WACL,MAAOV,KAIgB,gBAAXzH,KACdA,EAAOyH,YAAcA,IAIvBzH,OAAQC"}