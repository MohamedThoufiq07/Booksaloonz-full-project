---
description: Push changes to root, frontend, and backend repositories sequentially.
---

// turbo-all
1. Stage, commit, and push in the root repository.
```powershell
git add .
git commit -m "update: sync improvements to root repository"
git push
```

2. Stage, commit, and push in the frontend repository.
```powershell
cd "booksaloons frontend"
git add .
git commit -m "style: final responsiveness and alignment fixes"
git push
```

3. Stage, commit, and push in the backend repository.
```powershell
cd "booksaloonz backend"
# Since I deleted the README here earlier, there should be a change to commit
git add .
git commit -m "docs: cleanup redundant readme"
git push
```
