#!/bin/bash

# Script to remove Next.js completely from project

echo "🔧 Cleaning Next.js from project..."

# 1. Remove next from root package.json if exists
cd /root/.openclaw/workspace/shinigami-reader

# Check if next exists in package.json
if grep -q '"next"' package.json; then
    echo "❌ Found Next.js in root package.json"
    echo "Please manually remove 'next' dependency"
else
    echo "✅ Root package.json is clean"
fi

# 2. Check client package.json
if grep -q '"next"' client/package.json; then
    echo "❌ Found Next.js in client package.json"
    echo "Please manually remove 'next' dependency"
else
    echo "✅ Client package.json is clean"
fi

# 3. Check if there's any Next.js files
echo "Checking for Next.js files..."
NEXT_FILES=$(find . -name "next.config.*" -o -name "next.config.ts" 2>/dev/null)
if [ ! -z "$NEXT_FILES" ]; then
    echo "⚠️ Found Next.js config files:"
    echo "$NEXT_FILES"
    echo "These might trigger Railway security check"
else
    echo "✅ No Next.js config files found"
fi

# 4. Check for package-lock.json
if [ -f "package-lock.json" ]; then
    echo "⚠️ package-lock.json exists in root"
    echo "Recommendation: Delete and recreate"
    echo "rm package-lock.json"
    echo "npm install"
fi

# 5. Check server package.json
if [ -f "server/package.json" ]; then
    if grep -q '"next"' server/package.json; then
        echo "❌ Found Next.js in server package.json"
    else
        echo "✅ Server package.json is clean"
    fi
fi

echo ""
echo "📋 Summary:"
echo "✅ Check all package.json files for 'next' dependency"
echo "✅ Remove next.config.* files if found"
echo "✅ Delete package-lock.json and run npm install"
echo "✅ Push changes to GitHub"
