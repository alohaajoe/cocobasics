---
sidebar_position: 6
---

# How to - git pull

Ok, es wurden Änderungen in dem Repository in dem Du gerade arbeitest vorgenommen.
Jetzt willst Du die natürlich auch auf **Deinem** PC/ Laptop haben. 
Was steht auf der anderen Seite der Tür, wenn auf dieser push steht? - Richtig, pull!
Und genau das machen wir jetzt auch. ;)


![Screenshot git pull Mac Terminal](./images/Screenshots-GitPull/GitPull.png)

1. Nachdem Du das Terminal (Mac) bzw. die Git Bash (Windows) geöffnet hast, navigierst Du in den Ordner, den Du updaten willst.
2. **_Optional_**
   `git status` _[(Was ist Git Status?)](GitStatus.md)_ zeigt uns **nicht** an, dass wir eine neuere Version haben könnten, da es nur **lokal** vergleicht.
3. Bist du im Ordner deiner Wahl?
   Dann führe nun `git pull` aus.
   Dir wird nun angezeigt, welche Dateien in der Zwischenzeit zu deinem letzten git pull, von Anderen geändert wurden.
   (In meinem Fall waren es sehr viele!)

Das Repository ist nun wieder auf dem neusten Stand! :)