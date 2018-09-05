# Блокировка Яндекс-Советника.

Этот скрипт поможет заблокировать и полностью <b>отключить Яндекс-Советник</b> на вашем сайте.
<br/><br/>
<img src="https://pp.userapi.com/c622530/v622530353/4f901/Odtdt1YtVeo.jpg" style="height:300px; transform:rotateZ(-90deg)">

## Установка
Воспользуйте любым из приведенных ниже способов, что бы установить <b>скрипт блокировки Яндекс-Советника</b>:

### 1. Скачать и скопировать скрипт вручную.
Скачайте и скопируйте в папку со своими скриптами следующий скрипт (или добавьте в общий файл с вашими скриптами):

```
https://Taroxx.github.io/kick_yandex_sovetnik/dist/kick_ya_sovetnik.js
```
Затем вставьте этот скрипт на ваш сайт.

### 2. Клонирование

```
git clone https://github.com/Taroxx/kick_ya_sovetnik.git
```

### 3. wget или curl

```
wget --content-disposition https://github.com/Taroxx/kick_ya_sovetnik/archive/master.zip
```

```
curl -LJO https://github.com/Taroxx/kick_ya_sovetnik/archive/master.zip
```
Затем подключите скрипт на ваш сайт.

## Описание и принцип действия

Скрипт встраивает в DOM div-элемент, крайний. После этого дива ничего быть не должно. Далее скрипт ждет появления Советника и удаляет его.
	
```
setObserveBlazer(observeClass,timeout);
```
observeClass - CSS класс контейнера;
timeout - если по каким то причинам DIV наблюдатель оказывается не последним, то можно увеличить время простоя.

### Пример использования
```
setObserveBlazer('kick-sovetnik',1000);
```


------------

Если у вас перестал работать скрипт или скрипт ломает ваш сайт, создайте тикет:
https://github.com/Taroxx/kick_ya_sovetnik/issues

