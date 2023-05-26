@echo off
echo "Starting Angular development server..."
start ng serve --open
echo "Starting Node.js server..."
cd server
start npm start
cd ..