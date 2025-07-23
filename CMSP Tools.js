javascript:(()=>{
  if(document.getElementById('cmsp-tools')) return;

  const styleTag = document.createElement('style');
  document.head.appendChild(styleTag);

  const THEMES = {
    dark: `
      #cmsp-tools { background: #1e1e1e; color: #f1f1f1; }
      #cmsp-tools a { background: #2c2c2c; color: #fff; }
      #cmsp-tools a:hover { background: #3d3d3d; }
    `,
    light: `
      #cmsp-tools { background: #ffffff; color: #222; }
      #cmsp-tools a { background: #f0f0f0; color: #000; }
      #cmsp-tools a:hover { background: #e0e0e0; }
    `,
    colorful: `
      @keyframes rainbow {
        0% { background-position: 0% 0%; }
        50% { background-position: 100% 100%; }
        100% { background-position: 0% 0%; }
      }
      #cmsp-tools {
        background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
        background-size: 1400% 1400%;
        animation: rainbow 15s linear infinite;
        color: #fff;
      }
      #cmsp-tools a {
        background: rgba(255,255,255,0.1); color: #fff;
      }
      #cmsp-tools a:hover {
        background: rgba(255,255,255,0.2);
      }
    `
  };

  const baseStyles = `
    #cmsp-tools {
      position: fixed; top: 20px; right: 20px; z-index: 9999;
      padding: 10px; border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.3);
      font-family: 'Segoe UI', sans-serif; max-width: 240px;
    }
    #cmsp-tools h3 { margin: 0 0 10px; font-size: 16px; }
    #cmsp-tools button {
      margin-right: 5px;
      border: none; border-radius: 6px;
      padding: 4px 8px;
      cursor: pointer;
      font-weight: bold;
      font-size: 13px;
    }
    #cmsp-tools a {
      display: block;
      padding: 8px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.2s ease;
      margin-bottom: 6px;
      font-size: 13px;
    }
    #cmsp-tools .footer {
      margin-top: 10px;
      font-size: 11px;
      text-align: center;
      opacity: 0.7;
    }
    #cmsp-donation-box {
      position: fixed; top: 20px; left: 20px; z-index: 10000;
      background: white; color: black;
      border-radius: 12px; padding: 10px;
      box-shadow: 0 0 15px rgba(0,0,0,0.3);
      max-width: 200px; font-family: 'Segoe UI', sans-serif;
      display: none;
    }
    #cmsp-donation-box input {
      width: 100%; padding: 6px; margin-bottom: 10px;
      border-radius: 6px; border: 1px solid #ccc;
    }
    #cmsp-donation-box button {
      width: 100%; padding: 8px;
      border: none; border-radius: 6px;
      background: #4caf50; color: white;
      cursor: pointer; font-weight: bold;
      font-size: 13px;
    }
    #cmsp-donation-box .close {
      background: #e74c3c; margin-top: 10px;
    }
  `;

  let currentTheme = 'colorful';
  function applyTheme(theme) {
    currentTheme = theme;
    styleTag.innerHTML = baseStyles + THEMES[theme];
  }

  applyTheme(currentTheme);

  const box = document.createElement('div');
  box.id = 'cmsp-tools';
  box.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;">
    <h3 style="margin:0;">📦 CMSP Tools</h3>
    <div>
      <button onclick="{const content=document.getElementById('cmsp-content');content.style.display=content.style.display==='none'?'block':'none';}">➖</button>
      <button onclick="document.getElementById('cmsp-tools').remove();document.getElementById('cmsp-donation-box')?.remove()">✖</button>
    </div>
  </div>
  <div id="cmsp-content">
    <div style="margin:10px 0;">
      <button onclick="(${applyTheme.toString()})('dark')" style="background:#333;color:#fff;">🌑</button>
      <button onclick="(${applyTheme.toString()})('light')" style="background:#eee;color:#000;">☀️</button>
      <button onclick="(${applyTheme.toString()})('colorful')" style="background:linear-gradient(45deg,red,orange,yellow,green,blue,indigo,violet);background-size:1400% 1400%;animation:rainbow 15s linear infinite;color:#fff;">🌈</button>
      <button title="Avisos" onclick="window.open('https://aviso-cmsp-tools.netlify.app','_blank')" style="background:#cc1100;color:#fff;">🚨 1!!! </button>
    </div>
    <div>
      <a href="javascript:(()=>{if(!location.pathname.includes('/students/app/'))return alert('O script só funciona dentro do Matific, faça login e tente novamente.');let t=location.pathname.split('/app/')[1].split('/')[0];fetch(\`https://www.matific.com/api/student-site-v2/game-initialization-data/?exclude_firebase_token=true&app_version=\${t}&platform=WebGLPlayer\`,{method:'GET',mode:'cors',credentials:'include'}).then(t=>t.json()).then(e=>{for(let t of e.Campaigns)for(let i of t.Episodes)e.Assignments.School.push({Id:i.EpisodeId,Slug:i.Slug,AssignmentId:i.AssignmentId,Order:i.Order});window.open(\`https://matific.cupiditys.lol/?matificData=\${btoa(JSON.stringify({a:e.Assignments,b:e.EpisodeContainerVersion,c:t,d:e.UserData.UserDataToken}))}\`)})})();">📘 Matific</a>
      <a href="javascript:!function(){if('livros.arvore.com.br'!==location.host)return alert('Este script só funciona no Árvore!');open('https://leiasp.cupiditys.lol/?key='+encodeURIComponent(btoa(document.cookie.split('access_token=')[1].split(';')[0])))}();">📚 Leia SP</a>
      <a href="javascript:fetch(`https://res.cloudinary.com/dtp29k95n/raw/upload/v1750961477/book_dwju2r.js`).then(r => r.text()).then(r => eval(r))">🎤 SPeak</a>
      <a href="https://crimsonstrauss.xyz/maintenance_page.php" target="_blank">📝 Tarefa SP</a>
      <a href="javascript:fetch('https://res.cloudinary.com/dctxcezsd/raw/upload/v1745012111/saladofuturo.js').then(t=>t.text()).then(eval);">📊 Prova Paulista</a>
      <a href="javascript:fetch('https://res.cloudinary.com/dglsgcrtk/raw/upload/v1747348028/srwrd24u2y1xxiszea44.js').then(t=>t.text()).then(eval);">✍️ Redação</a>
      <a href="javascript:(()=>{const script=\`// ==UserScript==\\n// @name         Alura-Infinity\\n// @namespace    https://cursos.alura.com.br/\\n// @match        https://cursos.alura.com.br/course/*/task/*\\n// @icon         https://i.imgur.com/OtfkTcS.png\\n// @grant        none\\n// @require      https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/AluraInfinity.js\\n// ==/UserScript==\`; navigator.clipboard.writeText(script).then(()=>alert('✅ Script copiado!')).catch(()=>alert('❌ Erro ao copiar.'));})();">🎓 Alura-Infinity</a>
      <a href="javascript:fetch('https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/KhanResolver.js').then(t=>t.text()).then(eval);">🎯 Khan Academy</a>
      <a href="javascript:fetch('https://res.cloudinary.com/dglsgcrtk/raw/upload/v1745457741/expansãonoturna_nhtpyn.js').then(t=>t.text()).then(eval);">🌙 Expansão Noturno</a>
      <a href="https://tutorial-cmsp-tool-site.netlify.app" target="_blank">📺 Tutoriais</a>
      <a href="javascript:(()=>{let code=prompt('Digite o código:');if(code==='7c'){window.open('https://acervocmsp.educacao.sp.gov.br/135154/1167428.pdf');window.open('https://acervocmsp.educacao.sp.gov.br/134823/1161288.pdf');}else if(code==='alura'){window.open('https://alura.mmrcoss.tech');}else if(code==='redasp1'){window.open('https://redacao.cupiditys.lol');}else if(code==='git'){window.open('https://darkmodde.github.io/CMSP-Hacks/');}else if(code==='egg'){alert('sala do futuro meu ovo🥚 esquerdo kkkkkkk');}else if(code==='alura1'){window.open('https://github.com/marcos10pc/Alura-Destroyer/blob/main/script.js');}else if(code==='gabaritus'){window.open('https://gabaritus.moonscripts.cloud');}else{alert('Código inválido.');}})();">🔐 Códigos</a>
    </div>
    <div class="footer">
      Feito por <strong>GoltolaMD</strong>
      <button onclick="window.open('https://pixgg.com/GoltolaMD', '_blank')" style="margin-left: 8px;">💖Doar</button>
    </div>
  </div>`;

  const donateBox = document.createElement('div');
  donateBox.id = 'cmsp-donation-box';
  donateBox.innerHTML = `
    <strong>Doação via Pix</strong>
    <p style="margin: 10px 0 5px;">Chave Pix:</p>
    <input type="text" readonly value="goltola@pix.com" id="pix-key">
    <button onclick="navigator.clipboard.writeText(document.getElementById('pix-key').value).then(()=>alert('✅ Pix copiado!'))">📋 Copiar Pix</button>
    <button class="close" onclick="document.getElementById('cmsp-donation-box').style.display = 'none'">✖ Fechar</button>
  `;

  document.body.appendChild(box);
  document.body.appendChild(donateBox);
})();
