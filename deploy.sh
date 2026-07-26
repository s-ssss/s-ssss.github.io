#!/bin/bash

# ==========================================
# RedCat · 一键部署脚本
# 用法：
#   ./deploy.sh           -> 默认用 jsDelivr 发布
#   ./deploy.sh local     -> 切回 GitHub Pages 原路径发布
# ==========================================

MODE=${1:-cdn}

echo "🔧 正在切换资源模式..."

if [ "$MODE" == "local" ]; then
  echo "→ 模式：LOCAL（相对路径 /images/）"

  # data.js 切回本地
  sed -i.bak 's/const USE_CDN = .*/const USE_CDN = false;/' data.js

  # about.html 切回本地
  sed -i.bak 's/const USE_CDN = .*/const USE_CDN = false;/' about.html

else
  echo "→ 模式：CDN（jsDelivr 加速）"

  # data.js 切 jsDelivr
  sed -i.bak 's/const USE_CDN = .*/const USE_CDN = true;/' data.js

  # about.html 切 jsDelivr
  sed -i.bak 's/const USE_CDN = .*/const USE_CDN = true;/' about.html
fi

rm -f data.js.bak about.html.bak 2>/dev/null

echo "✅ 模式切换完成，准备 Git 提交..."
git add data.js about.html style.css 2>/dev/null || git add .
git commit -m "deploy: $MODE mode @ $(date '+%Y-%m-%d %H:%M')"
git push origin main

echo "🚀 推送完毕，GitHub Pages 构建中..."
