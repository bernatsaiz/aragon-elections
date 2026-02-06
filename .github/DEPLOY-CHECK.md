# Si el lloc es desplega però no es veuen els estils

## 1. Comprovar que GitHub Pages usa **GitHub Actions** (molt important)

1. Al repositori a GitHub: **Settings** → **Pages** (menú esquerra).
2. A **Build and deployment** → **Source** ha de dir: **GitHub Actions**.
3. Si posa "Deploy from a branch", el lloc **no** està servint la carpeta `dist` que genera el workflow; per això no es veuen els estils.
   - Canvia a **GitHub Actions** i desa.
   - Espera 1–2 minuts i recarrega la web.

## 2. Comprovar que l’últim workflow ha anat bé

1. Pestanya **Actions** del repositori.
2. Obre el darrer run de **"Deploy to GitHub Pages"**.
3. Ha d’estar en verd (✓). Si és vermell, hi ha hagut un error al build; clica i mira el log.

## 3. Comprovar què es serveix realment

1. Obre la teva URL en directe (bernatsaiz.com o la de GitHub).
2. Clica amb el botó dret → **Veure codi font de la pàgina** (o View Page Source).
3. Cerca `_astro` o `stylesheet`:
   - Si veus `href="/_astro/...css"`: es está servint una versió antiga (sense estils inline). Cal que facis un **push** que dispari un nou deploy.
   - Si veus un bloc llarg `<style>...</style>` dins del `<head>`: la versió correcta està desplegada; prova **actualització forçada** (Cmd+Shift+R) o finestra privada.

## 4. Forçar un nou desplegament

Des de la terminal (a la carpeta del projecte):

```bash
git add .
git commit -m "Forçar nou deploy"
git push origin main
```

Després ves a **Actions** i espera que el workflow acabi en verd. Llavors recarrega la web (millor en finestra privada o Cmd+Shift+R).

---

## 5. Si no carreguen imatges, àudio o les subpàgines (404)

El lloc està configurat per a **https://bernatsaiz.com/aragon-elections/** (`base: '/aragon-elections/'`).

- **Si el lloc es desplega amb GitHub Actions** al repo `aragon-elections`, GitHub serveix l’artifact a `https://TEU_USUARI.github.io/aragon-elections/`. Totes les rutes (inici, sobre, jugar, imatges, àudio) haurien de funcionar allà.
- Per servir-ho a **bernatsaiz.com/aragon-elections/** cal que aquesta URL apunti al mateix lloc (CNAME, proxy o redirecció al GitHub Pages del repo) **o** que copis el contingut de `dist/` dins de la carpeta `aragon-elections` del teu servidor principal.

**Comprovar a la web en directe:**

1. Obre les eines de desenvolupament (F12) → pestanya **Network**.
2. Recarrega la pàgina i clica una subpàgina o un episodi.
3. Si alguna cosa falla, mira quina URL es demana (en vermell) i quin codi retorna (404, etc.). Totes les URLs han de ser `https://bernatsaiz.com/aragon-elections/...` (o el teu domini + `/aragon-elections/...`).

Si les URLs són correctes però el servidor retorna 404, el problema és la configuració del servidor o del desplegament (on es pugen els fitxers de `dist/`).
