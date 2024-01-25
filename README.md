Для работы тебе нужно: 
* Mongodb (siteDB - это база, а news - коллекция)
* Node v20
* Certbot
* Nginx
* Git

Ты только что скачал этот проект? Тогда жмай -> npm install

-- Prod build 
Если есть папка .next > cache - удаляй (папку cache, хотя можно и .next)
Потом стартуй -> npm run build
Потом стартуй -> npm run start 

-- Dev build
npm run start