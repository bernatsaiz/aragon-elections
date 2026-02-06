# Com guardar el projecte i desplegar-lo a GitHub Pages

## 1. Guardar el projecte de manera segura (Git)

A la carpeta del projecte, executa:

```bash
# Inicialitza el repositori Git (només la primera vegada)
git init

# Afegeix tots els fitxers (el .gitignore exclou node_modules, dist, etc.)
git add .

# Primer commit
git commit -m "Initial commit: Elecciones en Aragón"
```

A partir d’ara, cada vegada que facis canvis:

```bash
git add .
git commit -m "Descripció dels canvis"
```

Així tens històric de versions i et pots recuperar d’un error o tornar enrere.

---

## 2. Pujar el projecte a GitHub

1. **Crea un repositori a GitHub**
   - Ves a [github.com](https://github.com) → **New repository**.
   - Nom del repo (exemple): `eleccions-arago`.
   - No afegiris README, .gitignore ni llicència (ja els tens en local).
   - Clica **Create repository**.

2. **Enllaça el teu projecte amb GitHub i puja el codi**

   GitHub et mostrarà comandes similars a aquestes (comprova la URL del teu repo):

   ```bash
   git remote add origin https://github.com/TEU_USUARI/eleccions-arago.git
   git branch -M main
   git push -u origin main
   ```

   Canvia `TEU_USUARI` i `eleccions-arago` si el teu repositori té un altre nom.

---

## 3. Configurar la URL del lloc (important per GitHub Pages)

Obre `astro.config.mjs` i canvia:

- **`YOUR_USERNAME`** pel teu usuari de GitHub.
- Si el repositori **no** es diu `eleccions-arago`, canvia també `base` i `site` amb el nom correcte.

Exemple si el teu usuari és `juanperez` i el repo és `eleccions-arago`:

```js
site: 'https://juanperez.github.io/eleccions-arago',
base: '/eleccions-arago/',
```

Després fes commit i push:

```bash
git add astro.config.mjs
git commit -m "Configurar URL per GitHub Pages"
git push
```

---

## 4. Activar GitHub Pages

1. Al teu repositori a GitHub: **Settings** → **Pages** (menú esquerra).
2. A **Build and deployment**, a **Source** tria: **GitHub Actions**.
3. No cal desactivar res més; el workflow que has pujat farà la desplegada.

---

## 5. Desplegar

- Cada vegada que facis **push a la branca `main`**, es dispara el workflow i es publica la web.
- La primera vegada pot trigar 1–2 minuts.
- La URL serà: **`https://TEU_USUARI.github.io/eleccions-arago/`** (substitueix pel teu usuari i nom del repo).

Per comprovar l’estat: al repo, pestanya **Actions**. Si el workflow és verd, el desplegament ha anat bé.

---

## Resum ràpid

| Pas | Acció |
|-----|--------|
| 1 | `git init` → `git add .` → `git commit -m "..."` |
| 2 | Crear repo a GitHub → `git remote add origin ...` → `git push -u origin main` |
| 3 | Editar `astro.config.mjs` (YOUR_USERNAME i nom del repo) |
| 4 | A GitHub: Settings → Pages → Source: **GitHub Actions** |
| 5 | Fer push a `main`; la web es publicarà sol·la |

Si el teu repo és **només** `TEU_USUARI.github.io` (pàgina d’usuari), aleshores a `astro.config.mjs` posa `base: '/'` i `site: 'https://TEU_USUARI.github.io'` i elimina el workflow o adapta’l per publicar la carpeta `dist` a la branca que faci servir GitHub Pages per a aquest tipus de repo.
