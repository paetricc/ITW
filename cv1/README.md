# Cvičení 1 DNS a HTTP
1. Připojte se na server merlin.fit.vutbr.cz
    * Windows: např. PuTTY
    * Linux: ssh merlin
2. Domain Name Service (DNS)
    * Seznámení s programem host (příp. nslookup ve Windows)
    * Zjistěte IP adresu serveru http://www.fbm.vutbr.cz/
    * Zjistěte doménové jméno serveru s IP adresou 193.108.106.40
    * Jaké je skutečné jméno serveru, na kterém běží web FP?
3. Seznamte se s vývojářskými nástroji prohlížeče Firefox, případně Chrome (Ctrl-Shift-I). Zaměřte se zejména na panel Síť, který umožňuje sledovat HTTP komunikaci.
4. Protokol HTTP
    * Otevření panelu síť
    * Připojení na server www.fit.vutbr.cz
    * Všimněte si odeslání požadavku, odpovědi s přesměrování a odeslání dalšího požadavku.
    * Prohlédněte si hlavičky požadavků a odpovědí. Prostudujte další vyslané požadavky. K čemu slouží?
    * Zkuste jiné adresy.
5. Seznamte se s programem wget
    * Stahování dokumentů
    * Rekurzivní stahování (-r), stahování vyžadovaných souborů (-p)
6. Dynamické stránky
    * Porovnejte stránky [datum1.php](https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/datum1.php.cs) a [datum2.html](https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/datum2.html.cs)
    * Porovnejte kód stránek
7. Rozšiřující zajímavá témata
    * Seznamte se s programem telnet
    * Proxy
        * Připojte se k proxy serveru cache.fit.vutbr.cz port 3128
        * Stáhněte úvodní stránku http://www.seznam.cz/
        * Prostudujte hlavičku odpovědi