#!/bin/bash

# Push converify-landing to GitHub
# Usage: ./push-to-github.sh YOUR-GITHUB-USERNAME

if [ -z "$1" ]; then
  echo "❌ Error: Please provide your GitHub username"
  echo "Usage: ./push-to-github.sh YOUR-GITHUB-USERNAME"
  exit 1
fi

GITHUB_USERNAME=$1

echo "📦 Setting up remote repository..."
git remote add origin https://github.com/$GITHUB_USERNAME/converify-landing.git

echo "🔄 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Done! Your code is now on GitHub:"
echo "   https://github.com/$GITHUB_USERNAME/converify-landing"
