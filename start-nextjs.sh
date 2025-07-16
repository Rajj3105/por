#!/bin/bash
cd /home/runner/workspace
echo "Starting Next.js on port 5000..."
PORT=5000 npx next dev -p 5000 --hostname 0.0.0.0