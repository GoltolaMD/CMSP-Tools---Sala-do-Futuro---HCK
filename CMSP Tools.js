javascript:(()=>{
  if(document.getElementById('cmsp-tools')) return;

  const styleTag = document.createElement('style');
  document.head.appendChild(styleTag);

  const THEMES = {
    dark: `
      #cmsp-tools {
        background: #1e1e1e; color: #f1f1f1;
      }
      #cmsp-tools a {
        background: #2c2c2c; color: #fff;
      }
      #cmsp-tools a:hover {
        background: #3d3d3d;
      }
    `,
    light: `
      #cmsp-tools {
        background: #ffffff; color: #222;
      }
      #cmsp-tools a {
        background: #f0f0f0; color: #000;
      }
      #cmsp-tools a:hover {
        background: #e0e0e0;
      }
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
      padding: 15px; border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.3);
      font-family: 'Segoe UI', sans-serif; max-width: 320px;
    }
    #cmsp-tools h3 { margin: 0 0 10px; font-size: 18px; }
    #cmsp-tools button {
      margin-right: 5px;
      border: none; border-radius: 6px;
      padding: 6px 10px;
      cursor: pointer;
      font-weight: bold;
    }
    #cmsp-tools a {
      display: block;
      padding: 10px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.2s ease;
      margin-bottom: 6px;
    }
    #cmsp-tools .footer {
      margin-top: 10px;
      font-size: 12px;
      text-align: center;
      opacity: 0.7;
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
  box.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <h3 style="margin: 0;">📦 CMSP Tools</h3>
      <div>
        <button onclick="{
          const content = document.getElementById('cmsp-content');
          content.style.display = content.style.display === 'none' ? 'block' : 'none';
        }">➖</button>
        <button onclick="document.getElementById('cmsp-tools').remove()">✖</button>
      </div>
    </div>

    <div id="cmsp-content">
      <div style="margin: 10px 0;">
        <button onclick="(${applyTheme.toString()})('dark')" style="background:#333;color:#fff;">🌑 Escuro</button>
        <button onclick="(${applyTheme.toString()})('light')" style="background:#eee;color:#000;">☀️ Claro</button>
        <button onclick="(${applyTheme.toString()})('colorful')" style="background:linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet); background-size: 1400% 1400%; animation: rainbow 15s linear infinite; color:#fff;">🌈 Colorido</button>
      </div>
      <div>
        <a href="javascript:(()=>{if(!location.pathname.includes('/students/app/'))return alert('O script só funciona dentro do Matific, faça login e tente novamente.');let t=location.pathname.split('/app/')[1].split('/')[0];fetch(\`https://www.matific.com/api/student-site-v2/game-initialization-data/?exclude_firebase_token=true&app_version=\${t}&platform=WebGLPlayer\`,{method:'GET',mode:'cors',credentials:'include'}).then(t=>t.json()).then(e=>{for(let t of e.Campaigns)for(let i of t.Episodes)e.Assignments.School.push({Id:i.EpisodeId,Slug:i.Slug,AssignmentId:i.AssignmentId,Order:i.Order});window.open(\`https://matific.cupiditys.lol/?matificData=\${btoa(JSON.stringify({a:e.Assignments,b:e.EpisodeContainerVersion,c:t,d:e.UserData.UserDataToken}))}\`)})})();">📘 Matific</a>
        <a href="javascript:!function(){if('livros.arvore.com.br'!==location.host)return alert('Este script só funciona no Árvore!');open('https://leiasp.cupiditys.lol/?key='+encodeURIComponent(btoa(document.cookie.split('access_token=')[1].split(';')[0])))}();">📚 Leia SP</a>
        <a href="javascript:fetch('https://speakify.cupiditys.lol/api/bookmark.js').then(r=>r.text()).then(eval)">🎤 SPeak</a>
        <a href="javascript:fetch('https://res.cloudinary.com/dctxcezsd/raw/upload/v1745882260/saladofuturov2.js').then(t=>t.text()).then(eval);">📝 Tarefa SP (Script)</a>
        <a href="javascript:fetch('https://res.cloudinary.com/dctxcezsd/raw/upload/v1745012111/saladofuturo.js').then(t=>t.text()).then(eval);">📊 Prova Paulista</a>
        <a href="javascript:fetch('https://res.cloudinary.com/dglsgcrtk/raw/upload/v1747348028/srwrd24u2y1xxiszea44.js').then(t=>t.text()).then(eval);">✍️ Redação</a>
        <a href="javascript:(()=>{const script=\`// ==UserScript==\\n// @name         Alura-Infinity\\n// @namespace    https://cursos.alura.com.br/\\n// @match        https://cursos.alura.com.br/course/*/task/*\\n// @icon         https://i.imgur.com/OtfkTcS.png\\n// @grant        none\\n// @require      https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/AluraInfinity.js\\n// ==/UserScript==\`; navigator.clipboard.writeText(script).then(()=>alert('✅ Script copiado para a área de transferência!\\nCole em um novo script no Tampermonkey ou Violentmonkey.')).catch(()=>alert('❌ Erro ao copiar o script.'));})();">🎓 Alura-Infinity</a>
        <a href="javascript:fetch('https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/KhanResolver.js').then(t=>t.text()).then(eval);">🎯 Khan Academy</a>
        <a href="javascript:fetch('https://res.cloudinary.com/dglsgcrtk/raw/upload/v1745457741/expansãonoturna_nhtpyn.js').then(t=>t.text()).then(eval);">🌙 Expansão Noturno</a>
        <a href="javascript:(()=>{alert('ℹ️ Não é necessário copiar o bookmarklet individual de cada script.\\nBasta apertar o botão correspondente!'); window.open('https://darkmodde.github.io/CMSP-Hacks/videos', '_blank');})();">📺 Tutoriais</a>
        <a href="javascript:(()=>{let code=prompt('Digite o código:');if(code==='7c'){window.open('https://acervocmsp.educacao.sp.gov.br/135154/1167428.pdf','_blank');window.open('https://acervocmsp.educacao.sp.gov.br/134823/1161288.pdf','_blank');}else{alert('Código inválido.');}})();">🔐 Códigos</a>
      </div>
      <div class="footer">Feito por <strong>GoltolaMD</strong></div>
    </div>
  `;

  document.body.appendChild(box);
})();
