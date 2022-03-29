# Cvičení 6 JavaScript a jQuery
1. vyjděte z dokumentu vytvořeného na minulém cvičení
2. upravte navigaci tak, aby byla dobře zobrazitelná na zařízeních s různým rozlišením
3. uvažujte následující třídy zařízení:
    * extra small (xs): <576 px - [screen-xs.png](https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/img6/screen-xs.png)
        * zobrazí hamburger menu
    * small (sm) - mobilní telefon: ≥576px - [screen-sm.png](https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/img6/screen-sm.png)
    * medium (md) - tablet: ≥768px - [screen-md.png](https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/img6/screen-md.png)
        * zobrazí ikonky bez popisu
        * při hover akci zobrazí popis (viz níže)
    * large (lg) - notebook: ≥992px - [screen-lg.png](https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/img6/screen-lg.png)
    * extra large (xl) - desktop: ≥1200px - [screen-xl.png](https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/img6/screen-xl.png)
        * zobrazí standardní menu s popisem bez title (viz níže)
4. ikony:
    * prozkoumejte službu [Font Awesome](https://fontawesome.com/) a zvolte vhodné free ikony pro menu
    * použité ikony: home, info-circle, tv, grin-beam-sweat, hammer, envelope, code-branch, bars
5. hamburger menu:
    * v případě velmi malého rozlišení (xs) bude k dispozici tlačítko pro zobrazení vysouvacího menu - [menu-opened.png](https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/img6/menu-opened.png)
6. sticky menu:
    * při scrollování stránky bude menu fixně dostupné v horní části stránky - [menu-sticky.png](https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/img6/menu-sticky.png)
7. dynamický title u ikon:
    * v případě, že položky navigace nemají zobrazený popis (sm, md), bude k dispozici title obsahující stejný obsah jako standardní popis - [menu-hover.png](https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/img6/menu-hover.png)
    * pokud bude popis dotupný, title nebude aktivní: [menu-default.png](https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/img6/menu-default.png)
8. animované scrollování:
    * při prokliknutí položky navigace bude provedeno animované scrollování na kotvu (např. 1000 ms)
    * dejte si pozor, aby bylo zohledněno sticky menu (vhodná pozice kotvy; při přechodu na sticky menu se stránka skokově nepousouvala; apod…)
9. pro implementaci použijte Javascript, případně JQuery, pro sticky menu nepoužívejte CSS vlastnost position: sticky, animace řešte s použitím knihovny v JQuery
10. po splnění úkolu prozkoumejte knihovnu [JQueryUI](https://jqueryui.com/), případně dostupné [komponenty](https://getbootstrap.com/docs/4.4/components/) knihovny Bootstrap